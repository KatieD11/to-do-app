import React from "react";
import ToDoCheckMark from "./ToDoCheckMark";

const NewToDo = (props) => {
  return (
    <div className="flex py-4 px-4">
      <div
        className="w-6 h-6 rounded-full bg-lightTheme_vlight_grey_blue flex content-center"
      >
        <div className="w-5 h-5 my-0.5 rounded-full bg-white mx-auto"></div>
      </div>
    </div>
  );
};

export default NewToDo;
