import React, { Component } from 'react';

//ErrorView is going to show error messages to the user.
const ErrorView = () => {

    const errorMessage = "There is no connection to the backend.";

    return (
        <div>
            <p>{errorMessage}</p>
        </div>
    );
}

export default ErrorView;
