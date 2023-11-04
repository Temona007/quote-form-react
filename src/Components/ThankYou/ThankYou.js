import React     from 'react';
import Header    from "../../UI/Header";
import ContainerFluid from "../../UI/ContainerFluid";
import Footer    from "../../UI/Footer/Footer";

import './ThankYou.css';

const ThankYou = ({ 
        userInfo,
        progressBar,
        setProgressBar
     }) => {

    // console.log(userInfo);
    
    return(
        <React.Fragment>
            <Header progressBar={100} />
            <ContainerFluid>
                <div className="col-lg-12 postcode-form-content thank-you-block mb-4">
                    <div className="row justify-content-md-center">
                        <div className="col-lg-9 col-md-11">
                            <h2>Thank You, <b> {userInfo.firstName} {userInfo.lastName}</b>.</h2>
                            <h3>I UNDERSTAND YOUR TIME IS PRECIOUS.</h3>
                            <form action="https://spheralsolar.com/">
                                <button type="submit" className="calculate-btn thankyou-btn">&nbsp;&nbsp; Go Homepage &nbsp;&nbsp;</button>
                            </form>
                        </div>
                    </div>
                </div> 
            </ContainerFluid>
            <Footer />
        </React.Fragment>
    );
}

export default ThankYou;