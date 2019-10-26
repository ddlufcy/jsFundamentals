import React from "react";

const Home = () => {
    return(
        <div className="main">
            <div className="mainDiv">
                <h2>Welcome</h2>
                <p>This site contains 300+ mountain bike trails located all over Indiana</p>    
                <p>Trails are sorted by difficulty ranging from Beginner to Expert so there is sure to be something for everyone.</p>
                <hr />
                <h3>How To Use:</h3>
                <ol>
                    <li>Select a difficulty on the sidebar.</li>
                    <li>Press the "+" to add to your favorites</li>
                </ol>
            </div>
        </div>
    )
}

export default Home;