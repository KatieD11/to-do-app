import React, { useContext } from "react";
import ToDoContext from "../store/todo-context";

const Card = (props) => {
    const context = useContext(ToDoContext);

    return (
        <div className={`${context.darkState ? "bg-darkTheme_dark_desat_blue":"bg-white"} rounded-md drop-shadow-xl ${props.cardClasses}`}>
            {props.children}
        </div>
    )
}

export default Card;