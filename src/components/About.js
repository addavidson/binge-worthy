import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="about-us">
                <div className="about-card">
                <h1>About</h1>
                <div className="about-card-content">
                    <div className="site-info">
                        <h2>The Site</h2>
                        <p><span>Binge-Worthy</span> is a movie database site created by Adele Davidson. The site was built using Reactjs and is for educational purposes only.</p>
                    </div>
                    <div className="api-info">
                        <h2>The Movie API</h2>
                        <p>The Movie Database (TMDb) is a community built film and television database created in 2008. TMDb offers an API that allows projects like <span>Binge-Worthy</span> to pull movie and TV information onto an external application outside of the originating site.</p>
                        <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
                        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="The Movie Database Logo"/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default About;