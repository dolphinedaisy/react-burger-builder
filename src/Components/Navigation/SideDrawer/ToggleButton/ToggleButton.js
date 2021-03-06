import React from "react";
import classes from "./ToggleButton.module.css";

const toggleButton = (props) => {
    return (
        <div className={classes.ToggleBtn} onClick={props.onToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default toggleButton;
