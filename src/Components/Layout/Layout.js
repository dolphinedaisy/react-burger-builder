import React from "react";
import ReactAux from "../../hoc/ReactAux";
import classes from "./Layout.module.css";
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";

const layout = (props) => (
    <ReactAux>
        <Toolbar />
        <main attr='heelo' className={classes.Content}>
            {props.children}
        </main>
    </ReactAux>
);

export default layout;
