import React, { useState } from 'react';
import PostcodeForm        from './Components/PostcodeForm';
import ServiceTab          from './Components/ServiceTab';
import Quizz               from './Components/Quizz';
import LocationForm        from './Components/LocationForm';
import ThankYou            from './Components/ThankYou';
import ContactForm         from './Components/ContactForm';
import ServiceTabSolarBat  from './Components/ServiceTab/ServiceTabSolarBat';
import ServiceTabUpgrades  from './Components/ServiceTab/ServiceTabUpgrades';
import ServiceTabCharity   from './Components/ServiceTab/ServiceTabCharity';

import './App.css';

function App() {
  const [postcodeFormBlock,  setPostcodeFormBlock]  = useState(true);
  const [serviceTabBlock,    setServiceTabBlock]    = useState(false);
  const [quizzBlock,         setQuizzBlock]         = useState(false);
  const [locationBlock,      setLocationBlock]      = useState(false);
  const [contactFormBlock,   setContactFormBlock]   = useState(false);
  const [thankYouBlock,      setThankYouBlock]      = useState(false);
  const [progressBar,        setProgressBar]        = useState(0);
  const [postcode,           setPostcode]           = useState(false);
  const [serviceNext,        setServiceNext]        = useState(false);
  const [locationNext,       setLocationNext]       = useState(false);
  const [serviceTabSolarBat, setServiceTabSolarBat] = useState(false);
  const [serviceTabUpgrades, setServiceTabUpgrades] = useState(false);
  const [serviceTabCharity,  setServiceTabCharity]  = useState(false);

  const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        postCode: '',
        location: '',
        service: '',
        questionList: [],
  });

  return (
    <div id='quote-sp-calc'>
      {postcodeFormBlock && 
        <PostcodeForm 
          postcode={postcode}
          setPostcode={setPostcode}
          setPostcodeFormBlock={setPostcodeFormBlock} 
          postcodeFormBlock={postcodeFormBlock} 
          serviceTabBlock={serviceTabBlock}
          setServiceTabBlock={setServiceTabBlock}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          progressBar={progressBar}
          setProgressBar={setProgressBar}
        />
      }
      {serviceTabBlock && 
        <ServiceTab 
          serviceNext={serviceNext}         
          setServiceNext={setServiceNext}
          serviceTabCharity={serviceTabCharity}
          setServiceTabCharity={setServiceTabCharity}
          serviceTabUpgrades={serviceTabUpgrades}
          setServiceTabUpgrades={setServiceTabUpgrades}
          serviceTabSolarBat={serviceTabSolarBat}
          setServiceTabSolarBat={setServiceTabSolarBat}
          setPostcodeFormBlock={setPostcodeFormBlock} 
          postcodeFormBlock={postcodeFormBlock} 
          serviceTabBlock={serviceTabBlock}
          setServiceTabBlock={setServiceTabBlock}
          quizzBlock={quizzBlock}
          setQuizzBlock={setQuizzBlock}
          contactFormBlock={contactFormBlock}
          setContactFormBlock={setContactFormBlock}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          progressBar={progressBar}
          setProgressBar={setProgressBar}
        />
      }
      {quizzBlock && 
        <Quizz 
          serviceTabBlock={serviceTabBlock}
          setServiceTabBlock={setServiceTabBlock}
          quizzBlock={quizzBlock}
          setQuizzBlock={setQuizzBlock}
          locationBlock={locationBlock}
          setLocationBlock={setLocationBlock}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          progressBar={progressBar}
          setProgressBar={setProgressBar}
        />
      }
      {locationBlock &&
        <LocationForm
          locationNext={locationNext}       
          setLocationNext={setLocationNext}
          quizzBlock={quizzBlock}
          setQuizzBlock={setQuizzBlock}
          locationBlock={locationBlock}
          setLocationBlock={setLocationBlock}
          contactFormBlock={contactFormBlock}
          setContactFormBlock={setContactFormBlock}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          progressBar={progressBar}
          setProgressBar={setProgressBar}
        />
      }
      {contactFormBlock && 
        <ContactForm 
          serviceTabBlock={serviceTabBlock}
          setServiceTabBlock={setServiceTabBlock}
          locationBlock={locationBlock}
          setLocationBlock={setLocationBlock}
          contactFormBlock={contactFormBlock}
          setContactFormBlock={setContactFormBlock}
          thankYouBlock={thankYouBlock}     
          setThankYouBlock={setThankYouBlock}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          progressBar={progressBar}
          setProgressBar={setProgressBar}
        />
      }
      {thankYouBlock && 
        <ThankYou 
          userInfo={userInfo}
        />
      }
      {/* Services: */}
      {serviceTabSolarBat &&
        <ServiceTabSolarBat  
          serviceTabSolarBat={serviceTabSolarBat}
          setServiceTabSolarBat={setServiceTabSolarBat}
          serviceTabBlock={serviceTabBlock}
          setServiceTabBlock={setServiceTabBlock}
          quizzBlock={quizzBlock}
          setQuizzBlock={setQuizzBlock}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          progressBar={progressBar}
          setProgressBar={setProgressBar}
        />
      }
      {serviceTabUpgrades &&
        <ServiceTabUpgrades 
          serviceTabUpgrades={serviceTabUpgrades}
          setServiceTabUpgrades={setServiceTabUpgrades}
          serviceTabBlock={serviceTabBlock}
          setServiceTabBlock={setServiceTabBlock}
          quizzBlock={quizzBlock}
          setQuizzBlock={setQuizzBlock}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          progressBar={progressBar}
          setProgressBar={setProgressBar}
        />
      }
      {serviceTabCharity &&
        <ServiceTabCharity 
          serviceNext={serviceNext}         
          setServiceNext={setServiceNext}
          serviceTabCharity={serviceTabCharity}
          setServiceTabCharity={setServiceTabCharity}
          serviceTabBlock={serviceTabBlock}
          setServiceTabBlock={setServiceTabBlock}
          quizzBlock={quizzBlock}
          setQuizzBlock={setQuizzBlock}
          contactFormBlock={contactFormBlock}
          setContactFormBlock={setContactFormBlock}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          progressBar={progressBar}
          setProgressBar={setProgressBar}
        />
      }
    </div>
  );
}

export default App;
