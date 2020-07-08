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
import MyNav from './components/MyNav'

function App() {
  return (
    <div className='App'>
      <Router>

        <Switch>
          <Route exact path='/'>
            <AboutMe/>
          </Route>
          <Route path='/projects'>
            <MyNav/>
            <Projects/>
          </Route>
          <Route path='/writing'>
            <MyNav/>
            <Writing/>
          </Route>
        </Switch>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
