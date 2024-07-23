import { useEffect, useState } from "react";
import { GifSplitterData } from "../lib/types";
import { imageSplitter } from "../utils/ImageProcessing";

type GridDisplayProps = GifSplitterData;

export default function GridDisplay(props: GridDisplayProps) {
  const { gifDisplay, dimensions } = props;

  if (!gifDisplay) {
    return;
  }

  const [aspectRatio, setAspectRatio] = useState<number>(1);

  const [imageSplits, setImageSplits] = useState<string[]>([]);

  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.src = gifDisplay;

    img.onload = () => {
      setAspectRatio(img.width / img.height);
      setImageSplits(imageSplitter(img, dimensions));
      setImageWidth(img.width);
    };
  }, [gifDisplay, dimensions]);

  // const gridCols = `repeat(${dimensions.cols}, 1fr)`;
  // const gridRows = `repeat(${dimensions.rows}, 1fr)`;
  // const paddingBottom = `${100 / aspectRatio}%`;
  // const paddingBottom = `100%`;

  const gridRows = `repeat(${dimensions.rows}, ${100 / dimensions.rows}%)`;
  const gridCols = `repeat(${dimensions.cols}, ${100 / dimensions.cols}%)`;

  return (
    <div>
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
          <div
            key={index}
            className="w-[100%] h-[100%] relative"
            // style={{ paddingBottom }}
          >
            <img
              src={src}
              alt="Gif Preview"
              className="w-[100%] h-[100%] absolute left-[50%] top-[50%]  object-cover transform translate-x-[-50%] translate-y-[-50%]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
