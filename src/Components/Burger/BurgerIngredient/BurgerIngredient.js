import React, { Component } from "react";
import classes from "./BurgerIngredient.module.css";
import PropTypes from 'prop-types';
import { BurgerIngredients } from '../../../const';

class BurgerIngredient extends Component {

    render() {
        let ingredient = null;
        switch (this.props.type) {
            case(BurgerIngredients.breadBottom):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case(BurgerIngredients.breadTop):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case(BurgerIngredients.meat):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case(BurgerIngredients.salad):
                ingredient = <div className={classes.Salad}></div>;
                break;
            case(BurgerIngredients.bacon):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            case(BurgerIngredients.cheese):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired,
}

export default BurgerIngredient;
