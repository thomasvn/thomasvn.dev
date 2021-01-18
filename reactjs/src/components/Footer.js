import React from 'react';
import github from '../img/github.svg'
import linkedin from '../img/linkedin.svg'
import medium from '../img/medium.svg'

class Footer extends React.Component {
  render() {
    return (
      <footer>
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
    );
  }
}

export default Footer;
