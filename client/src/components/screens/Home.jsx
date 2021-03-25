import React from 'react';



const Home = () => {
    return (
        <div className="home">
            <div className="card home-card">
                <h5>name</h5>
                <div className="card-image">
                    <img src="https://cutt.ly/fxye9De" alt="post" />
                </div>
                <div className="card-content">
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <p>this is best pic</p>
                    <input type="text" placeholder="add comment" />
                </div>
            </div>
        </div>
    )
}

export default Home;