import React, { useContext } from "react";
import checkMark from "../images/icon-check.svg";
import ToDoContext from "../store/todo-context";

const ToDoCheckMark = (props) => {
  // Use ToDoContext to check darkState mode and update 'completed' state of list items
    const context = useContext(ToDoContext);
  // If a checkmark is clicked, call the onClick handler referenced in the parent component
    const onClickHandler = () => {
        //console.log("checked");
        props.onClick();
    }
  // Structure and styling for checkmark in the uncompleted state
  const unCompletedCheckMark = (
    <div onClick={onClickHandler} className={`w-6 h-6 rounded-full ${context.darkState?"bg-darkTheme_dark_grey_blue":"bg-lightTheme_vlight_grey_blue"} hover:bg-gradient-to-br from-check_bg_blue to-check_bg_purple flex content-center`}>
      <div className={`w-5 h-5 my-0.5 rounded-full mx-auto ${context.darkState? "bg-darkTheme_dark_desat_blue":"bg-white"}`}></div>
    </div>
  );
// Structure and styling for checkmark in the completed state
  const completedCheckMark = (
    <div onClick={onClickHandler} className="w-6 h-6 rounded-full bg-gradient-to-br from-check_bg_blue to-check_bg_purple flex content-center">
      <img className="w-3 h-3 my-1.5 mx-auto" src={checkMark} alt="Check icon"></img>
    </div>
  );

  return (props.completed ? completedCheckMark : unCompletedCheckMark);
};

export default ToDoCheckMark;
