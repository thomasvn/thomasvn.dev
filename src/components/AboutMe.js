import React from 'react';
import portrait from '../img/Thomas.jpg'

class AboutMe extends React.Component {
  render() {
    return (
      <div className="AboutMe">
        <div className="banner">
          <h1 className="title">Thomas Nguyen</h1>
          <img src={portrait} className="portrait" alt="Thomas's Portrait"></img>
        </div>
        <p>Hi! Glad to have you here.</p>
        <p>This site's still under construction so please do come back soon.</p>
      </div>
    );
  }
}

export default AboutMe;