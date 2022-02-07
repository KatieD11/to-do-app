import React, { useContext } from "react";
import ToDoCheckMark from "./ToDoCheckMark";
import ToDoContext from "../store/todo-context";

const ToDoItem = (props) => {
  const context = useContext(ToDoContext);
  const checkClickHandler = () => {
      context.toggleCompleteTaskHandler(props.item.id);
  };

  return (
    <div className="flex py-4 px-4">
      <ToDoCheckMark completed={props.item.completed} onClick={checkClickHandler}/>
      <p className={`pl-4 capitalize ${props.item.completed && "line-through"}`}>
        {props.item.task}
      </p>
    </div>
  );
};

export default ToDoItem;
