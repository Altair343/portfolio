import '../Assets/scss/styles.scss';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Templates/Home';
import NavBar from './Organisms/NavBar';
import Footer from './Organisms/Footer';
import Portafolio from './Organisms/Portafolio';
import Skills from './Templates/Skills';
import Error404 from './Templates/Error404';
import Details from './Organisms/Details';

function App() {
  return (
    <Router>
      <NavBar />
        <Switch>
          <Route path = "/" exact component = { Home }/>
          <Route path = "/Portafolio/:id" component = { Details }/>
          <Route path = "/Portafolio" component = { Portafolio }/>
          <Route path = "/Skills" component = { Skills }/>
          <Route component = { Error404 } />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
