import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Link } from "react-router-dom";
const PersonalName = (props) => {
  debugger;
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const handleInputChange = (e) => {
    if (e.target.value === "") {
      setValue("Este campo es obligatorio");
      setDisabled(true);
    } else {
      setValue("");
      setDisabled(false);
    }
    props.setState({ [props.name]: e.target.value });
  };
  return (
    <div className="grid justify-center mt-28">
      {
        <Input
          label={props.label}
          name={props.name}
          handleInputChange={handleInputChange}
          value={props.state}
        />
      }
      {value !== "" ? (
        <div>
          <p className="text-red-600">{value}</p>
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex space-around gap-0 sm:gap-2 mt-2">
        <Link to="/form">
          {props.name === 'fullName' || props.name === 'bandsName' ? <Button text="Volver" /> : <Button click={props.prevStep} text="Anterior"/>}
        </Link>
        <Button disabled={disabled} click={props.nextStep} text="Siguiente" />
      </div>
    </div>
  );
};

export default PersonalName;
