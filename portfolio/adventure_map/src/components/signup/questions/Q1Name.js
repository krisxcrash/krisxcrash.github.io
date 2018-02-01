import React from 'react';

class Q1Name extends React.Component {
    render() {
        return (
            <div className="questions">
                <h1 id="question-h1">What is your name?</h1>
                <form>
                    <div className="form-group">
                        <input type="name" className="form-control text-form custom-form" id="nameInput" aria-describedby="name" placeholder="" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Q1Name;