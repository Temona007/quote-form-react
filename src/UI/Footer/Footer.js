import React from "react";
import './Footer.css';

const Footer = (props) => {
    return(   
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 text-center footer-sp">
                    <p>2023 © Spheral Solar | <a href="https://spheralsolar.com/privacy-policy/">Privacy Policy</a></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;