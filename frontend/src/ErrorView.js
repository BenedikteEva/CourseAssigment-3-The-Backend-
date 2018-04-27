import React, { Component } from 'react';
import data from './dummyData/DummyErrorMessage.json';

const ErrorView = () => {
    var errorMessages = data.errorMessages;
    //var errorMessage = errorMessages.find(e => e.noConnection === "There is no connection to the backend.");
         
    /* console.log(errorMessages);
    console.log(errorMessage); */

    const errorMessage = "There is no connection to the backend.";

    return (
        <div>
            <p>{errorMessage}</p>
        </div>
    );
}

export default ErrorView;








