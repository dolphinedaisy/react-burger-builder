import React from "react";
import ReactAux from "../../hoc/ReactAux";
import "./Layout.module.css";

const layout = (props) => (
    <ReactAux>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className={'Content'}>
            {props.children}
        </main>
    </ReactAux>
);

export default layout;
