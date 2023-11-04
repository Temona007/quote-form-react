import React, 
      {useState}      from "react";
import Header         from "../../UI/Header";
import ContainerFluid from "../../UI/ContainerFluid";
import Footer         from "../../UI/Footer/Footer";
import                './PostcodeForm.css';

// Postcode validation:
// For 6 digit or 10 digit numbers:
const regPostcode = /^[0-9]{10}|[0-9]{4}$/;

const PostcodeForm = ({ 
        postcode,
        setPostcode,
        postcodeFormBlock, 
        setPostcodeFormBlock,
        serviceTabBlock,
        setServiceTabBlock,
        userInfo,
        setUserInfo,
        progressBar,
        setProgressBar
    }) => {

    const [ validPostcode, setValidPostcode ] = useState(false);
    const [ hideLabels,    setHideLabels ]    = useState(true);

    const submitHandler = (event) => {
        event.preventDefault(); 
        setHideLabels(false);
        if(validPostcode) {
            setPostcodeFormBlock(!postcodeFormBlock);
            setPostcode(true);
            setServiceTabBlock(!serviceTabBlock);
        }
    }

    const goNextHandler = () => {
        setServiceTabBlock(!serviceTabBlock);
        setPostcodeFormBlock(!postcodeFormBlock);
    }

    const postCodeChangeHandler = (event) => {
        setUserInfo({...userInfo, postCode: event.target.value});
        if (event.target.value.match(regPostcode)) {
            setValidPostcode(true);
            console.log("Valid Postcode !");
        } else {
            setValidPostcode(false);
            console.log("Invalid Postcode!");  
        }
    }
    
    return(
        <React.Fragment>
            <Header 
                progressBar={progressBar}
                setProgressBar={setProgressBar}
            />
            <ContainerFluid>
                {postcode &&
                    <div className="col-xl-9 col-lg-9 col-md-11 col-sm-12 col-12 margin-bottom-postcode-btn" id="button-block">
                        <button onClick={goNextHandler} id="btn-forward">&nbsp;&nbsp;&nbsp; Next &#8594;</button>
                    </div>
                }
                <div className="col-lg-12 postcode-form-content" id="postcodeForm">
                    <div className="row justify-content-md-center">   
                        <div className="col-lg-6 col-md-8">
                            <form>           
                                <p>To proceed, <br />please enter your postcode:</p>
                                <input 
                                    onChange={postCodeChangeHandler}
                                    value={userInfo.postCode}
                                    type="number" title="Five digit zip code" 
                                    id="inputPostcode"
                                />
                                <button onClick={submitHandler} type="submit" className="calculate-btn">GET QUOTES NOW</button>
                                <br />
                                {(!validPostcode & !hideLabels) ? <label htmlFor="inputPostcode">Please enter valid Postcode</label> : <label htmlFor="inputPostcode"></label>}
                            </form>
                        </div>
                        <div className="col-lg-3 col-md-3 image-block">
                            {/* <img src="https://www.solarquotes.com.au/img/2020_quote/welcome.png" alt=""/> */}
                        </div>
                    </div> 
                </div>
            </ContainerFluid>
            <Footer />
        </React.Fragment>
    );
}

export default PostcodeForm;