import { Dimensions, GifDisplay, GifFrame } from "../lib/types";
import { parseGIF, decompressFrames } from "gifuct-js";
import GIFEncoder from "gif-encoder-2";

export function imageSplitter(
  image: HTMLImageElement,
  dimensions: Dimensions,
  delay: number
): GifFrame[] {
  const canvas = document.createElement("canvas");
  const canvasContext = canvas.getContext("2d");

  if (!canvasContext) return [];

  const { width, height } = image;
  const imagePortionWidth = width / dimensions.cols;
  const imagePortionHeight = height / dimensions.rows;
  const imagePortions: GifFrame[] = [];

  for (let row = 0; row < dimensions.rows; row++) {
    for (let col = 0; col < dimensions.cols; col++) {
      canvas.height = imagePortionHeight;
      canvas.width = imagePortionWidth;

      canvasContext.drawImage(
        image,
        col * imagePortionWidth,
        row * imagePortionHeight,
        imagePortionWidth,
        imagePortionHeight,
        0,
        0,
        imagePortionWidth,
        imagePortionHeight
      );

      imagePortions.push({
        url: canvas.toDataURL(),
        delay,
        width: imagePortionWidth,
        height: imagePortionHeight,
      });
    }
  }

  return imagePortions;
}

export async function extractGifFrames(
  gifDisplay: string
): Promise<GifFrame[]> {
  const res = await fetch(gifDisplay);
  const arrayBuffer = await res.arrayBuffer();
  const gif = parseGIF(arrayBuffer);
  const frameData = decompressFrames(gif, true);
  const frameImages = frameData.map((frame) => {
    const imageData = new ImageData(
      new Uint8ClampedArray(frame.patch),
      frame.dims.width,
      frame.dims.height
    );
    const canvas = document.createElement("canvas");
    canvas.width = frame.dims.width;
    canvas.height = frame.dims.height;
    const ctx = canvas.getContext("2d");
    ctx?.putImageData(imageData, 0, 0);
    const url = canvas.toDataURL("image/png");
    return { url, delay: frame.delay };
  });
  return frameImages;
}

export function createGifFromFrames(frames: GifFrame[]): Promise<string> {
  return new Promise((resolve, reject) => {
    if (frames.length === 0) {
      reject(new Error("No frames provided"));
      return;
    }

    // all frames have the same dimensions
    const { width, height } = frames[0];
    const encoder = new GIFEncoder(width, height);

    // Create a canvas to draw each frame
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      reject(new Error("Failed to get canvas context"));
      return;
    }
    canvas.width = width;
    canvas.height = height;

    // Set up the GIF encoder
    encoder.start();
    encoder.setRepeat(0);
    encoder.setDelay(frames[0].delay);
    encoder.setQuality(10);

    // Add each frame to the GIF encoder
    let framesLoaded = 0;
    frames.forEach((frame) => {
      const img = new Image();
      img.src = frame.url;
      img.onload = () => {
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        encoder.setDelay(frame.delay);
        encoder.addFrame(ctx);
        framesLoaded++;
        if (framesLoaded === frames.length) {
          encoder.finish();
          encoder.out.getData();
          const blob = new Blob([encoder.out.getData()], { type: "image/gif" });
          const url = URL.createObjectURL(blob);
          resolve(url);
        }
      };
      img.onerror = (error) => {
        reject(error);
      };
    });
  });
}

export function combineGifFrames(frames: GifFrame[][]): GifFrame[][] {
  if (frames.length === 0) {
    console.log("error");
    return [];
  }
  //same frame length
  const frameLength = frames[0].length;

  const combinedFrames: GifFrame[][] = Array.from(
    { length: frameLength },
    () => []
  );

  // Iterate over each frames
  for (let i = 0; i < frameLength; i++) {
    frames.forEach((frame) => {
      if (frame[i]) {
        combinedFrames[i].push(frame[i]);
      }
    });
  }

  return combinedFrames;
}
