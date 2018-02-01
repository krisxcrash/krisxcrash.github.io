import React from 'react';

class Q2Birthday extends React.Component {
    render() {
        return (
            <div className="questions">
                <h1 id="question-h1">When is your birthday?</h1>
                <form>
                    <div className="form-group">
                        <input type="date" className="form-control custom-form" id="birthdayInput" aria-describedby="birthday" placeholder="" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Q2Birthday;