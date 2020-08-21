import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import { BurgerIngredients } from "../../../const";

const buildControls = (props) => {
    return (
        <div>
            <p className="p-3 mb-2 bg-dark text-white text-center">Price - {props.price}$</p>
            {
                Object.entries(BurgerIngredients)
                    .filter((ing) => { return ing[1].allowToAddRemove })
                    .map((ing) => {
                       return <BuildControl ingredientRemoved={() => props.ingredientRemoved(ing[1].type)}
                                            ingredientAdded={() => props.ingredientAdded(ing[1].type)}
                                            key={ing[1].type}
                                            label={ing[1].label}
                                            disabled={props.disabled[ing[1].type]}/>
                    })
            }
        </div>
    );
};

export default buildControls;
