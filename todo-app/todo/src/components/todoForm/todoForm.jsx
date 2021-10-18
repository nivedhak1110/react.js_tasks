import { useState } from "react";

const TodoForm = ({ onFormSubmit }) => {
  const [value, setValue] = useState("");
  const onvalueChange = (e) => {
    setValue(e.target.value);
  };

  const submitValue = (e) => {
    e.preventDefault();
    setValue("");
    onFormSubmit({ value });
  };

  return (
    <form onSubmit={submitValue}>
      <input
        type="text"
        placeholder="what's your Todo"
        value={value}
        onChange={onvalueChange}
      ></input>
      <button type="submit" className="btn btn-success btn-sm m-2">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
