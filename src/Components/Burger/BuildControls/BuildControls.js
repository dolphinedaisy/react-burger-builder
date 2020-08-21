import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import { BurgerIngredients } from "../../../const";
import classes from "./BuildControls.module.css"

const buildControls = (props) => {
    return (
        <div>
            <div className={'d-flex justify-content-center'}>
                <p className="p-3 mb-0 mr-2 h3 text-dark font-weight-bold text-center">Price is - {props.price}$</p>
                {/*<button className={'btn btn-secondary border-secondary rounded-circle p-2'}>Checkout</button>*/}
                <button disabled={!props.purchasable}
                        onClick={props.ordered}
                        className={classes.OrderButton}>Checkout</button>
            </div>
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
