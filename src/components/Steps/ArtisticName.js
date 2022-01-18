import React from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
const ArtisticName = (props) => {
  return (
    <div className="grid justify-center mt-40">
      <Input label="¿Cuál es tu nombre artístico?" name="artisticName" handleInputChange={props.handleInputChange} value={props.value}/>
      <div className="flex space-around gap-0 sm:gap-2">
        <Button click={props.prevStep} text="Anterior"/>
        <Button click={props.nextStep} text="Siguiente"/>
      </div>
    </div>
  );
};
export default ArtisticName;
