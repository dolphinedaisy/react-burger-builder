import React, { Component } from "react";
import classes from "./Modal.module.css";
import ReactAux from "../../../../../hoc/ReactAux";
import Backdrop from "../Backdrop";

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("-------------- inside shouldComponentUpdate Modal.js ---------------");
        // agal nu show and amna nu show jo alag hoy to j agal render ni permission apvani
        return nextProps.show !== this.props.show;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('-------------- inside componentDidUpdate Modal.js ---------------')
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
