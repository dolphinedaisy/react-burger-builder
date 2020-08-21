import React, { Component } from "react";
import ReactAux from "../../hoc/ReactAux";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import { BurgerIngredients } from "../../const";

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            cheese: 0,
            meat: 0,
            bacon: 0,
            salad: 0

        },
        totalPrice: 5
    }

    addIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + BurgerIngredients[type].price;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })

    }

    removeIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        // already added zero times then do not allow to click on less button
        if(oldCount <= 0)
            return;
        const updatedCount = oldCount - 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - BurgerIngredients[type].price;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
    }

    render() {
        // format will be {cheese: true, meat: false ...}
        const disabledInfo = { ...this.state.ingredients };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return(
            <ReactAux>
                <Burger ingredients={this.state.ingredients} />
                <div className={'container'}>
                    <div className="row">
                        <div className="my-3 mx-auto col-lg-6">
                            <BuildControls disabled={disabledInfo}
                                           ingredientRemoved={this.removeIngredient}
                                           ingredientAdded={this.addIngredient} />
                        </div>
                    </div>
                </div>
            </ReactAux>
        );
    }
}

export default BurgerBuilder;
