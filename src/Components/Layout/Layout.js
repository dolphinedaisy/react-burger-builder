import React from "react";
import ReactAux from "../../hoc/ReactAux";

const layout = (props) => (
    <ReactAux>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main>
            {props.children}
        </main>
    </ReactAux>
);

export default layout;
