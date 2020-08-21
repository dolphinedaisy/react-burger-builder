import React from "react";

const toggleButton = (props) => {
    return (
        <div onClick={props.onToggle}>Menu</div>
    );
};

export default toggleButton;
