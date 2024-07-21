"use client";

import { useState } from "react";
import { Dimensions, GifSplitterData } from "./lib/types";
import GridDisplay from "./components/GridDisplay";
import UploadForm from "./components/UploadForm";

export default function MainPage() {
  const [gifSplitterData, setGifSplitterData] = useState<GifSplitterData>({
    dimensions: { cols: 1, rows: 1 },
    gifDisplay: null,
  });

  const handleSubmitForm = ({
    dimensions,
    image,
  }: {
    dimensions: Dimensions;
    image: File;
  }) => {
    const gifReader = new FileReader();

    gifReader.onloadend = () => {
      setGifSplitterData((prevState) => ({
        ...prevState,
        gifDisplay: gifReader.result as string,
        dimensions,
      }));
    };

    gifReader.readAsDataURL(image);
  };

  return (
    <div className="p-2">
      <UploadForm
        dimensions={gifSplitterData.dimensions}
        handleSubmitForm={handleSubmitForm}
      />
      {gifSplitterData.gifDisplay && (
        <GridDisplay
          gifDisplay={gifSplitterData.gifDisplay}
          dimensions={gifSplitterData.dimensions}
        />
      )}
    </div>
  );
}
