import React from "react";
import { Link } from "react-router-dom";
import Map from "../../assets/IMG/MAP.png";

const MainBanner = () => {
  return (
    <div className="flex">
      <div className="ml-28 mt-56 justify-left w-full">
        <h1 className="text-4xl">Únete o encuentra</h1>
        <h1 className="main-title text-4xl mt-1">MUJERES MÚSICAS</h1>
        <div className="w-96 mt-1">
          <p className="text-md">
            En Mujeres músicas de AguaFlorida podrás encontrar solistas o bandas
            de mujeres músicas alrededor del Perú.
          </p>
        </div>
        <div className="main-cta flex gap-4 mt-2">
          <Link to="/form">
            <button
              className="main-button px-5 py-2 bg-primary text-white rounded-md"
              onClick=""
            >
              Registrarme
            </button>
          </Link>
          <Link to="/map">
            <button className="main-button px-7 py-2 bg-primary text-white rounded-md">
              Encontrar
            </button>
          </Link>
        </div>
      </div>

      <div className="container">
        <img src={Map} alt="" className="map" />

        <div className="overlay"></div>
        <div className="button">
          <a href="/map"> Ir al mapa </a>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
