import React from "react";
import { Link } from "react-router-dom";
import Map from "../../assets/IMG/MAP.png";
import Logo from "../../assets/SVG/logotipo.svg";
import MujeresMusicas from "../../assets/SVG/mujeresmusicas.svg";
import LogoMINCUL from "../../assets/SVG/LogoMINCUL.svg";
import Instagram from "../../assets/SVG/Instagram.svg";
import Facebook from "../../assets/SVG/Facebook.svg";
const MainBanner = () => {
  return (
    <div className="bg-primary w-full h-screen text-center flex flex-col justify-center align-middle">
      <div className="mx-auto">
        <img src={Logo} />
      </div>
      <div className="mt-10">
        <img src={MujeresMusicas} className="mx-40" />
      </div>
      <div className="flex flex-col mt-10 mx-auto sm:flex-row sm:px-40 sm:justify-around gap-4">
        <Link to={{ pathname: "https://aguaflorida.pe/mujeresmusicas" }} target="_blank">
          <div className="bg-secondary w-48 text-white py-2 font-franklin font-black text-lg">
            EL FESTIVAL
          </div>
        </Link>
        <Link to="/form">
          <div className="bg-secondary w-48 text-white py-2 font-franklin font-bold text-lg">
            REGÍSTRATE
          </div>
        </Link>
        <Link to="/map">
          <div className="bg-secondary w-48 text-white py-2 font-franklin font-bold text-lg">
            VER MAPA
          </div>
        </Link>
      </div>
      <div className="mx-auto mt-10">
        <img src={LogoMINCUL} className="w-48" />
      </div>
      <div className="flex space-between mx-auto align-middle gap-4 mt-10">
        <a href="">
          <img
            src={Facebook}
            className="rounded-full w-12 mr-20 shadow-lg shadow-black"
          />
        </a>
        <a href="">
          <img
            src={Instagram}
            className="rounded-full w-12 ml-20 shadow-lg shadow-black"
          />
        </a>
      </div>
    </div>
  );
};

export default MainBanner;
