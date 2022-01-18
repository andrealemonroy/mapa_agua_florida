import React from "react";
import logoFacebook from "../../assets/SVG/logoFacebook.svg";
import logoInstagram from "../../assets/SVG/logoInstagram.svg";
import logoSpotify from "../../assets/SVG/logoSpotify.svg";
import logoYoutube from "../../assets/SVG/logoYoutube.svg";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

const SocialNetworks = (props) => {
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
        <Input placeholder="Link de Facebook" />
      </div>
      <div className="flex space-around gap-0 sm:gap-2 mt-2 align-middle justify-center w-full">
        <img
          className="block h-8 w-auto my-auto"
          src={logoInstagram}
          alt="instagram"
        />
        <Input placeholder="Link de Instagram" />
      </div>
      <div className="flex space-around gap-0 sm:gap-2 mt-2 align-middle justify-center w-full">
        <img
          className="block h-8 w-auto my-auto"
          src={logoSpotify}
          alt="spotify"
        />
        <Input placeholder="Link de Spotify" />
      </div>
      <div className="flex space-around gap-0 sm:gap-2 mt-2 align-middle justify-center w-full">
        <img
          className="block h-8 w-auto my-auto"
          src={logoYoutube}
          alt="logoYoutube"
        />
        <Input placeholder="Link de Youtube" />
      </div>
      <div className="flex space-around gap-0 sm:gap-2 mt-2">
        <Button click={props.prevStep} text="Anterior" />
        <Button click={props.nextStep} text="Siguiente" />
      </div>
    </div>
  );
};

export default SocialNetworks;
