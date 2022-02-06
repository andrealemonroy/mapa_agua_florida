import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Link } from "react-router-dom";
const PersonalName = (props) => {
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleInputChange = (e) => {
    if (e.target.value === "") {
      setValue("Este campo es obligatorio");
      setDisabled(true);
    } else if(props.name === 'email') {
      const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
      if(regex.test(e.target.value)){
        setValue("");
        setDisabled(false)
      } else{
        setValue("Por favor, ingresa un correo válido");
        setDisabled(true)
      }
    }
    else {
      setValue("");
      setDisabled(false);
    }
    props.setState({ [props.name]: e.target.value });
  };

  const nextStep = () => {
    setValue("");
    setDisabled(true);
    props.nextStep();
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
        {props.name === "fullName" || props.name === "bandsName" ? (
          <Link to="/form">
            <Button text="Volver" />
          </Link>
        ) : (
          <Button click={props.prevStep} text="Anterior" />
        )}
        <Button disabled={disabled} click={nextStep} text="Siguiente" />
      </div>
    </div>
  );
};

export default PersonalName;
