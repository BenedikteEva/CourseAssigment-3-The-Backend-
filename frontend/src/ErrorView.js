import React, { Component } from 'react';
import data from './dummyData/DummyErrorMessage.json';

const ErrorView = () => {
    var errorMessages = data.errorMessages;

    const errorMessage = "There is no connection to the backend.";

    return (
        <div>
            <p>{errorMessage}</p>
        </div>
    );
}

export default ErrorView;








