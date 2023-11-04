import React from "react";
import './Container.css';

const Container = (props) => {
    return(   
        <div className="container">
            <div className="row justify-content-center">
                {props.children}
            </div>
        </div>
    );
}

export default Container;