import { ChangeEvent, useState } from "react";
import { Dimensions } from "../lib/types";

type UploadFormProps = {
  dimensions: Dimensions;
  handleSubmitForm: ({
    dimensions,
    image,
  }: {
    dimensions: Dimensions;
    image: File;
  }) => void;
};

export default function UploadForm(props: UploadFormProps) {
  const { dimensions, handleSubmitForm } = props;

  const [formData, setFormData] = useState<{
    dimensions: Dimensions;
    image: File | null;
  }>({ dimensions, image: null });
  const [selectError, setSelectError] = useState<string | null>(null);
  const [dimensionsError, setDimensionsError] = useState<string | null>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setDimensionsError(null);

    if (!formData.image) {
      setSelectError("no image selected");
      return;
    }

    if (
      !Number(formData.dimensions.rows) ||
      !Number(formData.dimensions.cols)
    ) {
      setDimensionsError("enter valid rows or columns greater than 0");
      return;
    } else {
      handleSubmitForm({
        dimensions: {
          rows: Number(formData.dimensions.rows) || 1,
          cols: Number(formData.dimensions.cols) || 1,
        },
        image: formData.image,
      });
    }
  };

  const handleDimensionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      dimensions: { ...dimensions, [event.target.name]: event.target.value },
    }));
  };

  const handleGifChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;

    if (file && file.type === "image/gif") {
      setFormData((prevState) => ({
        ...prevState,
        image: file,
      }));
      setSelectError(null);
    } else {
      setFormData((prevState) => ({
        ...prevState,
        image: null,
      }));
      setSelectError("Selected file is not GIF");
    }
  };

  return (
    <div className="mt-2">
      <form onSubmit={onSubmit}>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="gif-upload"
          >
            Upload file
          </label>
          <input
            type="file"
            className="block w-[315px] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            accept="image/gif"
            onChange={handleGifChange}
            id="gif-upload"
          />
        </div>

        <div className="flex flex-wrap mt-2">
          <div className="mr-2">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="rows"
            >
              Rows(m)
            </label>
            <input
              type="text"
              onChange={handleDimensionChange}
              placeholder={formData.dimensions.rows.toString()}
              value={formData.dimensions.rows}
              id="rows"
              name="rows"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="mr-2">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="cols"
            >
              Columns(n)
            </label>
            <input
              type="text"
              onChange={handleDimensionChange}
              placeholder={formData.dimensions.cols.toString()}
              value={formData.dimensions.cols}
              id="cols"
              name="cols"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className="mt-2">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Split Gif
          </button>
        </div>
      </form>
      <p className="text-sm text-red-500 ">{selectError}</p>
      <p className="text-sm text-red-500">{dimensionsError}</p>
    </div>
  );
}
