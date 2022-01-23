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
axios.defaults.baseURL = `${process.env.API_AGUA_FLORIDA}`;
const instance = axios.create({
  baseURL: 'https://api.aguaflorida.pe/api',
  headers: {'Content-Type': 'application/json'}
});
const MultiStepForm = () => {
  const arr = [];
  const [step, setStep] = useState(1);
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
  });
  const nextStep = async () => {
    if (step == 9) {
      console.log(state);
      try {
        const res = await instance.post('users', state);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    } else {
      setStep(step + 1);
    }
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const [formValues, handleInputChange] = useForm({});
  return (
    <>
      {step === 1 ? (
        <PersonalName
          nextStep={nextStep}
          state={state.fullName}
          setState={setState}
        />
      ) : step === 2 ? (
        <ArtisticName
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
          nextStep={nextStep}
          prevStep={prevStep}
          state={state.projects}
          setState={setState}
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
          state={state.TermsAndConditions}
          setState={setState}
        />
      )}
    </>
  );
};

export default MultiStepForm;
