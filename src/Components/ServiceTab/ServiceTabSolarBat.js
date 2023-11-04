import React               from "react";
import Header              from "../../UI/Header";
import Container           from "../../UI/Container";
import Footer              from "../../UI/Footer/Footer";
import                          './ServiceTab.css';

const solarBattFirst  = "https://tranquil-creponne-d0e55f.netlify.app/solar+batteries-first.png";
const solarBattSecond = "https://tranquil-creponne-d0e55f.netlify.app/solar+batteries-second.png";
const solarBattThird  = "https://tranquil-creponne-d0e55f.netlify.app/solar+batteries-third.png";
const solarBattFourth = "https://tranquil-creponne-d0e55f.netlify.app/solar+batteries-fourth.png";


const ServiceTabSolarBat = ({
        serviceTabSolarBat,
        setServiceTabSolarBat,
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
        setServiceTabSolarBat(!serviceTabSolarBat);
        setServiceTabBlock(!serviceTabBlock);
    }

    // Click variants:
    const clickBatReadyHandler = () => {
        setServiceTabSolarBat(!serviceTabSolarBat);
        setQuizzBlock(!quizzBlock);
        setUserInfo({...userInfo, service: 'Batt_Ready_Solar_System'});
    }

    const clickGridConnectSolarBatHandler = () => {
        setServiceTabSolarBat(!serviceTabSolarBat);
        setQuizzBlock(!quizzBlock);
        setUserInfo({...userInfo, service: 'Grid_Connect_Solar_Batt'});
    }

    const clickAddBattToSolarSysHandler = () => {
        setServiceTabSolarBat(!serviceTabSolarBat);
        setQuizzBlock(!quizzBlock);
        setUserInfo({...userInfo, service: 'Add_Batt_To_Solar_System'});
    }

    const clickOffGridSysHandler = () => {
        setServiceTabSolarBat(!serviceTabSolarBat);
        setQuizzBlock(!quizzBlock);
        setUserInfo({...userInfo, service: 'Off_Grid_Sys'});
    }

    return(
        <React.Fragment>
            <Header progressBar={15} />
            <Container >
                <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12" id="button-block">
                    <button onClick={goBackHandler} id="btn-back">&#8592; Back &nbsp;&nbsp;&nbsp;</button>
                </div>
                <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12 solar-battereis" id="services">
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-residential" role="tabpanel" aria-labelledby="pills-residential-tab" tabIndex="0">
                        <div className="row" id="tab-bat">
                            <div className="col mb-3 mb-sm-0">
                                <div className="card" onClick={clickBatReadyHandler}>
                                    <div className="card-body text-center">
                                        <img 
                                            src={solarBattFirst} 
                                            alt="Battery ready icon" 
                                            loading="lazy" 
                                        />
                                        <h5 className="card-title pt-4"><br />Battery ready solar system (add batteries later)</h5>
                                        <p className="card-text">Your installer(s) will design the system to accommodate adding batteries in the future - they will not quote on a battery now solar+batteries Grid connect solar + batteries Your installer(s) will</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card" onClick={clickGridConnectSolarBatHandler}>
                                <div className="card-body text-center">
                                    <img 
                                        src={solarBattSecond} 
                                        alt="Grid connect solar icon" 
                                        loading="lazy"     
                                    />
                                    <h5 className="card-title pt-4"><br />Grid connect solar + batteries</h5>
                                    <p className="card-text">Your installer(s) will provide quotes for both solar panels and batteries</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" onClick={clickAddBattToSolarSysHandler}>
                            <div className="card-body text-center">
                                <img 
                                    src={solarBattThird} 
                                    alt="EV Charger car icon" 
                                    loading="lazy"   
                                />
                                <h5 className="card-title pt-4"><br />Add battery to an existing solar system</h5>
                                <p className="card-text">Your installer(s) will provide a quote for retrofitting a battery to an existing solar PV system</p>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" onClick={clickOffGridSysHandler}>
                            <div className="card-body text-center">
                                <img 
                                    src={solarBattFourth} 
                                    alt="Solar Upgrades icon"   
                                    loading="lazy"  
                                />
                                <h5 className="card-title pt-4"><br />Off-Grid System</h5>
                                <p className="card-text">Your installer(s) will provide quotes for a fully off-grid solar and battery system</p>
                            </div>
                            </div>
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

export default ServiceTabSolarBat;