import React from 'react';
import AboutDetails from './AboutDetails';

class AboutPage extends React.Component {
    render() {
        return (
            <div className = "about-jumbo">
                <div className = "section1">
                    <h1 className="about-header">About Adventure Map</h1>
                    <h2 className="h2-about">A sign-up flow to onboard potential customers</h2>
                    <span className="arrow">&#x25BF;</span>
                </div>
                <div className="section2">
                    <AboutDetails />
                </div>
            </div>
        );
    }
}

export default AboutPage;