import { useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

const Projects = (props) => {
  // const inputArr = [];

  // const [arr, setArr] = useState(inputArr);
  const [inputList, setInputList] = useState([{ projects: "" }]);
  const [projects, setProjects] = useState([]);
  const final = [];
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
    projects.push(list);
    let lengthProjects = projects[projects.length - 1].length;
    console.log(lengthProjects);
    for (let i = 0; i < lengthProjects; i++) {
      final.push(Object.values(projects[projects.length - 1][i]).toString());
    }
    if (props.band) {
      if (props.genre) {
        props.setState({ genres: final });
      } else {
        props.setState({ members: final });
      }
    } else {
      props.setState({ projects: final });
    }
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { projects: "" }]);
  };
  // const addInput = () => {
  //   setArr((s) => {
  //     console.log(s)
  //     return [...s];
  //   });
  // };

  // const handleChange = (e, id) => {
  //   console.log(e);
  //   e.preventDefault();
  //   const index = id;
  //   setArr((s) => {
  //     console.log(s);
  //     const newArr = s.slice();
  //     newArr[index].value = e.target.value;
  //     console.log(newArr);
  //     // props.value(newArr);
  //     return newArr;
  //   });
  // };

  // return (
  //   <div className="grid justify-center mt-40">
  //     <Input
  //       label="¿Qué proyectos desarrollaste?"
  //       name="projects"
  //       handleInputChange={(event) => handleChange(event, 1)}
  //     />
  //     {arr.map((item, i) => {
  //       return (
  //         <Input
  //           handleInputChange={(event) => handleChange(event)}
  //           value={item.value}
  //           id={i}
  //           type={item.type}
  //           size="40"
  //         />
  //       );
  //     })}
  //     <Button click={addInput} text="Añadir otro proyecto +" />

  //   </div>
  // );

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
      {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
      <div className="flex space-around gap-0 sm:gap-2 mt-2">
        <Button click={props.prevStep} text="Anterior" />
        <Button click={props.nextStep} text="Siguiente" />
      </div>
    </div>
  );
};

export default Projects;
