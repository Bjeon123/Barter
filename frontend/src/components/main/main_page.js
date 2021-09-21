import React from "react";
import NavBar from '../nav_bar/nav_bar_container'
import '../../styles/home.css'
import logo from '../../assets/logo512.png'

class MainPage extends React.Component {
    render() {
        return (
            <div className="grid">
                <NavBar/>
                <div className="slider">
                    <div class="slide">
                        <div className="description">
                            <h1>Popular Item</h1>
                            <p>Mario</p>
                            <button>Buy Now</button>
                        </div>
                        <img src={logo}></img>
                    </div>
                    <div class="slide">
                        <img src={logo}></img>
                    </div>
                    <div class="slide">
                        <img src={logo}></img>
                    </div>
                    <div class="slide">
                        <img src={logo}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;