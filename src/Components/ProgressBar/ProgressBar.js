import React from "react";
import './ProgressBar.css';

const ProgressBar = ({ progressBar, setProgressBar }) => {

    const progress = progressBar;
    const progressPercent = progress +'%';

    return(
        <div className="progress">
            <div 
                className="progress-bar bg-warning" 
                role="progressbar" 
                aria-valuenow="10"
                aria-valuemin="0" 
                aria-valuemax="100"
                style={{width: progressPercent}}
            >{progressPercent}</div>
        </div>
    );
}

export default ProgressBar;