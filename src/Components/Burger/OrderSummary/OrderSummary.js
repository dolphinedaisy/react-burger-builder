import React, {Component} from "react";
import ReactAux from "../../../hoc/ReactAux";
import Button from "../../Layout/UI/Button/Button";

class OrderSummary extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("************** Order summary will update ***************");
    }

    render() {
        const ingredients = Object.keys(this.props.ingredients)
            .map((ing, i) => {
                return (
                    <li key={'ing'+i} className="text-capitalize list-group-item d-flex justify-content-between align-items-center">
                        {ing}
                        <span className="badge badge-primary badge-pill">{this.props.ingredients[ing]}</span>
                    </li>
                );
            });
        return (
            <ReactAux>
                <h3>Your Order</h3>
                <p>Delicious burger with following ingredients: </p>
                <ul className="list-group">
                    {ingredients}
                </ul>
                <p className='mt-2 font-weight-bold'>Total: {this.props.price} $</p>
                <Button clicked={this.props.purchaseContinue}
                        type={'Success'}>Buy</Button>
                <Button clicked={this.props.purchaseCancel}
                        type={'Danger'}>Cancel</Button>
            </ReactAux>
        );
    }
}

export default OrderSummary;
