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
import TermsAndConditions from "../Steps/TermsAndConditions";
import axios from "axios";
import { useHistory } from "react-router-dom";

axios.defaults.baseURL = `${process.env.API_AGUA_FLORIDA}`;
const instance = axios.create({
  baseURL: 'https://api.aguaflorida.pe/api',
  headers: { "Content-Type": "application/json" },
});
const MultiStepForm = () => { 
  let history = useHistory();
  const arr = [];
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [data, setData] = useState({
    fullName: "",
    artisticName: "",
    location: "",
    rol: "",
  });
  const [state, setState] = React.useReducer((s, a) => ({ ...s, ...a }), {
    fullName: "",
    artisticName: "",
    location: "",
    role: "",
    email: "",
    projects: "",
    socialNetworks: "",
    photo: "",
    termsAndConditions: false
  });
  const [message, setMessage] = useState('');
  const nextStep = async () => {
    if (step == 9) {
      console.log(state);
      try {
        const res = await instance.post("users", state);
        console.log(res);
        setMessage('¡Gracias por registrarte!');
        setTimeout(()=>{
          history.push("/");
        } ,3000 );


       
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log(step)
      setStep(step + 1);
      setProgress(progress + 12);
    }
  };
  const prevStep = () => {
    setStep(step - 1);
    setProgress(progress - 12);
  };
  const [formValues, handleInputChange] = useForm({});
  return (
    <>
      <progress value={progress} max="100" className="flex m-auto mt-10" />
      {step === 1 ? (
        <PersonalName
          label="¿Cuál es tu nombre?"
          name="fullName"
          nextStep={nextStep}
          state={state.fullName}
          setState={setState}
        />
      ) : step === 2 ? (
        <PersonalName
          label="¿Cuál es tu nombre artístico?"
          name="artisticName"
          nextStep={nextStep}
          prevStep={prevStep}
          state={state.artisticName}
          setState={setState}
        />
      ) : step === 3 ? (
        <Location
          nextStep={nextStep}
          prevStep={prevStep}
          state={state.location}
          setState={setState}
        />
      ) : step === 4 ? (
        <Rol
          nextStep={nextStep}
          prevStep={prevStep}
          state={state.rol}
          setState={setState}
        />
      ) : step === 5 ? (
        <Email
          nextStep={nextStep}
          prevStep={prevStep}
          state={state.email}
          setState={setState}
        />
      ) : // case 6:
      // return <Members nextStep={nextStep} prevStep={prevStep} />;
      step === 6 ? (
        <Projects
          label="¿Qué proyectos desarrollaste?"
          addButton="Añadir otro proyecto +"
          nextStep={nextStep}
          prevStep={prevStep}
          state={state.projects}
          setState={setState}
          band="false"
        />
      ) : step === 7 ? (
        <SocialNetworks
          nextStep={nextStep}
          prevStep={prevStep}
          state={state.socialNetworks}
          setState={setState}
        />
      ) : step === 8 ? (
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

export default MultiStepForm;
