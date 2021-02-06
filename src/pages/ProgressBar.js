import React, { Component } from "react";
import progressstyles from "./Progress.module.scss";

class ProgressBar extends Component {
  render() {
    return (
      <div className={progressstyles.Container}>
        <ul>
          <li className={progressstyles.Lists}>INCIDENTS</li>
          <li className={progressstyles.Lists}>YOUR DETAILS</li>
          <li className={progressstyles.Lists}>CONNECT WITH HELP</li>
        </ul>
      </div>
    );
  }
}

export default ProgressBar;
