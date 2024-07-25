export type Dimensions = {
  rows: number;
  cols: number;
};

export type GifDisplay = string | null;

export type GifSplitterData = {
  dimensions: Dimensions;
  gifDisplay: GifDisplay;
};

export type GifFrame = {
  delay: number;
  url: string;
  width?: number;
  height?: number;
};
