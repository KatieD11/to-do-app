import React, { useContext } from "react";
import ToDoContext from "../store/todo-context";
import moonIcon from "../images/icon-moon.svg";
import sunIcon from "../images/icon-sun.svg";
import Card from "./Card";
import NewToDo from "./NewToDo";
import ToDoItem from "./ToDoItem";

const ToDoContainer = () => {
  const context = useContext(ToDoContext);

  return (
    <div className="max-w-lg mx-auto">
      <div className="flex justify-between mb-8">
        <h1
          className="toDoHeading"
        >
          Todo
        </h1>
        <button onClick={context.toggleDarkStateHandler}><img src={context.darkState ? sunIcon: moonIcon}></img></button>
      </div>
      <Card cardClasses="mb-6"><NewToDo /></Card>
      <Card>
      {context.toDoItems.map(item => (
          <ToDoItem key={item.id} item={item}/>
      ))}
      </Card>
    </div>
  );
};

export default ToDoContainer;
