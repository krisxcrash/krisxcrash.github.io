import React from 'react';

class Q4YouReady extends React.Component {
    render() {
        return (
            <div className="questions">
                <h1 id="question-h1">Tell us a little about yourself.</h1>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control custom-form" id="aboutInput" aria-describedby="text" placeholder="I love photography and am a seasoned traveler.. " />
                    </div>
                </form>
            </div>
        );
    }
}

export default Q4YouReady;