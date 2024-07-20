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
      rows: formData.rows || 1,
      cols: formData.cols || 1,
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}></form>
      <label className="mr-2">rows</label>
      <input
        type="text"
        onChange={handleChange}
        placeholder={formData.rows.toString()}
        value={formData.rows}
        id="rows"
        name="rows"
      />
      <label className="mr-2">cols</label>
      <input
        type="text"
        onChange={handleChange}
        placeholder={formData.cols.toString()}
        value={formData.cols}
        id="cols"
        name="cols"
      />
      <button type="submit">Submit</button>
    </div>
  );
}
