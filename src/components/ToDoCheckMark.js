import React from "react";
import checkMark from "../images/icon-check.svg";

const ToDoCheckMark = (props) => {

    const onClickHandler = () => {
        console.log("checked");
        props.onClick();
    }

  const unCompletedCheckMark = (
    <div onClick={onClickHandler} className="w-6 h-6 rounded-full bg-lightTheme_vlight_grey_blue hover:bg-gradient-to-br from-check_bg_blue to-check_bg_purple flex content-center">
      <div className="w-5 h-5 my-0.5 rounded-full bg-white mx-auto"></div>
    </div>
  );

  const completedCheckMark = (
    <div onClick={onClickHandler} className="w-6 h-6 rounded-full bg-gradient-to-br from-check_bg_blue to-check_bg_purple flex content-center">
      <img className="w-3 h-3 my-1.5 mx-auto" src={checkMark}></img>
    </div>
  );

  return (props.completed ? completedCheckMark : unCompletedCheckMark);
};

export default ToDoCheckMark;
