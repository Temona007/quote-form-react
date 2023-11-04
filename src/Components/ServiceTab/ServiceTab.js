import React               from "react";
import Header              from "../../UI/Header";
import Container           from "../../UI/Container";
import Footer              from "../../UI/Footer/Footer";
import                          './ServiceTab.css';

const residentialImg = "https://tranquil-creponne-d0e55f.netlify.app/residential.png";
const commercialImg  = "https://tranquil-creponne-d0e55f.netlify.app/commercial.png";
const solarOnlyImg   = "https://tranquil-creponne-d0e55f.netlify.app/solar-only.png";
const solarBattImg   = "https://tranquil-creponne-d0e55f.netlify.app/solar+batteries.png";
const evChargerImg   = "https://tranquil-creponne-d0e55f.netlify.app/ev-charger.png";
const upgradeImg     = "https://tranquil-creponne-d0e55f.netlify.app/upgrades.png";
const meintenanceImg = "https://tranquil-creponne-d0e55f.netlify.app/maintenance.png";
const companiesImg   = "https://tranquil-creponne-d0e55f.netlify.app/companies.png";
const nonProfitImg   = "https://tranquil-creponne-d0e55f.netlify.app/non-profit.png";


const ServiceTab = ({
        serviceNext,    
        setServiceNext,
        serviceTabCharity,
        setServiceTabCharity,
        serviceTabUpgrades,
        setServiceTabUpgrades,
        serviceTabSolarBat,
        setServiceTabSolarBat,
        setPostcodeFormBlock,
        postcodeFormBlock,
        serviceTabBlock,
        setServiceTabBlock,
        quizzBlock,
        setQuizzBlock,
        contactFormBlock,
        setContactFormBlock,
        userInfo,
        setUserInfo,
        progressBar,
        setProgressBar
    }) => {

    // Disable NEXT in some cases Repair & Corena 
    if (userInfo.service === 'Repairs_Maintenance' || userInfo.service === "Submit_Your_Details_To_Corena" ) {
        setServiceNext(false);
    }

    const goNextHandler = () => {
        setServiceTabBlock(!serviceTabBlock);
        setQuizzBlock(!quizzBlock);
    }

    const goBackHandler = () => {
        setPostcodeFormBlock(!postcodeFormBlock);
        setServiceTabBlock(!serviceTabBlock);
    }

    const goSolarBatHandler = () => {
        setServiceTabSolarBat(!serviceTabSolarBat);
        setServiceTabBlock(!serviceTabBlock);
    }

    const goUpgradesHandler = () => {
        setServiceTabUpgrades(!serviceTabUpgrades);
        setServiceTabBlock(!serviceTabBlock);
    }

    const goCharityHandler = () => {
        setServiceTabCharity(!serviceTabCharity);
        setServiceTabBlock(!serviceTabBlock);
    }

    // Button Clicked
    const clickSolarOnlyHandler = () => {
        setServiceTabBlock(!serviceTabBlock);
        setQuizzBlock(!quizzBlock);
        setServiceNext(true);
        setUserInfo({...userInfo, service: 'Solar_Only'});
    }

    const clickEvChargerHandler = () => {
        setServiceTabBlock(!serviceTabBlock);
        setQuizzBlock(!quizzBlock);
        setServiceNext(true);
        setUserInfo({...userInfo, service: 'EV_Charger'});
    }

    const clickMeintenanceHandler = () => {
        setServiceTabBlock(!serviceTabBlock);
        setContactFormBlock(!contactFormBlock);
        setServiceNext(true);
        setUserInfo({...userInfo, service: 'Repairs_Maintenance'});
    }

    const clickSolarSysForYourCompanyHandler = () => {
        setServiceTabBlock(!serviceTabBlock);
        setQuizzBlock(!quizzBlock);
        setServiceNext(true);
        setUserInfo({...userInfo, service: 'Solar_Sys_For_Your_Company'});
    }

    return(
        <React.Fragment>
            <Header progressBar={10} />
            <Container >
                <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12" id="button-block">
                    <button onClick={goBackHandler} id="btn-back">&#8592; Back &nbsp;&nbsp;&nbsp;</button>
                    {serviceNext && 
                        <button onClick={goNextHandler} id="btn-forward">&nbsp;&nbsp;&nbsp; Next &#8594;</button>
                    }
                </div>
                <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12" id="services">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active left-button" id="pills-residential-tab" data-bs-toggle="pill" data-bs-target="#pills-residential" type="button" role="tab" aria-controls="pills-residential" aria-selected="true">
                                <img 
                                    src={residentialImg} alt="" 
                                    width="auto" 
                                    height="100px" 
                                    className="pr-3"
                                    loading="lazy"
                                />
                                Residential
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link right-button" id="pills-commercial-tab" data-bs-toggle="pill" data-bs-target="#pills-commercial" type="button" role="tab" aria-controls="pills-commercial" aria-selected="false">
                                <img 
                                    src={commercialImg} alt="" 
                                    width="auto" 
                                    height="100px"
                                    className="pl-3"
                                    loading="lazy" 
                                />
                                Commercial
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-residential" role="tabpanel" aria-labelledby="pills-residential-tab" tabIndex="0">
                            <div className="row">
                                <div className="col mb-3 mb-sm-0">
                                    <div className="card" onClick={clickSolarOnlyHandler}>
                                        <div className="card-body text-center">
                                            <img 
                                                src={solarOnlyImg} 
                                                alt="Solar Only service icon"
                                                loading="lazy"  
                                            />
                                            <h5 className="card-title pt-4"><br />Solar Only</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card" onClick={goSolarBatHandler}>
                                    <div className="card-body text-center">
                                        <img 
                                            src={solarBattImg} 
                                            alt="Solar and Battareis icon"
                                            loading="lazy"     
                                        />
                                        <h5 className="card-title pt-4"><br />Solar + Battareis</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card" onClick={clickEvChargerHandler}>
                                <div className="card-body text-center">
                                    <img 
                                        src={evChargerImg} 
                                        alt="EV Charger car icon"
                                        loading="lazy"   
                                    />
                                    <h5 className="card-title pt-4"><br />EV Charger</h5>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card" onClick={goUpgradesHandler}>
                                <div className="card-body text-center">
                                    <img 
                                        src={upgradeImg} 
                                        alt="Solar Upgrades icon" 
                                        loading="lazy"    
                                    />
                                    <h5 className="card-title pt-4"><br />Upgrades</h5>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card" onClick={clickMeintenanceHandler}>
                                <div className="card-body text-center">
                                    <img 
                                        src={meintenanceImg} 
                                        alt="Meintenance icon" 
                                        loading="lazy"   
                                    />
                                    <h5 className="card-title pt-4 padding-for-laptop">Repairs & Maintenance</h5>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-commercial" role="tabpanel" aria-labelledby="pills-commercial-tab" tabIndex="0">
                            <div className="row justify-content-center">
                            <div className="col">
                            <div className="card" onClick={clickSolarSysForYourCompanyHandler}>
                                <div className="card-body text-center">
                                    <img 
                                        src={companiesImg} 
                                        alt="Meintenance icon"  
                                        loading="lazy"  
                                    />
                                    <h5 className="card-title pt-4">Solar system for your company</h5>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card" onClick={goCharityHandler}>
                                <div className="card-body text-center">
                                    <img 
                                        src={nonProfitImg} 
                                        alt="Meintenance icon"
                                        loading="lazy"    
                                    />
                                    <h5 className="card-title pt-4">Solar system for your charity/non-profit</h5>
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

export default ServiceTab;