import React from 'react';

class Q3City extends React.Component {
    render() {
        return (
            <div className="questions">
                <h1 id="question-h1">Where do you live?</h1>
                <form>
                    <div className="form-group">
                        <input type="city" className="form-control custom-form" id="cityInput" aria-describedby="city" placeholder="Anywhere, CA" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Q3City;