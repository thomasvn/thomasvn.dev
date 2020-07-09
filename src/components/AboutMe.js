import React from 'react';
import portrait from '../img/Thomas.jpg';

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
        <div className="intro">
          <p>Hi! Glad to have you here. My name's Thomas, and I'm a software engineer based out of San Diego. I love thinking, building, reading, and writing. I get energized by the exchange of new ideas, and I'm trying my best to do a little more good in the world each day. Take a look at my interests, projects, and writings below ... and let me know if you want to chat!</p>
        </div>
        <div className="interests">
          <p>Currently interested in:</p>
          <ul>
            <li>javascript</li>
            <li>functional programming</li>
            <li>computational biology</li>
            <li>understanding the powers of sleep</li>
          </ul>
        </div>
        <script data-goatcounter="https://thomasvn.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
      </div>
    );
  }
}

export default AboutMe;