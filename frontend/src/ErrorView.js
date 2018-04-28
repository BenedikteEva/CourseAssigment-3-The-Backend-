import React, { Component } from 'react';

const ErrorView = () => {

    const errorMessage = "There is no connection to the backend.";

    return (
        <div>
            <p>{errorMessage}</p>
        </div>
    );
}

export default ErrorView;








