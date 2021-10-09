import React from "react";
import NavBar from '../nav_bar/nav_bar_container'
import { Link } from "react-router-dom";
import '../../styles/home.css'
import mario from '../../assets/mario.jpg'
import gow from '../../assets/gow.jpeg'
import sacai from '../../assets/sacais.jpeg'
import clock from '../../assets/clock.jpeg'
import airmax from '../../assets/airmax.png'
import ones from '../../assets/ones.jpeg'
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/dist/styles.css';



class MainPage extends React.Component {
    
    componentDidMount(){
        this.props.fetchPosts();
    }
    
    render() {
 
        return (
            <div className="grid">
                <NavBar/>
                <div className="about">
                    <h1>Equivalent Exchange</h1>
                    <p>Barter is a place where users can trade unwanted items for <br/>cash or other items. Check out our featured selections below!</p>
                </div>
                <AwesomeSlider cssModule={AwsSliderStyles}>
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
                        <img src={gow} className="gow"></img>
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
                        <img src={clock} className="gow"></img>
                    </div>
                </AwesomeSlider>
                <div className="featured">
                    <div className="description">
                        <h1>Featured categories</h1>
                    </div>
                    <Link to="/category/Shoes"><img src={ones}/></Link>
                    <Link to ="/category/Games"><img src={mario}/></Link>
                    <Link to ="/category/Books"><img src={clock}/></Link>
                </div>
                <footer className="home-footer">
                    <div className="footer-left">
                        <h1>Barter</h1>
                        <p>Meet the Creators</p>
                    </div>
                    <div className="creators">
                        <div className="column">
                            <h2>Jonathan Wong</h2>
                            <div className="row">
                                <a href="https://github.com/jay5375" rel="noreferrer" target="_blank"><i className="fab fa-github" ></i></a>
                                <a href="https://www.linkedin.com/in/jonathan-wong-435a8b146/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                <a href="https://docs.google.com/document/d/1V0Y0HZvcfPiW93J_Y_bRNS07jfRTXbe7Sa-uQSB1l8Q/edit?usp=sharing" rel="noreferrer" target="_blank"><i className="far fa-file-pdf"></i></a> 
                            </div>
                        </div>
                        <div className="column">
                            <h2>Sam Jeon</h2>
                            <div className="row">
                                <a href="https://github.com/Bjeon123" rel="noreferrer" target="_blank"><i className="fab fa-github" ></i></a>
                                <a href="https://www.linkedin.com/in/byung-sam-jeon-01a68812a/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                <a href="" rel="noreferrer" target="_blank"><i className="far fa-file-pdf"></i></a> 
                            </div>
                        </div>
                        <div className="column">
                            <h2>Long Chen</h2>
                            <div className="row">
                                <a href="https://github.com/rinayumiho" rel="noreferrer" target="_blank"><i className="fab fa-github" ></i></a>
                                <a href="https://www.linkedin.com/in/long-chen-5153a31b7/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                <a href="https://rinayumiho.github.io/portfolio/assets/LongChen_resume_udel.pdf" rel="noreferrer" target="_blank"><i className="far fa-file-pdf"></i></a> 
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default MainPage;