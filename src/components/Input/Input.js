import React from "react";
import { useForm } from "../../hooks/useForm";

export const Input = (props) => {
  const label = props.label;
  const [formValues, handleInputChange] = useForm({
    label: "",
  });

  const { value } = formValues;

  return (
    <div className="">
      <label
        htmlFor={props.name}
        className="block text-xl font-medium text-gray-700 font-extrabold text-center"
      >
        {props.label}
      </label>
      <input
        type="text"
        name={props.name}
        value={value}
        onChange={handleInputChange}
        autoComplete="off"
        className="mt-2 appearance-none block bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white w-72 m-auto sm:w-96"
      />
    </div>
  );
};
