import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { BurgerIngredients } from "../../const";

const burger = (props) => {
    const transformedIngredient = Object.keys(props.ingredients)
        .map((ing, index) => {
            return [...Array(props.ingredients[ing])]
                .map((_, i) => { return <BurgerIngredient key={ing + i} type={ing} /> });
        });
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={BurgerIngredients.breadTop} />
            {transformedIngredient}
            <BurgerIngredient type={BurgerIngredients.breadBottom} />
        </div>
    );
};

export default burger;
