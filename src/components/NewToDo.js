import React, { useContext, useState } from "react";
import ToDoContext from "../store/todo-context";

const NewToDo = (props) => {
    const [val, setVal] = useState("");
    const context = useContext(ToDoContext);
    const newInputHandler = (e) => {
        //setVal(e.target.value);
        //context.addToDoItem("");
        if (e.key === 'Enter') {
            console.log('Entered new task: ', e.target.value);
            context.addToDoItem(e.target.value);
            setVal("");
          }
    }

    const onChangeHandler = (e) => {
        setVal(e.target.value);
    }

  return (
    <div className="flex py-4 px-4">
      <div
        className={`w-6 h-6 rounded-full ${context.darkState?"bg-darkTheme_dark_grey_blue":"bg-lightTheme_vlight_grey_blue"} flex content-center`}
      >
        <div className={`w-5 h-5 my-0.5 rounded-full mx-auto ${context.darkState? "bg-darkTheme_dark_desat_blue":"bg-white"}`}></div>
      </div>
      <input type="text" value={val} onChange={onChangeHandler} onKeyDown={newInputHandler} className={`ml-4 w-full bg-transparent ${context.darkState && "text-lightTheme_light_grey_blue"} focus:outline-0`}></input>
    </div>
  );
};

export default NewToDo;
