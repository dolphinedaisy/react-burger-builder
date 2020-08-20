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
        debugger
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

    }

    render() {
        return(
            <ReactAux>
                <Burger ingredients={this.state.ingredients} />
                <div className={'container'}>
                    <div className="row">
                        <div className="my-3 mx-auto col-lg-6">
                            <BuildControls ingredientAdded={this.addIngredient} />
                        </div>
                    </div>
                </div>
            </ReactAux>
        );
    }
}

export default BurgerBuilder;
