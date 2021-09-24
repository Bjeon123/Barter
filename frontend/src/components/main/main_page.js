import React from "react";
import NavBar from '../nav_bar/nav_bar_container'
import { Link } from "react-router-dom";
import '../../styles/home.css'
import logo from '../../assets/logo512.png'
import zelda from '../../assets/zelda_bow.jpeg'
import mario from '../../assets/mario.jpg'
import gow from '../../assets/gow.jpeg'
import sacai from '../../assets/sacais.jpeg'
import clock from '../../assets/clock.jpeg'
import airmax from '../../assets/airmax.png'
import ones from '../../assets/ones.jpeg'

class MainPage extends React.Component {
    render() {
        return (
            <div className="grid">
                <NavBar/>
                <div className="about">
                    <h1>Equivalent Exchange</h1>
                    <p>Barter is a place where users can trade unwanted items for <br/>cash or other items. Check out our featured selections below!</p>
                </div>
                <div className="slider">
                    <div className="slide" id="slide-1">
                        <div className="description">
                            <h1>Popular Item</h1>
                            <p>Nike LD waffle sacai Black</p>
                            <Link to='posts/614d5e1e9448ebfaf6dc300a'><button>Make an offer</button></Link>
                        </div>
                        <img src={sacai}></img>
                    </div>
                    <div className="slide" id="slide-2">
                        <div className="description">
                            <h1>Popular Item</h1>
                            <p>God of War</p>
                            <Link to='posts/614d615c9448ebfaf6dc302d'><button>Make an offer</button></Link>
                        </div>
                        <img src={gow}></img>
                    </div>
                    <div className="slide" id="slide-3">
                        <div className="description">
                            <h1>Popular Item</h1>
                            <p>Nike Air Max</p>
                            <Link to='posts/614d61019448ebfaf6dc3027'><button>Make an offer</button></Link>
                        </div>
                        <img src={airmax}></img>
                    </div>
                    <div className="slide" id="slide-4">
                        <div className="description">
                            <h1>Popular Item</h1>
                            <p>Clockwork Orange</p>
                            <Link to='posts/614d5eed9448ebfaf6dc3010'><button>Make an offer</button></Link>
                        </div>
                        <img src={clock}></img>
                    </div>
                </div>
                <div className="featured">
                    <div className="description">
                        <h1>Featured categories</h1>
                    </div>
                    <img src={ones}/>
                    <img src={mario}/>
                    <img src={clock}/>
                </div>
            </div>
        )
    }
}

export default MainPage;