import React from "react";
import './Modal.css';

const ModalThree = () => {

    return(
        <div className="modal fade" id="modalThree" tabindex="-1" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="lbtn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <h5 className="modal-title text-center pb-4" >Solar for your charity or non-profit</h5>
                    <div className="modal-body">
                    <h5 className="modal-title text-center pb-4" >Please select one of the following:</h5>
                    <p>Looking for solar for a non-profit/charity and have the funds available?</p>
                    <button type="" className="calculate-btn mt-3 mb-3" onclick={{}}>GET QUOTES FOR SOLAR FOR YOUR NON-PROFIT/CHARITY</button>
                    <p>Looking for solar for a non-profit/charity but aren't able to fund the upfront cost?</p>
                    <p>You may be eligible for an interest-free loan via the CORENA fund, which then uses the savings from the solar system to cover the loan repayments.</p>
                    <button type="" className="calculate-btn mt-3 mb-3" onclick={{}}>CLICK HERE TO SUBMIT YOUR DETAILS TO CORENA TO SEE IF YOU'RE ELIGIBLE FOR INTEREST LOAN</button>
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

export default ModalThree;