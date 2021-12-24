import React, { useState } from "react";
// import styled from 'styled-components';
import MusiciansForm from "./components/form/index";
import { Map } from "./components/map/index";
import { MainPage } from "./components/mainPage/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./assets/SVG/logo.svg";
import Example from "./components/nav/nav";
import PersonalForm from "./components/form/personalForm";
import BandForm from "./components/form/bandForm";
import TermsAndConditions from "./components/termsAndConditions";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm";

const App = () => {
  return (
    <Router>
      <Example />
      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}

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
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
