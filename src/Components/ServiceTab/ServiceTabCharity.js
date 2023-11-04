import React               from "react";
import Header              from "../../UI/Header";
import Container           from "../../UI/Container";
import Footer              from "../../UI/Footer/Footer";

import './ServiceTab.css';


const ServiceTabCharity = ({
        serviceNext,    
        setServiceNext,
        serviceTabCharity,
        setServiceTabCharity,
        serviceTabBlock,
        setServiceTabBlock,
        quizzBlock,
        setQuizzBlock,
        userInfo,
        setUserInfo,
        contactFormBlock,
        setContactFormBlock,
        progressBar,
        setProgressBar
    }) => {

    const goFurtherHandler = () => {
        setServiceTabCharity(!serviceTabCharity);
        setQuizzBlock(!quizzBlock);
    }

    const goNextHandler = () => {
        setServiceTabCharity(!serviceTabCharity);
        setQuizzBlock(!quizzBlock);
    }

    const goBackHandler = () => {
        setServiceTabCharity(!serviceTabCharity);
        setServiceTabBlock(!serviceTabBlock);
    }

    // Button click
    const clickGetQuotesHandler = () => {
        setServiceTabCharity(!serviceTabCharity);
        setQuizzBlock(!quizzBlock);
        setServiceNext(true);
        setUserInfo({...userInfo, service: 'Get_Quotes_For_Solar_Charity'});
    }

    const clickSubmitCorenaHandler = () => {
        setServiceTabCharity(!serviceTabCharity);
        setContactFormBlock(!contactFormBlock);
        setServiceNext(true);
        setUserInfo({...userInfo, service: 'Submit_Your_Details_To_Corena'});
    }

    return(
        <React.Fragment>
            <Header progressBar={15} />
            <Container >
                <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12" id="button-block">
                    <button onClick={goBackHandler} id="btn-back">&#8592; Back &nbsp;&nbsp;&nbsp;</button>
                    {serviceNext && 
                        <button onClick={goNextHandler} id="btn-forward">&nbsp;&nbsp;&nbsp; Next &#8594;</button>
                    }
                </div>
                <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12" id="charity">           
                    <h5 className="modal-title text-center" >Solar for your charity or non-profit</h5>
                    <p>Looking for solar for a non-profit/charity and have the funds available?</p>
                    <button className="calculate-btn mt-3 mb-3" onClick={clickGetQuotesHandler}>GET QUOTES FOR SOLAR FOR YOUR NON-PROFIT/CHARITY</button>
                    <p>Looking for solar for a non-profit/charity but aren't able to fund the upfront cost?</p>
                    <button className="calculate-btn mt-3 mb-3" onClick={clickSubmitCorenaHandler}>CLICK HERE TO SUBMIT YOUR DETAILS TO CORENA TO SEE IF YOU'RE ELIGIBLE FOR INTEREST LOAN</button>
                </div>
                
            </Container>
            <Footer />
        </React.Fragment> 
    );
}

export default ServiceTabCharity;