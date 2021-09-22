import React from "react";
import NavBar from '../nav_bar/nav_bar_container'
import '../../styles/home.css'
import logo from '../../assets/logo512.png'
import zelda from '../../assets/zelda_bow.jpeg'
import mario from '../../assets/mario.jpg'

class MainPage extends React.Component {
    render() {
        return (
            <div className="grid">
                <NavBar/>
                <div className="slider">
                    <div className="slide" id="slide-1">
                        <div className="description">
                            <h1>Popular Item</h1>
                            <p>Mario</p>
                            <button>Make an offer</button>
                        </div>
                        <img src={logo}></img>
                    </div>
                    <div className="slide" id="slide-2">
                        <div className="description">
                            <h1>Popular Item</h1>
                            <p>Mario</p>
                            <button>Make an offer</button>
                        </div>
                        <img src={logo}></img>
                    </div>
                    <div className="slide" id="slide-3">
                        <div className="description">
                            <h1>Popular Item</h1>
                            <p>Mario</p>
                            <button>Make an offer</button>
                        </div>
                        <img src={logo}></img>
                    </div>
                    <div className="slide" id="slide-4">
                        <div className="description">
                            <h1>Popular Item</h1>
                            <p>Mario</p>
                            <button>Make an offer</button>
                        </div>
                        <img src={logo}></img>
                    </div>
                </div>
                <div className="featured">
                    <div className="description">
                        <h1>Featured categories</h1>
                    </div>
                    <img src={zelda}></img>
                    <img src={mario}></img>
                </div>
            </div>
        )
    }
}

export default MainPage;