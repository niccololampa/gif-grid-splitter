import { useEffect, useState } from "react";
import { GifFrame, GifSplitterData } from "../lib/types";
import {
  imageSplitter,
  extractGifFrames,
  combineGifFrames,
  createGifFromFrames,
} from "../utils/ImageProcessing";

type GridDisplayProps = GifSplitterData;

export default function GridDisplay(props: GridDisplayProps) {
  const { gifDisplay, dimensions } = props;

  if (!gifDisplay) {
    return;
  }

  const [aspectRatio, setAspectRatio] = useState<number>(1);
  const [gifFrames, setGifFrames] = useState<GifFrame[]>([]);

  const [imageSplits, setImageSplits] = useState<string[]>([]);

  const [imageWidth, setImageWidth] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);

  // extracting gif frames
  useEffect(() => {
    setLoading(true);
    const img = new Image();
    img.src = gifDisplay;

    img.onload = async () => {
      setAspectRatio(img.width / img.height);
      setImageWidth(img.width);
      const frames = await extractGifFrames(gifDisplay);
      setGifFrames(frames);
    };
  }, [gifDisplay, dimensions]);

  // splitting the frames for the imageSplits
  useEffect(() => {
    const processFrames = async () => {
      if (!gifFrames.length) {
        return;
      }

      try {
        // Process each GIF frame
        const splitPromises = gifFrames.map(async (frame) => {
          const img = new Image();
          img.src = frame.url;
          return new Promise<GifFrame[]>((resolve, reject) => {
            img.onload = () => {
              resolve(imageSplitter(img, dimensions, frame.delay));
            };
            img.onerror = reject;
          });
        });

        // finish all image splitting promises to complete
        const splitResults = await Promise.all(splitPromises);

        // combine all frames
        const microFrames = combineGifFrames(splitResults);

        // Create GIFs for each set of combined frames
        const microGifsPromises = microFrames.map(async (frames) => {
          return createGifFromFrames(frames);
        });

        // finish all GIF creation promises to complete
        const microGifs = await Promise.all(microGifsPromises);

        // Update the state with GIF URLs
        setImageSplits(microGifs);
      } catch (error) {
        console.error("Error processing frames:", error);
      } finally {
        setLoading(false);
      }
    };

    processFrames();
  }, [gifFrames]);

  const gridRows = `repeat(${dimensions.rows}, ${100 / dimensions.rows}%)`;
  const gridCols = `repeat(${dimensions.cols}, ${100 / dimensions.cols}%)`;

  return (
    <div className="flex justify-center ">
      {loading ? (
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div
          className="grid gap-1 mt-2"
          style={{
            gridTemplateRows: gridRows,
            gridTemplateColumns: gridCols,
            aspectRatio,
            width: `${imageWidth}px`,
          }}
        >
          {imageSplits.map((src, index) => (
            <div key={index} className="w-[100%] h-[100%] relative">
              <img
                src={src}
                alt="Gif Preview"
                className="w-[100%] h-[100%] absolute left-[50%] top-[50%]  object-cover transform translate-x-[-50%] translate-y-[-50%]"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
