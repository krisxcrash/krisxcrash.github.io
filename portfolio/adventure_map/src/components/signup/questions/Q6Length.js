import React from 'react';

class Q6Length extends React.Component {
    render() {
        return (
            <div className="questions">
                <h1 id="question-h1">How long would you like your trip to be?</h1>
                <div className="form-group">
                <input type="text" className="form-control custom-form" id="aboutInput" aria-describedby="text" placeholder="Just a weekend for me.. " />
            </div>
            </div>
        );
    }
}

export default Q6Length;