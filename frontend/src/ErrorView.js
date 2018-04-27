import React, { Component } from 'react';
import data from './dummyData/DummyErrorMessage.json';

const ErrorView = () => {
    var errorMessages = data.errorMessages;
    var errorMessage = errorMessages.noConnection;
     
    console.log(errorMessages);
    console.log(errorMessage);

    return (
        <div>
            <p>{errorMessage}</p>
        </div>
    );
}

export default ErrorView;








