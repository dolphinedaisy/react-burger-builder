import React, { Component } from "react";
import ReactAux from "../../hoc/ReactAux";
import Burger from "../../Components/Burger/Burger";

class BurgerBuilder extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { }
    // }

    state = {
        ingredients: {
            cheese: 1,
            salad: 1,
            bacon: 1,
            meat: 1
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
