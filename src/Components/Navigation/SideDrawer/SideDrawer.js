import React from "react";
import classes from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../Layout/UI/Backdrop/Backdrop";
import ReactAux from "../../../hoc/ReactAux";

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <ReactAux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div attr="side" className={attachedClasses.join([' '])}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </ReactAux>
    );
};

export default sideDrawer;
