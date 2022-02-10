import React from "react";
// import styled from 'styled-components';
import MusiciansForm from "./components/form/index";
import { Map } from "./components/map/index";
import  MusicianInfo  from "./components/map/musician";
import  Band  from "./components/map/band";
import { MainPage } from "./components/mainPage/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Example from "./components/nav/nav";
import BandForm from "./components/form/bandForm";
import TermsAndConditions from "./components/termsAndConditions";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm";

const App = () => {
  return (
    <Router>
      <Example />
      <Switch>
        <Route path="/form">
          <MusiciansForm />
        </Route>
        <Route path="/map">
          <Map />
        </Route>
        <Route path="/personalForm">
          <MultiStepForm />
        </Route>
        <Route path="/bandForm">
          <BandForm />
        </Route>
        <Route path="/termsAndConditions">
          <TermsAndConditions />
        </Route>
        <Route path="/musician">
          <MusicianInfo />
        </Route>
        <Route path="/band">
          <Band />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
