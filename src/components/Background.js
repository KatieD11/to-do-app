import React from "react";
import bgDark from "../images/bg-desktop-dark.jpg";

const Background = (props) => {
  return (
    <div className="w-full min-h-screen bg-darkTheme_dark_blue">
      <div className="h-1/3 w-full">
        <img src={bgDark} />
      </div>
      <div className="-mt-24">{props.children}</div>
    </div>
  );
};

export default Background;
