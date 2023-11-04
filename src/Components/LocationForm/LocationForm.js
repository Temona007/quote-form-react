import React          from "react";
import Autocomplete   from "react-google-autocomplete";
import Header         from "../../UI/Header";
import ContainerFluid from "../../UI/ContainerFluid";
import Footer         from "../../UI/Footer/Footer";
import                './LocationForm.css';

const LocationForm = ({
        locationNext,  
        setLocationNext,
        quizzBlock,
        setQuizzBlock,
        locationBlock,
        setLocationBlock,
        contactFormBlock,
        setContactFormBlock,
        userInfo,
        setUserInfo,
        progressBar,
        setProgressBar
    }) => {

    const submitHandler = (event) => {
        event.preventDefault(); 
        if(userInfo.location) {
            setLocationNext(true);
            setLocationBlock(!locationBlock);
            setContactFormBlock(!contactFormBlock);
        } 
    }

    const goNextHandler = () => {
        setLocationBlock(!locationBlock);
        setContactFormBlock(!contactFormBlock);
    }

    const goBackHandler = () => {
        setLocationBlock(!locationBlock);
        setQuizzBlock(!quizzBlock);
    }

    const GOOGLE_API_KEY = "AIzaSyAEBSsl0fYWoXlvMRy3lQj4ha88uErn5sc";
    

    return(
        <React.Fragment>
            <Header progressBar={94} />
            <ContainerFluid>
                <div className="col-xl-9 col-lg-9 col-md-11 col-sm-12 col-12" id="button-block">
                    <button onClick={goBackHandler} id="btn-back">&#8592; Back &nbsp;&nbsp;&nbsp;</button>
                    {locationNext &&
                        <button onClick={goNextHandler} id="btn-forward">&nbsp;&nbsp;&nbsp; Next &#8594;</button>
                    }
                </div>
                <div className="col-lg-9 col-md-11">
                    <h2 className="pb-2">Great, you are one step away from your quotes.</h2>
                </div>
                <div className="col-lg-12 postcode-form-content location-block">
                    <div className="row justify-content-md-center">
                        <div className="col-lg-9 col-md-11">
                            <form id="locationForm">
                                <h5>Now we just need to know the address where the panels will be installed</h5>                         
                                <label htmlFor="location" className="form-label">Please enter address below or tap the pin to autofill your current location:</label>
                                <Autocomplete
                                    apiKey={GOOGLE_API_KEY}
                                    onPlaceSelected={(place) => {
                                        //console.log(place);
                                        setUserInfo({...userInfo, location: place.formatted_address})
                                    }}
                                    options={{
                                        types: ["(regions)"],
                                        componentRestrictions: { country: ["usa", "ca", "ie", "au"] },
                                        
                                    }}
                                    id="location" 
                                />
                                <div className="location-btn-block">
                                    <button type="submit" className="calculate-btn location-btn"
                                        onClick={submitHandler}
                                    >&nbsp;&nbsp; Next &nbsp;&nbsp;</button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </ContainerFluid>
            <Footer />
        </React.Fragment>
    );
}

export default LocationForm;