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

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    console.log(step);
    setStep(step + 1);
  };
  const prevStep = () => {
    console.log(step);
    setStep(step - 1);
  };
  switch (step) {
    case 1:
      return <PersonalName nextStep={nextStep} />;
    case 2:
      return <ArtisticName nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <Location nextStep={nextStep} prevStep={prevStep} />;
    case 4:
      return <Rol nextStep={nextStep} prevStep={prevStep} />;
    case 5:
      return <Email nextStep={nextStep} prevStep={prevStep} />;
    // case 6:
    // return <Members nextStep={nextStep} prevStep={prevStep} />;
    case 6:
      return <Projects nextStep={nextStep} prevStep={prevStep} />;
    case 7:
      return <SocialNetworks nextStep={nextStep} prevStep={prevStep} />;
    default:
      console.log("This is a multi-step form built with React.");
  }
};

export default MultiStepForm;
