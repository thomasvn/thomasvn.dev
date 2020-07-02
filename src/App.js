import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Writing from './components/Writing'
import Footer from './components/Footer'
import Nav from './components/Nav'

function App() {
  return (
    <div className='App'>
      <Router>

        <Switch>
          <Route exact path='/'>
            <AboutMe/>
          </Route>
          <Route path='/projects'>
            <Nav/>
            <Projects/>
          </Route>
          <Route path='/writing'>
            <Nav/>
            <Writing/>
          </Route>
        </Switch>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
