import React from "react";

const Card = (props) => {
    return (
        <div className={`bg-white rounded-md drop-shadow-xl ${props.cardClasses}`}>
            {props.children}
        </div>
    )
}

export default Card;