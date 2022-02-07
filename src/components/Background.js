import React, { useContext } from "react";
import bgDark from "../images/bg-desktop-dark.jpg";
import bgLight from "../images/bg-desktop-light.jpg";
import ToDoContext from "../store/todo-context";

const Background = (props) => {
  const context = useContext(ToDoContext);
  const darkState = context.darkState;

  return (
    <div className={`w-full min-h-screen ${darkState ? "bg-darkTheme_dark_blue": "lightTheme_light_grey"}`}>
      <div className="h-1/3 w-full relative z-0">
        <img src={darkState ? bgDark: bgLight} className="w-full object-cover"/>
      </div>
      <div className="-mt-36 relative z-1">{props.children}</div>
    </div>
  );
};

export default Background;
