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
          <p>Hi! Glad to have you here. My name's Thomas, and I'm a software engineer based out of San Diego. I love thinking, building, reading, and writing. I'm most excited when I'm able to exchange new ideas with friends, and I'm trying my best to do a little more good each day. Let me know if you'd like to chat!</p>
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
      </div>
    );
  }
}

export default AboutMe;