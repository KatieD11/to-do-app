import React, { useContext } from "react";
import bgDark from "../images/bg-desktop-dark.jpg";
import bgLight from "../images/bg-desktop-light.jpg";
import bgDarkMobile from "../images/bg-mobile-dark.jpg";
import bgLightMobile from "../images/bg-mobile-light.jpg";
import ToDoContext from "../store/todo-context";

const Background = (props) => {
  // Use the darkState variable in the ToDoContext 
  // to check which background image to use
  const context = useContext(ToDoContext);
  const darkState = context.darkState;

  return (
    <div className={`w-full min-h-screen ${darkState ? "bg-darkTheme_dark_blue": "lightTheme_light_grey"}`}>
      <div className="h-1/3 w-full relative z-0">
        <img src={darkState ? bgDarkMobile: bgLightMobile} alt="" className="w-full object-cover md:hidden sm:block"/>
        <img src={darkState ? bgDark: bgLight} alt="" className="w-full object-cover md:block sm:hidden"/>
      </div>
      <div className="-mt-52 md:-mt-36 lg:-mt-52 relative z-1">{props.children}</div>
    </div>
  );
};

export default Background;
