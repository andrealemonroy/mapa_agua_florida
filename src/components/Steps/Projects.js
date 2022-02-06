import { useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

const Projects = (props) => {
  const [inputList, setInputList] = useState([{ projects: "" }]);
  const [projects, setProjects] = useState([]);
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const final = [];
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
    projects.push(list);
    let lengthProjects = projects[projects.length - 1].length;
    for (let i = 0; i < lengthProjects; i++) {
      final.push(Object.values(projects[projects.length - 1][i]).toString());
    }
    const newArr = final.filter((item) => item !== "");
    console.log(newArr.length);
    if (newArr.length > 0) {
      setValue("");
      setDisabled(false);
      if (props.band == "true") {
        if (props.genre) {
          props.setState({ genres: final });
        } else {
          props.setState({ members: final });
        }
      } else {
        props.setState({ projects: final });
      }
    } else {
      setValue("Este campo es obligatorio");
      setDisabled(true);
    }
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { projects: "" }]);
  };

  return (
    <div className="grid justify-center mt-28">
      <div className="block text-xl font-medium text-gray-700 font-extrabold text-center">
        {props.label}
      </div>
      {inputList.map((x, i) => {
        return (
          <>
            <input
              name="projects"
              placeholder="Escribe aquí el proyecto"
              value={x.projects}
              onChange={(e) => handleInputChange(e, i)}
              className="mt-2 appearance-none block bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white w-72 m-auto sm:w-full"
            />
            {inputList.length - 1 === i && (
              <Button click={handleAddClick} text={props.addButton}></Button>
            )}
          </>
        );
      })}
      {value !== "" ? (
        <div>
          <p className="text-red-600">{value}</p>
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex space-around gap-0 sm:gap-2 mt-2">
        <Button click={props.prevStep} text="Anterior" />
        <Button disabled={disabled} click={props.nextStep} text="Siguiente" />
      </div>
    </div>
  );
};

export default Projects;
