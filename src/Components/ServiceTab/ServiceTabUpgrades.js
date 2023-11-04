import React               from "react";
import Header              from "../../UI/Header";
import Container           from "../../UI/Container";
import Footer              from "../../UI/Footer/Footer";

import './ServiceTab.css';


const ServiceTabUpgrades = ({
        serviceTabUpgrades,
        setServiceTabUpgrades,
        serviceTabBlock,
        setServiceTabBlock,
        quizzBlock,
        setQuizzBlock,
        userInfo,
        setUserInfo,
        progressBar,
        setProgressBar
    }) => {

    const goBackHandler = () => {
        setServiceTabUpgrades(!serviceTabUpgrades);
        setServiceTabBlock(!serviceTabBlock);
    }

    // Click Buttons
    const clickAddSolarPanelToSystemHandler = () => {
        setServiceTabUpgrades(!serviceTabUpgrades);
        setQuizzBlock(!quizzBlock);
        setUserInfo({...userInfo, service: 'Add_Solar_Panel_To_Existing_System'});
    }
    const clickAddBattToSystemHandler = () => {
        setServiceTabUpgrades(!serviceTabUpgrades);
        setQuizzBlock(!quizzBlock);
        setUserInfo({...userInfo, service: 'Add_Batt_To_Existing_System'});
    }

    return(
        <React.Fragment>
            <Header progressBar={15} />
            <Container >
                <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12" id="button-block">
                    <button onClick={goBackHandler} id="btn-back">&#8592; Back &nbsp;&nbsp;&nbsp;</button>
                    {/* <button onClick={goNextHandler} id="btn-forward">&nbsp;&nbsp;&nbsp; Next &#8594;</button> */}
                </div>
                <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12" id="services">
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-residential" role="tabpanel" aria-labelledby="pills-residential-tab" tabIndex="0">
                        <div className="row">
                            <div className="col mb-3 mb-sm-0" id="service-upgrades">
                                <h5 className="text-center pb-4" ></h5>
                                <button className="calculate-btn mt-3 mb-3" onClick={clickAddSolarPanelToSystemHandler}>&nbsp; ADD SOLAR PANELS TO EXISTING SYSTEM &nbsp;</button>
                                <button className="calculate-btn mt-3 mb-3" onClick={clickAddBattToSystemHandler}>ADD BATTERIES TO EXISTING SOLAR SYSTEM</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </React.Fragment> 
    );
}

export default ServiceTabUpgrades;