import React from "react";
import './ContainerFluid.css';

const ContainerFluid = (props) => {
    return(   
        <div className="container-fluid">
            <div className="row justify-content-center">
                {props.children}
            </div>
        </div>
    );
}

export default ContainerFluid;