import React from 'react';
import './App.css';

import AboutMe from './components/AboutMe'
// import Projects from './components/Projects'
// import Writing from './components/Writing'
import github from './img/github.svg'
import linkedin from './img/linkedin.svg'
import medium from './img/medium.svg'

function App() {
  return (
    <div className="App">
      <h1>Thomas Nguyen</h1>
      <AboutMe></AboutMe>
      <footer>
        {/* <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        <a href="https://github.com/thomasvn">
          <img src={github} alt="Thomas's Github Repositories" className="logo"></img>
        </a>
        <a href="https://www.linkedin.com/in/thomasvn-/">
          <img src={linkedin} alt="Thomas's LinkedIn" className="logo"></img>
        </a>
        <a href="https://medium.com/@thomasvn">
          <img src={medium} alt="Thomas's Medium Blog" className="logo"></img>
        </a>
      </footer>
    </div>
  );
}

export default App;
