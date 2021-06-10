import React, { useState } from "react";
// import styled from 'styled-components';
import { MusiciansForm } from './components/form/index';
import { Map } from './components/map/index';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const App = () => {
  // return <div className='container'></div>;
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <Router>
      <div>
        <nav>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li>
              <Link to='/'>Mapa</Link>
            </li>
            <li>
              <Link to='/form'>Regístrate</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/form'>
            <MusiciansForm />
          </Route>
          <Route path='/'>
            <Map />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
