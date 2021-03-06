import React from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

const Email = (props) => {
  return (
    <div className="grid justify-center mt-28">
      <Input label="¿Cuál es tu correo?" name="email" handleInputChange={e => props.setState({email: e.target.value})} value={props.state}/>
      <div className="flex space-around gap-0 sm:gap-2">
        <Button click={props.prevStep} text="Anterior" />
        <Button click={props.nextStep} text="Siguiente" />
      </div>
    </div>
  );
};

export default Email;
