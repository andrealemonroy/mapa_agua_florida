import React from "react";
import { Input } from "../Input/Input";

const Members = (props) => {
  const add = (e) => {
    console.log(e);
    e.preventDefault();
    return (
      <div className="mt-2">
        <Input label="" name="members" />
      </div>
    );
  };
  return (
    <div>
      <Input />
      <button onClick={add}>Agregar</button>
    </div>
  );
};

export default Members;
