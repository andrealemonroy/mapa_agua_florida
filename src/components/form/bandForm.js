import React, { useState } from "react";
import Location from "../Location/Location";
import PersonalName from "../Steps/PersonalName";
import Projects from "../Steps/Projects";
import SocialNetworks from "../Steps/SocialNetworks";
import Photo from "../Steps/Photo";
import TermsAndConditions from "../Steps/TermsAndConditions";
import axios from "axios";
import { useHistory } from "react-router-dom";

axios.defaults.baseURL = `${process.env.API_AGUA_FLORIDA}`;
const instance = axios.create({
  baseURL: "https://api-agua-florida.vercel.app/api",
  headers: { "Content-Type": "application/json" },
});
const BandForm = () => {
  let history = useHistory();
  const arr = [];
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);

  const [state, setState] = React.useReducer((s, a) => ({ ...s, ...a }), {
    bandsName: "",
    location: "",
    members: "",
    email: "",
    genres: "",
    socialNetworks: "",
    photo: "",
    termsAndConditions: false,
  });
  const [message, setMessage] = useState("");
  const nextStep = async () => {
    if (step == 8) {
      console.log(state);
      try {
        const res = await instance.post("bands", state);
        console.log(res);
        setMessage("¡Gracias por registrarte!");
        setTimeout(() => {
          history.push("/");
        }, 3000);
      } catch (err) {
        console.log(err);
      }
    } else {
      setStep(step + 1);
      setProgress(progress + 12);
    }
  };
  const prevStep = () => {
    setStep(step - 1);
    setProgress(progress - 12);
  };
  return (
    <>
      <progress value={progress} max="100" className="flex m-auto mt-10" />
      {step === 1 ? (
        <PersonalName
          label="¿Cuál es el nombre del proyecto musical?"
          name="bandsName"
          nextStep={nextStep}
          state={state.bandsName}
          setState={setState}
        />
      ) : step === 2 ? (
        <Location
          nextStep={nextStep}
          prevStep={prevStep}
          state={state.location}
          setState={setState}
        />
      ) : step === 3 ? (
        <Projects
          label="Integrantes del proyecto musical"
          nextStep={nextStep}
          prevStep={prevStep}
          state={state.members}
          setState={setState}
          addButton="Añadir otro integrante +"
          band="true"
        />
      ) : step === 4 ? (
        <PersonalName
          label="¿Cuál es tu correo?"
          name="email"
          nextStep={nextStep}
          prevStep={prevStep}
          state={state.email}
          setState={setState}
        />
      ) : // case 6:
      // return <Members nextStep={nextStep} prevStep={prevStep} />;
      step === 5 ? (
        <Projects
          label="¿Cuál es el género musical?"
          addButton="Añadir otro género +"
          nextStep={nextStep}
          prevStep={prevStep}
          state={state.genres}
          setState={setState}
          band="true"
          genre="true"
        />
      ) : step === 6 ? (
        <SocialNetworks
          nextStep={nextStep}
          prevStep={prevStep}
          state={state.socialNetworks}
          setState={setState}
        />
      ) : step === 7 ? (
        <Photo
          nextStep={nextStep}
          prevStep={prevStep}
          state={state.photo}
          setState={setState}
        />
      ) : (
        <TermsAndConditions
          nextStep={nextStep}
          prevStep={prevStep}
          state={state.termsAndConditions}
          setState={setState}
        />
      )}
      <p className="justify-center flex">{message}</p>
    </>
  );
};

export default BandForm;
