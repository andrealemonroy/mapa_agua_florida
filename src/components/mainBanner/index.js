import React, { useState, useEffect } from 'react';
// import '../assets/OTF/DxSitrus-Expanded.otf';
// import 'google-map-react/dist/index.css'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const MainBanner = () => {


  return (
    <div className="main-container">
     <h1 className="main-title">MUJERES MÚSICAS</h1>
     <div className="main-cta">
         <Link to="/form">
         <button className="main-button" onClick="">
            REGÍSTRATE
        </button>
        </Link>
        <Link to="/mapa">
        <button className="main-button">
            VER MAPA
        </button>
        </Link>

     </div>

    </div>
  );
};
