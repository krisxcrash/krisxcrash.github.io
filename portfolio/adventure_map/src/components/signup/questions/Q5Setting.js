import React from 'react';

class Q5Setting extends React.Component {
    render() {
        return (
            <div className="questions">
                <h1 id="question-h1">What is your ideal setting?</h1>
                <div className="form-group">
                <input type="text" className="form-control custom-form" id="aboutInput" aria-describedby="text" placeholder="Somewhere by the sea.. " />
            </div>
            </div>
        );
    }
}

export default Q5Setting;