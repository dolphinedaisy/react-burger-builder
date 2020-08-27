import React, { Component } from "react";
import ReactAux from "../../hoc/ReactAux/ReactAux";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import { BurgerIngredients } from "../../const";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import Modal from "../../Components/UI-Components/Backdrop/Modal/Modal";
import axiosInstance from "../../axios-orders";
import Spinner from "../../Components/UI-Components/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            cheese: 0,
            meat: 0,
            bacon: 0,
            salad: 0

        },
        purchasable: false,
        totalPrice: 5,
        purchasing: false,
        showSpinner: false
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map((ing) => {
                return ingredients[ing]
            })
            .reduce((sum, ele) => {
                return sum + ele;
            }, 0);

        this.setState({purchasable: sum > 0});
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
        });
        this.updatePurchaseState(updatedIngredients);

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
        });
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        // alert('Check you bag. You got it');
        this.setState({showSpinner: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Dhwani Joshi',
                address: {
                    street: 'test street',
                    zipcode: '123456',
                    country: 'india'
                },
                email: 'test@tets.com',
            },
            deliveryMethod: 'fastest'
        }
        axiosInstance.post('/orders.json',order)
            .then((response) => {
                // console.log('/orders.json : ', response);
                // once order is places, we're no mor in purchasing state
                this.setState({purchasing: false, showSpinner: false});
            })
            .catch((err) => {
                // console.log('/orders.json : ', err);
                // once order is places, we're no mor in purchasing state
                this.setState({purchasing: false, showSpinner: true});
            });
    }

    render() {
        // format will be {cheese: true, meat: false ...}
        const disabledInfo = { ...this.state.ingredients };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = <OrderSummary price={this.state.totalPrice}
                                         purchaseContinue={this.purchaseContinueHandler}
                                         purchaseCancel={this.purchaseCancelHandler}
                                         ingredients={this.state.ingredients} />;
        if(this.state.showSpinner) {
            orderSummary = <Spinner/>;
        }

        return(
            <ReactAux>
                {/*if user is purchasing, click on checkout button then only show modal*/}
                <Modal modalClosed={this.purchaseCancelHandler}
                       show={this.state.purchasing}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <div className={'container'}>
                    <div className="row">
                        <div className="my-3 mx-auto col-lg-6">
                            <BuildControls disabled={disabledInfo}
                                           price={this.state.totalPrice}
                                           purchasable={this.state.purchasable}
                                           ingredientRemoved={this.removeIngredient}
                                           ingredientAdded={this.addIngredient}
                                           ordered={this.purchaseHandler} />
                        </div>
                    </div>
                </div>
            </ReactAux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axiosInstance);
