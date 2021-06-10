import React, { useState, useEffect } from 'react';

// import 'google-map-react/dist/index.css'
import styled from 'styled-components';
import { MainBanner } from '../mainBanner/index';


export const MainPage = () => {

  return (
    <main className="main-class">
     <MainBanner></MainBanner>
    </main>
  );
};
