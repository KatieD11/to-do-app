import React, { useContext, useState } from "react";
import ToDoCheckMark from "./ToDoCheckMark";
import ToDoContext from "../store/todo-context";
import crossIcon from "../images/icon-cross.svg"

const ToDoItem = (props) => {
  // Use the ToDoContext to handle the To Do items
  const context = useContext(ToDoContext);
  const checkClickHandler = () => {
      context.toggleCompleteTaskHandler(props.item.id);
  };
  // Only show the 'remove cross' if the user is hovering over the item
  const [showCross, setShowCross] = useState(false);
  // If the 'remove cross' is clicked, remove the To Do item
  const removeClickHandler = () => {
    context.removeToDoItem(props.item.id);
};

  return (
    <div className={`flex py-4 px-4 border-b ${context.darkState? "border-darkTheme_dark_grey_blue":"border-lightTheme_vlight_grey_blue"}`} onMouseEnter={() => setShowCross(true)} onMouseLeave={() => setShowCross(false)}>
      <ToDoCheckMark completed={props.item.completed} onClick={checkClickHandler}/>
      <p className={`pl-4 capitalize hover:cursor-default ${props.item.completed && "line-through"} ${(props.item.completed && !context.darkState) && "text-lightTheme_light_grey_blue"} ${(context.darkState && !props.item.completed) && "text-lightTheme_light_grey_blue"}`} onClick={checkClickHandler}>
        {props.item.task}
      </p>
      {showCross && <button className="ml-auto" onClick={removeClickHandler}><img src={crossIcon} alt="Cross icon"></img></button>}
    </div>
  );
};

export default ToDoItem;
