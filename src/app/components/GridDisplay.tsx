import { useEffect, useState } from "react";
import { GifSplitterData } from "../lib/types";

type GridDisplayProps = GifSplitterData;

export default function GridDisplay(props: GridDisplayProps) {
  const { gifDisplay, dimensions } = props;

  if (!gifDisplay) {
    return;
  }

  const [aspectRatio, setAspectRatio] = useState<number>(1);

  useEffect(() => {
    const img = new Image();
    img.src = gifDisplay;

    img.onload = () => {
      setAspectRatio(img.width / img.height);
    };
  }, [gifDisplay]);

  const gridCols = `repeat(${dimensions.cols}, 1fr)`;
  const gridRows = `repeat(${dimensions.rows}, 1fr)`;
  const paddingBottom = `${100 / aspectRatio}%`;

  const gridBoxes = Array.from({ length: dimensions.cols * dimensions.rows });

  return (
    <div>
      <div
        className="grid gap-3 mt-2"
        style={{ gridTemplateRows: gridRows, gridTemplateColumns: gridCols }}
      >
        {gridBoxes.map((_, index) => (
          <div
            key={index}
            className="w-[100%] relative"
            style={{ paddingBottom }}
          >
            <img
              src={gifDisplay}
              alt="Gif Preview"
              className="w-[100%] h-[100%] absolute left-[50%] top-[50%]  object-cover transform translate-x-[-50%] translate-y-[-50%]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
