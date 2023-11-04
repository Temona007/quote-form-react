import React from "react";
import './Modal.css';

const ModalOne = () => {

    return(
        <div className="modal fade" id="modalOne" tabindex="-1" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <h5 className="modal-title text-center pb-4" >Select an option below:</h5>
                    <div className="row">
                            <div className="col mb-3 mb-sm-0">
                                <div className="card" onClick={{}}>
                                    <div className="card-body text-center">
                                        <img 
                                            src="https://www.solarquotes.com.au/img/2020_quote/j.png" 
                                            alt="Battery ready icon"  
                                        />
                                        <h5 className="card-title pt-4"><br />Battery ready solar system Battery ready solar system (add batteries later)</h5>
                                        <p className="card-text">Your installer(s) will design the system to accommodate adding batteries in the future - they will not quote on a battery now solar+batteries Grid connect solar + batteries Your installer(s) will</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="#modalOne"
                                >
                                <div className="card-body text-center">
                                    <img 
                                        src="https://www.solarquotes.com.au/img/2020_quote/c.png" 
                                        alt="Grid connect solar icon"      
                                    />
                                    <h5 className="card-title pt-4"><br />Grid connect solar + batteries</h5>
                                    <p className="card-text">Your installer(s) will provide quotes for both solar panels and batteries</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" onClick={{}}>
                            <div className="card-body text-center">
                                <img 
                                    src="https://www.solarquotes.com.au/img/2020_quote/k.png" 
                                    alt="EV Charger car icon"    
                                />
                                <h5 className="card-title pt-4"><br />Add battery to an existing solar system</h5>
                                <p className="card-text">Your installer(s) will provide a quote for retrofitting a battery to an existing solar PV system</p>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" onClick={{}}>
                            <div className="card-body text-center">
                                <img 
                                    src="https://www.solarquotes.com.au/img/2020_quote/d.png" 
                                    alt="Solar Upgrades icon"     
                                />
                                <h5 className="card-title pt-4"><br />Off-Grid System</h5>
                                <p className="card-text">Your installer(s) will provide quotes for a fully off-grid solar and battery system</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-modal" data-bs-dismiss="modal">Back</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ModalOne;