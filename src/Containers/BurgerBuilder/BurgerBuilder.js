import React, { Component } from "react";
import ReactAux from "../../hoc/ReactAux";
import Burger from "../../Components/Burger/Burger";

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            cheese: 0,
            salad: 0,
            bacon: 0,
            meat: 0
        }
    }


    render() {
        return(
          <ReactAux>
              <Burger ingredients={this.state.ingredients} />
              <div>Build Controls</div>
          </ReactAux>
        );
    }
}

export default BurgerBuilder;
