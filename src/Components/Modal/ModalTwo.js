import React from "react";
import './Modal.css';

const ModalTwo = () => {

    return(
        <div className="modal fade" id="modalTwo" tabindex="-1" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <h5 className="modal-title text-center pb-4" ></h5>
                    <button type="" className="calculate-btn mt-3 mb-3" onclick={{}}>&nbsp; ADD SOLAR PANELS TO EXISTING SYSTEM &nbsp;</button>
                    <button type="" className="calculate-btn mt-3 mb-3" onclick={{}}>ADD BATTERIES TO EXISTING SOLAR SYSTEM</button>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-modal" data-bs-dismiss="modal">Back</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ModalTwo;