import React from 'react';

class AboutDetails extends React.Component {
    render() {
        return (
            <div className = "about-details">
                <h1 className="about-header">Details</h1>
                    <div className="details-div">
                        <p className="p-about"><span className="span-title">Audience:</span> Young adults who enjoy traveling and going on road trips</p>
                        <p className="p-about"><span className="span-title">Age Range:</span> Between 20 to 35</p>
                        <p className="p-about"><span className="span-title">Personality:</span> They are adventurous, open to new experiences, willing to make decisions on the fly, and are open minded</p>
                        <p className="p-about"><span className="span-title">Hobbies:</span> Hiking, camping, going to the beach, paddle boarding, trying new food, enjoying time with friends, photography, art, and spontaneous activities</p>
                    </div>
            </div>
            
        );
    }
}

export default AboutDetails;