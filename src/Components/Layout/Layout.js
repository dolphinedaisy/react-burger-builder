import React, { Component } from "react";
import ReactAux from "../../hoc/ReactAux";
import classes from "./Layout.module.css";
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {

    state = {
        showSideDrawer: false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    toggleClickHandler = () => {
        this.setState((prevState, props) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render() {
        return (
            <ReactAux>
                <Toolbar toggleClick={this.toggleClickHandler} />
                <SideDrawer open={this.state.showSideDrawer}
                            closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </ReactAux>
        );
    }
}

export default Layout;
