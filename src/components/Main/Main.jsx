import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

function Main() {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user_icon" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Kunal</span>
          </p>
          <p>How can I help u today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful place to see on upcoming road trip</p>
            <img src={assets.compass_icon} alt="compass-icon" />
          </div>
          <div className="card">
            <p>Briefly Summarise this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="bulb-icon" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="message-icon" />
          </div>
          <div className="card">
            <p>Improve the readabilityof the following code</p>
            <img src={assets.code_icon} alt="code-icon" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a Prompt Here" />
            <div>
              <img src={assets.gallery_icon} alt="gallary-icon" />
              <img src={assets.mic_icon} alt="mic-icon" />
              <img src={assets.send_icon} alt="send-icon" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
