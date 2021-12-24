import React from "react";
import logoFacebook from "../../assets/SVG/logoFacebook.svg";
import logoInstagram from "../../assets/SVG/logoInstagram.svg";
import logoSpotify from "../../assets/SVG/logoSpotify.svg";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

const SocialNetworks = (props) => {
  return (
    <div className="grid justify-center mt-40">
      <div className="flex space-around gap-0 sm:gap-2 mt-2 align-middle">
        <img
          className="block lg:hidden h-8 w-auto my-auto"
          src={logoFacebook}
          alt="facebook"
        />
        <Input />
      </div>
      <div className="flex space-around gap-0 sm:gap-2 mt-2 align-middle">
        <img
          className="block lg:hidden h-8 w-auto my-auto"
          src={logoInstagram}
          alt="instagram"
        />
        <Input />
      </div>
      <div className="flex space-around gap-0 sm:gap-2 mt-2 align-middle">
        <img
          className="block lg:hidden h-8 w-auto my-auto"
          src={logoSpotify}
          alt="spotify"
        />
        <Input />
      </div>
      <div className="flex space-around gap-0 sm:gap-2 mt-2">
        <Button click={props.prevStep} text="Anterior" />
        <Button click={props.nextStep} text="Siguiente" />
      </div>
    </div>
  );
};

export default SocialNetworks;
