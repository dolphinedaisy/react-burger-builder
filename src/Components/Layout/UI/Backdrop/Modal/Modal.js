import React from "react";
import classes from "./Modal.module.css";
import ReactAux from "../../../../../hoc/ReactAux";
import Backdrop from "../Backdrop";

const modal = (props) => {
    return (
        <ReactAux>
            <Backdrop clicked={props.modalClosed}
                      show={props.show}/>
            <div style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
                 className={classes.Modal}>
                {props.children}
            </div>
        </ReactAux>
    );
};

export default modal;
