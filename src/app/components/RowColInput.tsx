import { useState } from "react";
import { Dimensions } from "../lib/types";

type RowColInputProps = {
  dimensions: Dimensions;
  handleSubmitDimensions: (dimensions: Dimensions) => void;
};

export default function RowColInput(props: RowColInputProps) {
  const { dimensions, handleSubmitDimensions } = props;

  const [formData, setFormData] = useState(dimensions);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!Number(formData.rows) || !Number(formData.cols)) {
      handleSubmitDimensions({ rows: 1, cols: 1 });
    }

    handleSubmitDimensions({
      rows: Number(formData.rows) || 1,
      cols: Number(formData.cols) || 1,
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="mt-2">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          <div className="mr-2">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="rows"
            >
              rows
            </label>
            <input
              type="text"
              onChange={handleChange}
              placeholder={formData.rows.toString()}
              value={formData.rows}
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
              cols
            </label>
            <input
              type="text"
              onChange={handleChange}
              placeholder={formData.cols.toString()}
              value={formData.cols}
              id="cols"
              name="cols"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div className="mt-2">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Set Grid Dimensions
          </button>
        </div>
      </form>
    </div>
  );
}
