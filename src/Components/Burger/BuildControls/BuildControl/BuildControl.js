import React from "react";
import classes from "./BuildControl.module.css";

const buildControl = (props) => {

    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button disabled={props.disabled}
                    onClick={props.ingredientRemoved}
                    className={classes.Less}>Less</button>
            <button onClick={props.ingredientAdded}
                    className={classes.More}>More</button>
        </div>
    );
};

export default buildControl;
