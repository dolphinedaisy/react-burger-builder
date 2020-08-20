import React, { Component } from "react";
import ReactAux from "../../hoc/ReactAux";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            cheese: 0,
            salad: 1,
            bacon: 0,
            meat: 0
        }
    }


    render() {
        return(
            <ReactAux>
                <Burger ingredients={this.state.ingredients} />
                <div className={'container'}>
                    <div className="row">
                        <div className="my-3 mx-auto col-lg-6">
                            <BuildControls />
                        </div>
                    </div>
                </div>
            </ReactAux>
        );
    }
}

export default BurgerBuilder;
