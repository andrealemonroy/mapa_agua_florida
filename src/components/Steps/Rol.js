import React, { useState } from "react";
import { roleOptions } from "../../utils/roleOptions";
import { Button } from "../Button/Button";

const Rol = (props) => {
  const [checkedState, setCheckedState] = useState(
    new Array(roleOptions.length).fill(false)
  );
  const [rol, setRol] = useState([]);
  const handleOnChange = (event, position, rolename) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      console.log(rolename);
      // setRol(oldArray => [...oldArray, rolename]);
      rol.push(rolename)
      // console.log()
      props.setState({role: rol})
    }
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };
  return (
    <form onSubmit={props.nextStep} className="grid justify-center mt-40">
      <div className="block text-xl font-medium text-gray-700 font-extrabold text-center">
        ¿Qué rol/es desempeñas?
      </div>
      <div className="grid lg:grid-cols-5 gap-2 mt-2">
        {roleOptions.map((roleName, index) => {
          return (
            <div
              className={`container-checkbox ${
                checkedState[index] ? "checked" : ""
              }`}
              key={index}
            >
              <label
                htmlFor={`custom-checkbox-${index}`}
                className="cursor-pointer"
              >
                <input
                  id={`custom-checkbox-${index}`}
                  type="checkbox"
                  onChange={(event) => handleOnChange(event, index, roleName)}
                  // onClick={(event) => handleOnChange(event, index, roleName)}
                  checked={checkedState[index]}
                  className="checkbox w-full opacity-0"
                  value={roleName}
                  name={roleName}
                />
                <span>{roleName}</span>
              </label>
            </div>
          );
        })}
      </div>

      <div className="flex space-around mt-2 gap-0 sm:gap-2">
        <Button click={props.prevStep} text="Anterior" />
        <Button click={props.nextStep} text="Siguiente" />
      </div>
    </form>
  );
};

export default Rol;
