import React from "react";
import { useForm } from "../../hooks/useForm";

export const Input = (props) => {
  const label = props.label;

  // const { value } = formValues;

  return (
    <div className="w-full">
      <label
        htmlFor={props.name}
        className="block text-xl font-medium text-gray-700 font-extrabold text-center"
      >
        {props.label}
      </label>
      <input
        type="text"
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.handleInputChange}
        autoComplete="off"
        className="mt-2 appearance-none block bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white w-72 m-auto sm:w-full"
      />
    </div>
  );
};
