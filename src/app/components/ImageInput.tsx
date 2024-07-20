import { ChangeEvent, useState } from "react";

type ImageInputProps = {
  handleImageUpload: (image: File) => void;
};

export default function ImageInput(props: ImageInputProps) {
  const { handleImageUpload } = props;

  const [selectedGif, setSelectedGif] = useState<File | null>(null);
  const [selectError, setSelectError] = useState<string | null>(null);

  const handleGifChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;

    if (file && file.type === "image/gif") {
      setSelectedGif(file);
      setSelectError(null);
    } else {
      setSelectedGif(null);
      setSelectError("Selected file is not GIF");
    }
  };

  const onUpload = () => {
    if (selectedGif) {
      handleImageUpload(selectedGif);
    }
  };

  return (
    <div>
      <input type="file" accept="image/gif" onChange={handleGifChange} />
      <button onClick={onUpload} disabled={!selectedGif}>
        Upload
      </button>
    </div>
  );
}
