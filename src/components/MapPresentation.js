import React from "react";
import LogoMapa from "../assets/SVG/logoMapa.svg";
import DownArrow from "../assets/SVG/down_arrow.svg";
import { Link } from "react-router-dom";
import LogoMINCUL from "../assets/SVG/LogoMINCUL.svg";
const MapPresentation = () => {
  return (
    <div className="flex flex-col justify-center align-middle mx-auto height-personalized">
      <div className="mx-auto">
        <img src={LogoMapa} className="sm:w-24 w-20" />
      </div>
      <div className="mx-auto text-center text-mmPurple sm:text-6xl text-2xl">
        <h2 className="font-light">¡Bienvenida!</h2>
      </div>
      <div className="mx-auto">
        <p className="text-center text-mmPurple sm:text-xl text-md">
          En este mapa podrás ubicar a <br /> diversas{" "}
          <b className="font-black">artistas mujeres</b> peruanas
          <br /> y también <b className="font-black">unirte</b> a ellas.
        </p>
      </div>
      <div className="mx-auto mt-5">
        <Link to="/form">
          <div className="bg-mmPurple sm:px-6 sm:py-2 text-white font-black font-franklin sm:text-lg text-md px-3 py-1">
            REGÍSTRATE
          </div>
        </Link>
      </div>
      <div className="mx-auto sm:mt-10 mt-5">
        <img src={LogoMINCUL} className="sm:w-48 w-40" />
      </div>
      <div className="mx-auto sm:mt-10 mt-5">
        <img src={LogoMapa} className="sm:w-24 w-20" />
      </div>
      <div className="mx-auto mt-2 sm:hidden">
        <img src={DownArrow} className="w-4" />
      </div>
    </div>
  );
};

export default MapPresentation;
