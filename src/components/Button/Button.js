import React from "react";

export const Button = (props) => {
  return (
    <button className="max-w-72 w-36 m-auto sm:w-64 bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded" onClick={props.click}>
      {props.text}
    </button>
  );
};
