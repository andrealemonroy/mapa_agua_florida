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
  let [facebook, setFacebook] = useState([])
  let [instagram, setInstagram] = useState([])
  let [spotify, setSpotify] = useState([])
  let [youtube, setYoutube] = useState([])
  const handleInputChangeFacebook = (e) => {
    facebook = []
    const { name, value } = e.target;
    facebook.push({facebook: value})
  };
  const handleInputChangeInsta = (e) => {
    instagram = []
    const { name, value } = e.target;
    instagram.push({instagram: value})
  };
  const handleInputChangeSpotify = (e) => {
    spotify = []
    const { name, value } = e.target;
    spotify.push({spotify: value})
  };
  const handleInputChangeYoutube = (e) => {
    youtube = []
    const { name, value } = e.target;
    youtube.push({youtube: value})
  };
  const sendData = () => {
    inputList.push(facebook, instagram, spotify, youtube)
    props.setState({socialNetworks: inputList})
    props.nextStep()
  }
  return (
    <form className="grid justify-center mt-40">
      <label className="block text-xl font-medium text-gray-700 font-extrabold text-center">
        Tus redes sociales
      </label>
      <div className="flex space-around gap-0 sm:gap-2 mt-2 align-middle justify-center w-full">
        <img
          className="block h-8 w-auto my-auto"
          src={logoFacebook}
          alt="facebook"
        />
        <Input placeholder="Link de Facebook" name="facebook"  handleInputChange={(e) => handleInputChangeFacebook(e, 'facebook')}/>
      </div>
      <div className="flex space-around gap-0 sm:gap-2 mt-2 align-middle justify-center w-full">
        <img
          className="block h-8 w-auto my-auto"
          src={logoInstagram}
          alt="instagram"
        />
        <Input placeholder="Link de Instagram" name="instagram" handleInputChange={(e) => handleInputChangeInsta(e, 'instagram')}/>
      </div>
      <div className="flex space-around gap-0 sm:gap-2 mt-2 align-middle justify-center w-full">
        <img
          className="block h-8 w-auto my-auto"
          src={logoSpotify}
          alt="spotify"
        />
        <Input placeholder="Link de Spotify" name="spotify" handleInputChange={(e) => handleInputChangeSpotify(e, 'spotify')}/>
      </div>
      <div className="flex space-around gap-0 sm:gap-2 mt-2 align-middle justify-center w-full">
        <img
          className="block h-8 w-auto my-auto"
          src={logoYoutube}
          alt="logoYoutube"
        />
        <Input placeholder="Link de Youtube" name="youtube"  handleInputChange={(e) => handleInputChangeYoutube(e, 'youtube')}/>
      </div>
      <div className="flex space-around gap-0 sm:gap-2 mt-2">
        <Button  click={props.prevStep} text="Anterior" />
        <Button click={sendData} text="Siguiente" />
      </div>
    </form>
  );
};

export default SocialNetworks;
