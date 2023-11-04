import React, { useState }  from "react";
import Header               from "../../UI/Header";
import Container            from "../../UI/Container";
import Footer               from "../../UI/Footer/Footer";
import QUESTIONS_SOLAR      from '../../data/questionsSolar';
import QUESTIONS_EV_CHARGER from "../../data/questionsEvCharger";
import QUESTIONS_BATT_READY_SOLAR_SYSTEM  from "../../data/questionsBattReadySolarSystem";
import QUESTIONS_GRID_CONNECT_SOLAR_BATT  from "../../data/questionsGridConnectSolarBatt";
import QUESTIONS_ADD_BATT_TO_SOLAR_SYSTEM from "../../data/questionsAddBattToSolarSys";
import QUESTIONS_OFF_GRID_SYSTEM          from "../../data/questionsOffGridSys";
import QUESTIONS_ADD_SOLAR_PANELS         from "../../data/questionsAddSolarPanels";
import QUESTIONS_ADD_BATT                 from "../../data/questionsAddBatt";
import QUESTIONS_SOLAR_SYSTEM_FOR_COMPANY from "../../data/questionsSolarSysForYourCompany";
import QUESTIONS_SOLAR_CHARITY            from "../../data/questionsSolarCharity";

import './Quizz.css';

const Quizz = ({
        serviceTabBlock,
        setServiceTabBlock,
        quizzBlock,
        setQuizzBlock,
        locationBlock,
        setLocationBlock,
        userInfo,
        setUserInfo,
        progressBar,
        setProgressBar
    }) => {

    const [ question, setQuestion ] = useState(0);
    const [ counter,  setCounter]   = useState(0);

    let QUESTIONS = [];
    let userChoiseService = userInfo.service;
    switch (userChoiseService) {
        case 'Solar_Only':
            QUESTIONS = QUESTIONS_SOLAR;
            break;
        case 'EV_Charger':
            QUESTIONS = QUESTIONS_EV_CHARGER;
            break;
        case 'Batt_Ready_Solar_System':
            QUESTIONS = QUESTIONS_BATT_READY_SOLAR_SYSTEM;
            break;
        case 'Grid_Connect_Solar_Batt':
            QUESTIONS = QUESTIONS_GRID_CONNECT_SOLAR_BATT;
            break;
        case 'Add_Batt_To_Solar_System':
            QUESTIONS = QUESTIONS_ADD_BATT_TO_SOLAR_SYSTEM;
            break;
        case 'Off_Grid_Sys':
            QUESTIONS = QUESTIONS_OFF_GRID_SYSTEM;
            break;
        case 'Add_Solar_Panel_To_Existing_System':
            QUESTIONS = QUESTIONS_ADD_SOLAR_PANELS;
            break;
        case 'Add_Batt_To_Existing_System':
            QUESTIONS = QUESTIONS_ADD_BATT;
            break;
        case 'Solar_Sys_For_Your_Company':
            QUESTIONS = QUESTIONS_SOLAR_SYSTEM_FOR_COMPANY;
            break;
        case 'Get_Quotes_For_Solar_Charity':
            QUESTIONS = QUESTIONS_SOLAR_CHARITY;
            break;
        default:
            console.log(`Error in ${userChoiseService}.`);
    }

    const numberOfQuestions = QUESTIONS.length;
    
    const resultClickHandler = (answer) => {
        if((question + 1) === numberOfQuestions) {
            setQuizzBlock(!quizzBlock);
            setLocationBlock(!locationBlock); 
        }
        setUserInfo({...userInfo, 
            questionList: {
                ...userInfo.questionList, [question]: {
                    questionText: QUESTIONS[question].questionText,
                    answerText:   answer,
                } 
            }
        });
        setQuestion(question + 1);
        setCounter(counter + 1);
        console.log(userInfo.questionList);
    }

    const goNextHandler = () => {
        if(question === numberOfQuestions) {
            setQuizzBlock(!quizzBlock);
            setLocationBlock(!locationBlock);
        }
        if(counter > question) {
            setQuestion(question + 1);
        }
    }

    const goBackHandler = () => {
        setQuestion(question - 1);
        if(question === 0) {
            setQuizzBlock(!quizzBlock);
            setServiceTabBlock(!serviceTabBlock);
        }
    }

    // last Question, textarea:
    const lastQuestion       = "Anything else you'd like to tell us?";
    const lastQuestionAnswer = 'Yes';

    return(
        <React.Fragment>
            <Header progressBar={20 + (question * 3)} />
            <Container >
                <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12" id="button-block">
                    <button onClick={goBackHandler} id="btn-back">&#8592; Back &nbsp;&nbsp;&nbsp;</button>
                    <button onClick={goNextHandler} id="btn-forward">&nbsp;&nbsp;&nbsp; Next &#8594;</button>
                </div>
                <div className="col-xl-10 col-lg-10 col-md-12">
                    <div className="card quizz-card">
                        <div className="card-body">
                            <h2 className="card-title">
                                {question + 1}. {QUESTIONS[question].questionText}
                            </h2>
                            <br />
                            <div id="questions">

                            {QUESTIONS[question].questionAnswer.map(
                                (item) => 
                                <>
                                <div key={item.id} className="form-check">
                                    {item.id !== 1518999 ? 
                                        <>
                                            <input className="form-check-input" type="radio" name={`question` + question} 
                                                id={item.id}
                                                onClick={() => (resultClickHandler(item.answerText))}
                                            />
                                        </> : 
                                        <>
                                            <input disabled className="form-check-input" type="radio" name={`question` + question} 
                                                id={item.id}
                                                onClick={() => (resultClickHandler(item.answerText))}
                                            />
                                         </>
                                        }
                                    
                                    <label className="form-check-label" htmlFor={`question` + question}>
                                        {item.answerText}
                                    </label>
                                    {(
                                      (QUESTIONS[question].questionText) === lastQuestion &&
                                      item.answerText === lastQuestionAnswer
                                     ) ?
                                        <>
                                            <div className="share-info">
                                                <textarea className="form-control" id="userTextArea" rows="3"></textarea>
                                                <button className="btn btn-primary"
                                                    onClick={() => (
                                                        resultClickHandler(document.getElementById("userTextArea").value)
                                                    )}
                                                >Send</button>
                                            </div>
                                        </> 
                                        : ''}
                                </div>
                                </>
                            )}

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </React.Fragment>
    );
}
export default Quizz;