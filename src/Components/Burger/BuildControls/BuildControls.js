import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
import { BurgerIngredients } from "../../../const";

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            {
                Object.entries(BurgerIngredients)
                    .map((ing) => {
                       return <BuildControl key={ing[1].type} label={ing[1].label}/>
                    })
            }
        </div>
    );
};

export default buildControls;
