"use client";

import { useState } from "react";
import RowColInput from "./components/RowColInput";
import { Dimensions } from "./lib/types";
import ImageInput from "./components/ImageInput";

export default function MainPage() {
  const [dimensions, setDimensions] = useState<Dimensions>({
    cols: 1,
    rows: 1,
  });

  const [gifImage, setGifImage] = useState<File | null>(null);
  const [gifPreview, setGifPreview] = useState<string | null>(null);

  const handleSubmitDimensions = (dimensions: Dimensions) => {
    setDimensions(dimensions);
  };

  const handleImageUpload = (image: File) => {
    const gifReader = new FileReader();

    gifReader.onloadend = () => {
      setGifPreview(gifReader.result as string);
    };

    gifReader.readAsDataURL(image);
  };

  return (
    <div>
      <RowColInput
        dimensions={dimensions}
        handleSubmitDimensions={handleSubmitDimensions}
      />
      <ImageInput handleImageUpload={handleImageUpload} />
      {gifPreview && <img src={gifPreview} alt="Gif Preview" />}
    </div>
  );
}
