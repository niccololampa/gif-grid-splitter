"use client";

import { useState } from "react";
import RowColInput from "./components/RowColInput";
import { Dimensions, GifDisplay } from "./lib/types";
import ImageInput from "./components/ImageInput";
import GridDisplay from "./components/GridDisplay";

export default function MainPage() {
  const [dimensions, setDimensions] = useState<Dimensions>({
    cols: 1,
    rows: 1,
  });

  const [gifImage, setGifImage] = useState<File | null>(null);
  const [gifDisplay, setGifDisplay] = useState<GifDisplay>(null);

  const handleSubmitDimensions = (dimensions: Dimensions) => {
    setDimensions(dimensions);
  };

  const handleImageUpload = (image: File) => {
    const gifReader = new FileReader();

    gifReader.onloadend = () => {
      setGifDisplay(gifReader.result as string);
    };

    gifReader.readAsDataURL(image);
  };

  return (
    <div>
      <ImageInput handleImageUpload={handleImageUpload} />
      <RowColInput
        dimensions={dimensions}
        handleSubmitDimensions={handleSubmitDimensions}
      />
      {gifDisplay && (
        <GridDisplay gifDisplay={gifDisplay} dimensions={dimensions} />
      )}
    </div>
  );
}
