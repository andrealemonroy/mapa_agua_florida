import { useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

const Projects = (props) => {
  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];

  const [arr, setArr] = useState(inputArr);

  const addInput = () => {
    setArr((s) => {
      return [
        ...s,
        {
          type: "text",
          value: "",
        },
      ];
    });
  };

  const handleChange = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };

  return (
    <div className="grid justify-center mt-40">
      <Input label="¿Qué proyectos desarrollaste?" name="email" />
      {arr.map((item, i) => {
        return (
          <Input
            onChange={handleChange}
            value={item.value}
            id={i}
            type={item.type}
            size="40"
          />
        );
      })}
      <Button click={addInput} text="Añadir otro proyecto +" />
      <div className="flex space-around gap-0 sm:gap-2 mt-2">
        <Button click={props.prevStep} text="Anterior" />
        <Button click={props.nextStep} text="Siguiente" />
      </div>
    </div>
  );
};

export default Projects;
