import React from "react";
import ProgressBar from "../../Components/ProgressBar";
import './Header.css';

const Header = ({ progressBar, setProgressBar }) => {

    return(   
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-12 service-tab-header">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-4">
                            <div className="logo"> 
                                <a href="https://spheralsolar.com/">
                                    <img src="https://spheralsolar.com/wp-content/uploads/2020/05/logo.png" alt="Spheral Solar"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-3" id="progress-text">
                            <span className="progress-text">Your Progress:</span> 
                        </div>
                        <div className="col-lg-4 col-md-9 col-5" id="progress-bar-block" >
                            <ProgressBar 
                                progressBar={progressBar}
                                setProgressBar={setProgressBar}
                            />
                        </div>
                    </div>
                    <div className="horizontal-line"></div>
                </div>
            </div>
        </div>
    );
}

export default Header;