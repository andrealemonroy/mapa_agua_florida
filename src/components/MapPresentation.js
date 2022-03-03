import React from "react";
import LogoMapa from "../assets/SVG/logoMapa.svg";
import DownArrow from "../assets/SVG/down_arrow.svg";
import { Link } from "react-router-dom";
import LogoMINCUL from "../assets/SVG/LogoMINCUL.svg";
const MapPresentation = () => {
  return (
    <div className="flex flex-col justify-center align-middle mx-auto height-personalized">
      <div className="mx-auto">
        <img src={LogoMapa} className="w-24" />
      </div>
      <div className="mx-auto text-center text-mmPurple text-6xl">
        <h2 className="font-light">¡Bienvenida!</h2>
      </div>
      <div className="mx-auto">
        <p className="text-center text-mmPurple text-xl">
          En este mapa podrás ubicar a <br /> diversas{" "}
          <b className="font-black">artistas mujeres</b> peruanas
          <br /> y también <b className="font-black">unirte</b> a ellas.
        </p>
      </div>
      <div className="mx-auto mt-5">
        <Link to="/form">
          <div className="bg-mmPurple px-6 py-2 text-white font-black font-franklin text-lg">
            REGÍSTRATE
          </div>
        </Link>
      </div>
      <div className="mx-auto mt-10">
        <img src={LogoMINCUL} className="w-48" />
      </div>
      <div className="mx-auto mt-10">
        <img src={LogoMapa} className="w-24" />
      </div>
      <div className="mx-auto mt-2 sm:hidden">
        <img src={DownArrow} className="w-4" />
      </div>
    </div>
  );
};

export default MapPresentation;
