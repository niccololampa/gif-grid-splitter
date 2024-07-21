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
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="gif-upload"
      >
        Upload file
      </label>
      <input
        type="file"
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        accept="image/gif"
        onChange={handleGifChange}
        id="gif-upload"
      />
      <button
        onClick={onUpload}
        disabled={!selectedGif}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Upload Gif
      </button>
    </div>
  );
}
