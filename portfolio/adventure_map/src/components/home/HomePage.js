import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className= "home-jumbo">
                <h1 className="home-header">Adventure Map</h1>
                <h2 className="h2-header">A demo sign-up flow for <span className="hm">Happy Money</span></h2  >
                <Link to="about" className="btn btn-custom btn-home btn-lg">Learn More</Link>
                <Link to="signup" className="btn btn-custom btn-home btn-lg">Sign Up</Link>
            </div>
        );
    }
}

export default HomePage;