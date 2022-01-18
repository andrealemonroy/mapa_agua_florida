import React from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Link } from 'react-router-dom';
const PersonalName = (props) => {

  return (
    <div className="grid justify-center mt-40">
      <Input label="¿Cuál es tu nombre?" name="fullName" handleInputChange={props.handleInputChange} value={props.value}/>

      <div className="flex space-around gap-0 sm:gap-2 mt-2">
        <Link to="/form">
          <Button text="Volver" />
        </Link>

        <Button click={props.nextStep} text="Siguiente" />
      </div>
    </div>
  );
};

export default PersonalName;
