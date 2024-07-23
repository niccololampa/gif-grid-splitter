import { Dimensions } from "../lib/types";

export function imageSplitter(
  image: HTMLImageElement,
  dimensions: Dimensions
): string[] {
  const canvas = document.createElement("canvas");
  const canvasContext = canvas.getContext("2d");

  if (!canvasContext) return [];

  const { width, height } = image;
  const imagePortionWidth = width / dimensions.cols;
  const imagePortionHeight = height / dimensions.rows;
  const imagePortions: string[] = [];

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

      imagePortions.push(canvas.toDataURL());
    }
  }

  return imagePortions;
}
