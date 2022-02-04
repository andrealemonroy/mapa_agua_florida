import React from "react";

export const Button = (props) => {
  return props.disabled ? (
    <button
      disabled
      className="max-w-72 w-36 m-auto sm:w-64 bg-gray-300 text-primary font-semibold py-2 px-4 border border-primary rounded cursor-not-allowed"
      onClick={props.click}
    >
      {props.text}
    </button>
  ) : (
    <button
      className="max-w-72 w-36 m-auto sm:w-64 bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded"
      onClick={props.click}
    >
      {props.text}
    </button>
  );
};
