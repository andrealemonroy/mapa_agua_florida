import React from "react";
import { useState } from "react";
import logoFacebook from "../../assets/SVG/logoFacebook.svg";
import logoInstagram from "../../assets/SVG/logoInstagram.svg";
import logoSpotify from "../../assets/SVG/logoSpotify.svg";
import logoYoutube from "../../assets/SVG/logoYoutube.svg";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

const SocialNetworks = (props) => {
  const [inputList, setInputList] = useState([]);
  const handleInputChange = (e, network) => {

    const { name, value } = e.target;
    console.log(name, value)
    const list = [...inputList];
    list[name] = value;
    console.log(list[name])
    setInputList(list);
    console.log(inputList)
    // props.value(inputList)
  };
  return (
    <div className="grid justify-center mt-40">
      <label className="block text-xl font-medium text-gray-700 font-extrabold text-center">
        Tus redes sociales
      </label>
      <div className="flex space-around gap-0 sm:gap-2 mt-2 align-middle justify-center w-full">
        <img
          className="block h-8 w-auto my-auto"
          src={logoFacebook}
          alt="facebook"
        />
        <input placeholder="Link de Facebook" name="facebook"  onChange={(e) => handleInputChange(e, 'facebook')}/>
      </div>
      <div className="flex space-around gap-0 sm:gap-2 mt-2 align-middle justify-center w-full">
        <img
          className="block h-8 w-auto my-auto"
          src={logoInstagram}
          alt="instagram"
        />
        <input placeholder="Link de Instagram" name="instagram" onChange={(e) => handleInputChange(e, 'instagram')}/>
      </div>
      <div className="flex space-around gap-0 sm:gap-2 mt-2 align-middle justify-center w-full">
        <img
          className="block h-8 w-auto my-auto"
          src={logoSpotify}
          alt="spotify"
        />
        <input placeholder="Link de Spotify" name="spotify" onChange={(e) => handleInputChange(e, 'spotify')}/>
      </div>
      <div className="flex space-around gap-0 sm:gap-2 mt-2 align-middle justify-center w-full">
        <img
          className="block h-8 w-auto my-auto"
          src={logoYoutube}
          alt="logoYoutube"
        />
        <input placeholder="Link de Youtube" name="youtube"  onChange={(e) => handleInputChange(e, 'youtube')}/>
      </div>
      <div className="flex space-around gap-0 sm:gap-2 mt-2">
        <Button click={props.prevStep} text="Anterior" />
        <Button click={props.nextStep} text="Siguiente" />
      </div>
    </div>
  );
};

export default SocialNetworks;
