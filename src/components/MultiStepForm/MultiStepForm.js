import React, { useState } from "react";
import Location from "../Location/Location";
import PersonalName from "../Steps/PersonalName";
import { useForm } from "../../hooks/useForm";
import ArtisticName from "../Steps/ArtisticName";
import Rol from "../Steps/Rol";
import Email from "../Steps/Email";
import Members from "../Steps/Members";
import Projects from "../Steps/Projects";
import SocialNetworks from "../Steps/SocialNetworks";
import Photo from "../Steps/Photo";

const MultiStepForm = () => {
  const arr = [];
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    fullName: "",
    artisticName: "",
    location: "",
    rol: "",
  });
  const [value, setValue] = useState([]);
  const nextStep = () => {
    console.log(step);
    setStep(step + 1);
  };
  const prevStep = () => {
    console.log(step);
    setStep(step - 1);
  };
  const [formValues, handleInputChange] = useForm({});
  const getLocation = (data) => {
    handleInputChange({
      target: {
        name: "location",
        value: data,
      },
    });
  };
  const setRol = (data) => {
    value.push(data);
    handleInputChange({
      target: {
        name: "rol",
        value: [value],
      },
    });
  };

  const setProjects = (data) => {
    // value.push(data);
    handleInputChange({
      target: {
        name: "projects",
        value: [data],
      },
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.elements);
  }
  console.log(formValues);
  return (
    <form onSubmit={handleSubmit}>
      {step === 1 ? (
        <PersonalName
          nextStep={nextStep}
          data={data.fullName}
          handleInputChange={handleInputChange}
          value={formValues.fullName}
        />
      ) : step === 2 ? (
        <ArtisticName
          nextStep={nextStep}
          data={data.artisticName}
          prevStep={prevStep}
          handleInputChange={handleInputChange}
          value={formValues.artisticName}
        />
      ) : step === 3 ? (
        <Location
          nextStep={nextStep}
          data={data.location}
          prevStep={prevStep}
          handleInputChange={handleInputChange}
          value={getLocation}
        />
      ) : step === 4 ? (
        <Rol
          nextStep={nextStep}
          prevStep={prevStep}
          handleInputChange={handleInputChange}
          value={setRol}
        />
      ) : step === 5 ? (
        <Email
          nextStep={nextStep}
          prevStep={prevStep}
          handleInputChange={handleInputChange}
          value={formValues.email}
        />
      ) : // case 6:
      // return <Members nextStep={nextStep} prevStep={prevStep} />;
      step === 6 ? (
        <Projects nextStep={nextStep} prevStep={prevStep}           handleInputChange={handleInputChange}
        value={setProjects}/>
      ) : step === 7 ? (
        <SocialNetworks nextStep={nextStep} prevStep={prevStep} />
      ) : step === 8 ? (
        <Photo nextStep={nextStep} prevStep={prevStep} />
      ) : (
        console.log("This is a multi-step form built with React.")
      )}{" "}
    </form>
  );
  // switch (step) {
  //   case 1:
  //     return (
  //       <PersonalName
  //         nextStep={nextStep}
  //         data={data.fullName}
  //         handleInputChange={handleInputChange}
  //         value={formValues.fullName}
  //       />
  //     );
  //   case 2:
  //     return (
  //       <ArtisticName
  //         nextStep={nextStep}
  //         data={data.artisticName}
  //         prevStep={prevStep}
  //         handleInputChange={handleInputChange}
  //         value={formValues.artisticName}
  //       />
  //     );
  //   case 3:
  //     return (
  //       <Location
  //         nextStep={nextStep}
  //         data={data.location}
  //         prevStep={prevStep}
  //         handleInputChange={handleInputChange}
  //         value={getLocation}
  //       />
  //     );
  //   case 4:
  //     return (
  //       <Rol
  //         nextStep={nextStep}
  //         prevStep={prevStep}
  //         handleInputChange={handleInputChange}
  //         value={setRol}
  //       />
  //     );
  //   case 5:
  //     return <Email nextStep={nextStep} prevStep={prevStep} />;
  //   // case 6:
  //   // return <Members nextStep={nextStep} prevStep={prevStep} />;
  //   case 6:
  //     return <Projects nextStep={nextStep} prevStep={prevStep} />;
  //   case 7:
  //     return <SocialNetworks nextStep={nextStep} prevStep={prevStep} />;
  //   case 8:
  //     return <Photo nextStep={nextStep} prevStep={prevStep} />;
  //   default:
  //     console.log("This is a multi-step form built with React.");
  // }
};

export default MultiStepForm;
