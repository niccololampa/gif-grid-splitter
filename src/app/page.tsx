"use client";

import { useState } from "react";
import RowColInput from "./components/RowColInput";
import { Dimensions } from "./lib/types";

export default function MainPage() {
  const [dimensions, setDimensions] = useState<Dimensions>({
    cols: 1,
    rows: 1,
  });

  const handleSubmitDimensions = (dimensions: Dimensions) => {
    setDimensions(dimensions);
  };

  return (
    <div>
      <RowColInput
        dimensions={dimensions}
        handleSubmitDimensions={handleSubmitDimensions}
      />
    </div>
  );
}
