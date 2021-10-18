import React from "react";
import NavBar from '../nav_bar/nav_bar_container'
import { Link } from "react-router-dom";
import '../../styles/home.css'
import { fetchPopular } from "../../util/post_api_util";
import mario from '../../assets/mario.jpg'
import clock from '../../assets/clock.jpeg'
import ones from '../../assets/ones.jpeg'
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/dist/styles.css';
import { Image } from 'cloudinary-react'



class MainPage extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            popularPosts: null
        }
    }
    
    componentDidMount(){
        fetchPopular().then(
            posts =>{
                this.setState({popularPosts: posts})
            }
        )
    }
    
    render() {
        if(!this.state.popularPosts){
            return null;
        }
        let popularPosts= [];
        const posts = this.state.popularPosts.data;
        for(let i=0;i<posts.length;i++){
            const post = posts[i];
            popularPosts.push(
                <div key={`${i}${post._id}`} className="slide" id={`slide-${i}`}>
                    <div className="description">
                        <h1>Popular Item</h1>
                        <p>{post.itemName}</p>
                        <Link to={`posts/${post._id}`}><button>Make an offer</button></Link>
                    </div>
                    <Image cloudName="dhdeqhzvx" publicId={`https://res.cloudinary.com/dhdeqhzvx/image/upload/v1632404523/${post.imageUrl}`} />
                </div>
            )
        }
        return (
            <div className="grid">
                <NavBar/>
                <div className="about">
                    <h1>Equivalent Exchange</h1>
                    <p>Barter is a place where users can trade unwanted items for <br/>cash or other items. Check out our featured selections below!</p>
                </div>
                <AwesomeSlider cssModule={AwsSliderStyles}>
                    {popularPosts}
                </AwesomeSlider>
                <div className="featured">
                    <div className="description">
                        <h1>Featured categories</h1>
                    </div>
                    <Link to="/category/Shoes"><img src={ones} alt="shoes"/></Link>
                    <Link to ="/category/Games"><img src={mario} alt="games"/></Link>
                    <Link to ="/category/Books"><img src={clock} alt="books"/></Link>
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
                                <a href="https://docs.google.com/document/d/1TkgxqUMUMiAEXBCleRICOHvIURWvBvRtVhgw7L_AWrU/edit?usp=sharing" rel="noreferrer" target="_blank"><i className="far fa-file-pdf"></i></a> 
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