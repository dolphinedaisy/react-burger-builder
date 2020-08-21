import React from "react";
import ReactAux from "../../../hoc/ReactAux";

const orderSummary = (props) => {

    const ingredients = Object.keys(props.ingredients)
        .map((ing, i) => {
            return (
                <li key={'ing'+i} className="text-capitalize list-group-item d-flex justify-content-between align-items-center">
                    {ing}
                    <span className="badge badge-primary badge-pill">{props.ingredients[ing]}</span>
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
            <p className='mt-2 font-weight-bold'>Continue to checkout</p>
        </ReactAux>
    );
};

export default orderSummary;
