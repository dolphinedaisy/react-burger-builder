import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { BurgerIngredients } from "../../const";

const burger = (props) => {
    let transformedIngredient = null;
    transformedIngredient = Object.keys(props.ingredients)
        .map((ing, index) => {
            console.log('[...Array(props.ingredients[ing])] : ', [...Array(props.ingredients[ing])].length);
            return [...Array(props.ingredients[ing])]
                .map((_, i) => { return <BurgerIngredient key={ing + i} type={ing} /> });
        })
        .reduce((prevArr, el) => {
            return prevArr.concat(el);
        }, []);

    if(transformedIngredient.length < 1) {
        transformedIngredient = <p>Please start adding ingredient</p>;
    }
    console.log(transformedIngredient);

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={BurgerIngredients.breadTop.type} />
            {transformedIngredient}
            <BurgerIngredient type={BurgerIngredients.breadBottom.type} />
        </div>
    );
};

export default burger;
