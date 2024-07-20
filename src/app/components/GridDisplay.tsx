import { Dimensions, GifDisplay } from "../lib/types";

type GridDisplayProps = {
  gifDisplay: Exclude<GifDisplay, null>;
  dimensions: Dimensions;
};

export default function GridDisplay(props: GridDisplayProps) {
  const { gifDisplay, dimensions } = props;
  const gridCols = `repeat(${dimensions.cols}, 1fr)`;
  const gridRows = `repeat(${dimensions.rows}, 1fr)`;

  const gridBoxes = Array.from({ length: dimensions.cols * dimensions.rows });

  console.log(gridBoxes);
  console.log(dimensions.cols);

  return (
    <div>
      <div
        className="grid gap-3 "
        style={{ gridTemplateRows: gridRows, gridTemplateColumns: gridCols }}
      >
        {gridBoxes.map((_, index) => (
          <div key={index} className="w-[100%] relative pb-[100%]">
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
