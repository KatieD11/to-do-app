import React, { useContext } from "react";
import ToDoContext from "../store/todo-context";

const Card = (props) => {
    // Use the darkState variable in the ToDoContext 
    // to determine the background colour of the Card component
    const context = useContext(ToDoContext);

    return (
        <div className={`${context.darkState ? "bg-darkTheme_dark_desat_blue":"bg-white"} rounded-md drop-shadow-xl ${props.cardClasses}`}>
            {props.children}
        </div>
    )
}

export default Card;