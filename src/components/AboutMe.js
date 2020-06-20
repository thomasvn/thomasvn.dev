import React from 'react';
import portrait from '../img/Thomas.jpg'

class AboutMe extends React.Component {
  render() {
    return (
      <div className="AboutMe">
        <div className="banner">
          <div className="title">
            <h1>Thomas Nguyen</h1>
            <h5>Engineer <span role="img" aria-label="male technologist">👨🏻‍💻</span>, San Diego <span role="img" aria-label="pin">📍</span></h5>
          </div>
          <img src={portrait} className="portrait" alt="Thomas's Portrait"></img>
        </div>
        <p>Hi! Glad to have you here.</p>
        <p>This site's still under construction so please do come back soon.</p>
      </div>
    );
  }
}

export default AboutMe;