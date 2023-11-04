import React, 
      {useState} from "react";
import base      from "../../API/airtable";
import Header    from "../../UI/Header";
import Container from "../../UI/Container";
import Footer    from "../../UI/Footer/Footer";
import                './ContactForm.css';

// RegEx:
const regFirstName = /^[a-zA-Z ]{2,30}$/;
const regLastName  = /^[a-zA-Z ]{2,30}$/;
const regEmail     = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regPhone     = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const ContactForm = ({
        serviceTabBlock,
        setServiceTabBlock,
        locationBlock,
        setLocationBlock,
        contactFormBlock,
        setContactFormBlock,
        thankYouBlock, 
        setThankYouBlock,
        userInfo,
        setUserInfo,
        progressBar,
        setProgressBar
    }) => {

    const [ hideLabels,      setHideLabels ]     = useState(true);
    const [ validFirstName,  setValidFirstName ] = useState(false);
    const [ validLastName,   setValidLastName ]  = useState(false);
    const [ validEmail,      setValidEmail ]     = useState(false);
    const [ validPhone,      setValidPhone ]     = useState(false);

    const submitHandler = (event) => {
        event.preventDefault(); 
        setHideLabels(false);
        if(validFirstName && validLastName && validEmail && validPhone) {
            setContactFormBlock(!contactFormBlock);
            setThankYouBlock(!thankYouBlock);
            // adding data to Airtable
            let questionAnswerString = '';
            let newString            = '';
            for (const key in userInfo.questionList) {
                newString = userInfo.questionList[key].questionText + 
                            "\n* " + 
                            userInfo.questionList[key].answerText + 
                            "\n\n ";
                questionAnswerString = questionAnswerString + newString;
            }
            base('users').create([
                {
                  "fields": {
                    "firstName": userInfo.firstName,
                    "lastName":  userInfo.lastName,
                    "email":     userInfo.email,
                    "location":  userInfo.location,
                    "phone":     userInfo.phone,
                    "postCode":  userInfo.postCode,
                    "service":   userInfo.service,
                    "questions": questionAnswerString,
                  }
                },
              ], function(err, records) {
                if (err) {
                  console.error(err);
                  return;
                }
                records.forEach(function (record) {
                  console.log(record.getId());
                });
            });
        }
    }

    const goBackHandler = () => {
        // Back to Service Component
        if ( userInfo.service === 'Repairs_Maintenance' ||
             userInfo.service === "Submit_Your_Details_To_Corena" 
            ) {
            setContactFormBlock(!contactFormBlock);
            setServiceTabBlock(!serviceTabBlock);
        } else {
            setContactFormBlock(!contactFormBlock);
            setLocationBlock(!locationBlock);
        }
    }

    const firstNameChangeHandler = (event) => {
        setUserInfo({...userInfo, firstName: event.target.value});
        if (event.target.value.match(regFirstName)) {
            setValidFirstName(true);
            console.log("Valid Name !");
        } else {
            setValidFirstName(false);
            console.log("Invalid Name!");  
        }
    }

    const lastNameChangeHandler = (event) => {
        setUserInfo({...userInfo, lastName: event.target.value});
        if (event.target.value.match(regLastName)) {
            setValidLastName(true);
            console.log("Valid Last Name!");
        } else {
            setValidLastName(false);
            console.log("Invalid Last Name!");  
        }
    }

    const emailChangeHandler = (event) => {
        setUserInfo({...userInfo, email: event.target.value});
        if (event.target.value.match(regEmail)) {
            setValidEmail(true);
            console.log("Valid email address!");
        } else {
            setValidEmail(false);
            console.log("Invalid email address!");
        }
    }

    const phoneChangeHandler = (event) => {
        setUserInfo({...userInfo, phone: event.target.value});
        if (event.target.value.match(regPhone)) {
            setValidPhone(true);
            console.log("Valid Phone !");
        } else {
            setValidPhone(false);
            console.log("Invalid Phone!");  
        }
    }

    return(
        <React.Fragment>
            <Header progressBar={100} />
            <Container>
                <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12" id="button-block">
                    <button onClick={goBackHandler} id="btn-back">&#8592; Back &nbsp;&nbsp;&nbsp;</button>
                </div>
                <div className="col-xl-10 col-lg-10 col-md-12" id="contact-form-block">
                    <div className="row align-items-center">
                        <div className="col-md-7 form-block">
                            <form>
                                <div className="mb-3">
                                    <input 
                                        onChange={firstNameChangeHandler}
                                        value={userInfo.firstName}
                                        type="text" className="form-control" id="firstName" placeholder="First Name"
                                    />
                                    {(!validFirstName & !hideLabels) ? <small className="form-text text-muted">Please enter First Name</small> : null}
                                </div>
                                <div className="mb-3">
                                    <input 
                                        onChange={lastNameChangeHandler}
                                        value={userInfo.lastName}
                                        type="text" className="form-control" id="lastName" placeholder="Last Name"
                                    />
                                    {(!validLastName & !hideLabels) ? <small>Please enter Last Name</small> : null}
                                </div>
                                <div className="mb-3">
                                    <input 
                                        onChange={emailChangeHandler}
                                        value={userInfo.email}
                                        type="email" className="form-control" id="email" 
                                        placeholder="Email address"
                                    />
                                    {(!validEmail & !hideLabels) ? <small>Please enter valid email address</small> : null}
                                </div>
                                <div className="mb-3">
                                    <input 
                                        onChange={phoneChangeHandler}
                                        value={userInfo.phone}
                                        type="tel" className="form-control" id="phone" placeholder="Phone Number"
                                    />
                                    {(!validPhone & !hideLabels) ? <small>Please enter phone nunmer</small> : null}
                                </div>
                                <button type="submit" className="calculate-btn contact-form-btn" onClick={submitHandler}>Get Your Quotes</button>
                            </form>
                        </div>
                        <div className="col-md-5 contact-form-block-right">
                            <h2>Almost there</h2> 
                            <p>We need some contact information so the installers can contact you with the quotes.</p>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />

        </React.Fragment>
    );
}

export default ContactForm;