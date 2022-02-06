import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
const TermsAndConditions = (props) => {
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setValue("");
      setDisabled(false);
      setTermsAndConditions(e.target.checked);
    } else {
      setValue("Para terminar, debes aceptar los términos y condiciones");
      setDisabled(true);
    }
  };
  const onSubmit = async () => {
    props.setState({ termsAndConditions: termsAndConditions });
    props.nextStep();
  };
  return (
    <div className="grid justify-center mt-28">
      <div className="lg:col-span-6 col-span-12 flex">
        <div className="items-center h-5">
          <input
            id="offers"
            name="offers"
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            onChange={handleCheckbox}
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="offers" className="font-medium text-gray-700">
            Acepto los{" "}
            <Link to="/termsAndConditions" className="underline">
              Términos y condiciones
            </Link>
          </label>
        </div>
      </div>
      <div className="col-span-12">
        {value !== "" ? (
          <div>
            <p className="text-red-600">{value}</p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="flex space-around mt-2 gap-0 sm:gap-2">
        <Button click={props.prevStep} text="Anterior" />
        <Button disabled={disabled} click={onSubmit} text="Finalizar" />
      </div>
    </div>
  );
};

export default TermsAndConditions;
