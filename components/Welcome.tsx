import React from "react";
import { StartCard } from "./";

const Welcome = () => {
  return (
    <div className="welcome-page">
      <p className="welcome-header">TestCase APP</p>
      <p className="welcome-content">&quot;Pixel Perfect&quot;</p>
      <img className="welcome-image" src="/MallconomyWelcome.png" />
      <StartCard />
    </div>
  );
};

export default Welcome;
