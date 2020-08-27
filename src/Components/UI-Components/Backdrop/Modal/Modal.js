import React, { Component } from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop";
import ReactAux from "../../../../hoc/ReactAux/ReactAux";

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // agal nu show and amna nu show jo alag hoy to j agal render ni permission apvani
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        return (
            <ReactAux>
                <Backdrop clicked={this.props.modalClosed}
                          show={this.props.show}/>
                <div style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}
                     className={classes.Modal}>
                    {this.props.children}
                </div>
            </ReactAux>
        );
    }

}

export default Modal;
