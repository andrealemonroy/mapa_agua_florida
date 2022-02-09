import React from 'react';
import { Link } from 'react-router-dom';


export const MainBanner = () => {


  return (
    <div className="grid align-middle justify-center mt-60">
     <h1 className="main-title text-center text-4xl">MUJERES MÚSICAS</h1>
     <div className="main-cta flex gap-4 justify-center mt-2">
         <Link to="/form">
         <button className="main-button px-5 py-2 bg-primary text-white rounded-md" >
            REGÍSTRATE
        </button>
        </Link>
        <Link to="/map">
        <button className="main-button px-7 py-2 bg-primary text-white rounded-md">
            VER MAPA
        </button>
        </Link>

     </div>

    </div>
  );
};
