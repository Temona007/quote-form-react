import React from "react";

import './PostcodeNav.css';

const PostcodeNav = ({ 
        postcodeFormBlock, 
        setPostcodeFormBlock,
        serviceTabBlock,
        setServiceTabBlock,
        userInfo,
        setUserInfo,
    }) => {

    const submitHandler = (event) => {
        setPostcodeFormBlock(!postcodeFormBlock);
        setServiceTabBlock(!serviceTabBlock);
        event.preventDefault(); 
    }

    const postCodeChangeHandler = (event) => {
        setUserInfo({...userInfo, postCode: event.target.value})
    }
    
    return(
        <form className="mb-4 mt-3">
            <div className="row mb-3 mt-3">
                <h2 className="text-primary">Start Page:</h2>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="card text-bg-primary mb-3">
                        <div className="card-header"></div>
                        <div className="card-body">
                            <h5 className="card-title">Ready to get up to 3 quotes to compare?</h5>
                            <p className="card-text">To proceed, please enter your postcode:</p>
                            <input 
                                onChange={postCodeChangeHandler}
                                value={userInfo.postCode}
                                type="nimber" title="Five digit zip code" className="form-control mb-4" 
                            />
                            <button onClick={submitHandler} type="submit" className="btn btn-success">GET QUOTES NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default PostcodeNav;