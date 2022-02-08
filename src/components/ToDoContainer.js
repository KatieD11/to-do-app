import React, { useContext, useState } from "react";
import ToDoContext from "../store/todo-context";
import moonIcon from "../images/icon-moon.svg";
import sunIcon from "../images/icon-sun.svg";
import Card from "./Card";
import NewToDo from "./NewToDo";
import ToDoItem from "./ToDoItem";

const ToDoContainer = () => {
  const context = useContext(ToDoContext);

  const onClickClear = () => {
    context.clearCompleted();
  };

  let filteredToDoList = context.toDoItems;
  const [activeFilter, setActiveFilter] = useState("all");
  if (activeFilter === "all") {
    filteredToDoList = context.toDoItems;
  } else if (activeFilter === "active") {
    filteredToDoList = filteredToDoList.filter((item) => !item.completed);
  } else if (activeFilter === "completed") {
    filteredToDoList = filteredToDoList.filter((item) => item.completed);
  }

  const onClickFilter = (e) => {
    //console.log(e.target.value);
    setActiveFilter(e.target.value);
  };

  return (
    <div className="mx-auto w-11/12 md:max-w-lg">
      <div className="flex justify-between mb-8">
        <h1 className="toDoHeading">Todo</h1>
        <button onClick={context.toggleDarkStateHandler}>
          <img
            src={context.darkState ? sunIcon : moonIcon}
            alt="Screen mode icon"
          ></img>
        </button>
      </div>
      <Card cardClasses="mb-6">
        <NewToDo />
      </Card>
      <Card>
        {filteredToDoList.length === 0 && <p className="py-4">No items</p>}
        <ul>
          {filteredToDoList.map((item) => (
            <li key={item.id}>
              <ToDoItem item={item} />
            </li>
          ))}
        </ul>
        <div className="w-full flex justify-between px-4 py-4 text-lightTheme_dark_grey_blue text-sm">
          <p>
            {context.toDoItems.filter((item) => !item.completed).length} items
            left
          </p>
          <div className="hidden md:block">
            <button
              onClick={onClickFilter}
              value="all"
              className={`mr-4 ${
                context.darkState
                  ? "hover:text-lightTheme_light_grey_blue"
                  : "hover:text-lightTheme_vdark_grey_blue"
              } ${activeFilter === "all" ? "text-brightBlue" : ""}`}
            >
              All
            </button>
            <button
              onClick={onClickFilter}
              value="active"
              className={`mr-4
              ${
                context.darkState
                  ? "hover:text-lightTheme_light_grey_blue"
                  : "hover:text-lightTheme_vdark_grey_blue"
              } ${
                activeFilter === "active"
                  ? "text-brightBlue"
                  : ""
              }`}
            >
              Active
            </button>
            <button
              onClick={onClickFilter}
              value="completed"
              className={`${
                context.darkState
                  ? "hover:text-lightTheme_light_grey_blue"
                  : "hover:text-lightTheme_vdark_grey_blue"
              }
              ${
                activeFilter === "completed"
                  ? "text-brightBlue"
                  : ""
              }`}
            >
              Completed
            </button>
          </div>
          <button
            onClick={onClickClear}
            className={`${
              context.darkState
                ? "hover:text-lightTheme_light_grey_blue"
                : "hover:text-lightTheme_vdark_grey_blue"
            }`}
          >
            Clear completed
          </button>
        </div>
      </Card>
      <Card>
      <div className="mt-4 py-2 md:hidden">
            <button
              onClick={onClickFilter}
              value="all"
              className={`mr-4 ${
                context.darkState
                  ? "hover:text-lightTheme_light_grey_blue"
                  : "hover:text-lightTheme_vdark_grey_blue"
              } ${activeFilter === "all" ? "text-brightBlue" : ""}`}
            >
              All
            </button>
            <button
              onClick={onClickFilter}
              value="active"
              className={`mr-4
              ${
                context.darkState
                  ? "hover:text-lightTheme_light_grey_blue"
                  : "hover:text-lightTheme_vdark_grey_blue"
              } ${
                activeFilter === "active"
                  ? "text-brightBlue"
                  : ""
              }`}
            >
              Active
            </button>
            <button
              onClick={onClickFilter}
              value="completed"
              className={`${
                context.darkState
                  ? "hover:text-lightTheme_light_grey_blue"
                  : "hover:text-lightTheme_vdark_grey_blue"
              }
              ${
                activeFilter === "completed"
                  ? "text-brightBlue"
                  : ""
              }`}
            >
              Completed
            </button>
          </div>
      </Card>
    </div>
  );
};

export default ToDoContainer;
