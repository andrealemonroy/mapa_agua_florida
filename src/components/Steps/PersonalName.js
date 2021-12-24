import React from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

const PersonalName = (props) => {
  return (
    <div className="grid justify-center mt-40">
      <Input label="¿Cuál es tu nombre?" name="fullName" />
      <Button click={props.nextStep} text="Siguiente"/>
    </div>
  );
};

export default PersonalName;
