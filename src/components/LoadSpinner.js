import React from 'react';
import '../assets/css/Spinner.css';

const LoadSpinner = () => {

    return (
        <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );

}

export default LoadSpinner;