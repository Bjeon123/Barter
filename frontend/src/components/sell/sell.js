import React from "react";
import { Link } from "react-router-dom";
import "../../styles/sell.css";
import {randomInt} from '../../util/number_api_util'
import NavBar from "../nav_bar/nav_bar_container";
import axios from 'axios';

class SellPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            category: "Games",
            itemName: "",
            price: 0,
            description: "",
            image: null,
            errors: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderErrors = this.renderErrors.bind(this)
    }

    handleChange(field) {
        return e => {
            e.preventDefault();
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let imageUrl = "";
        if (this.state.image) {
            imageUrl = `${randomInt().toString()}${this.state.image.name.split('.')[0]}`
            let formData = new FormData
            formData.append("file", this.state.image);
            formData.append("upload_preset", "ys8sasql");
            formData.append("public_id", imageUrl)
            const options = {
                method: 'POST',
                body: formData,
            };
            fetch("https://api.cloudinary.com/v1_1/dhdeqhzvx/image/upload", options)
        }
        let post = {
            userId: this.props.userId,
            category: this.state.category,
            itemName: this.state.itemName,
            price: this.state.price,
            description: this.state.description,
            imageUrl: imageUrl
        }
        this.props.createPost(post).then(
            (post)=>{
                if (!post.errors) {
                    this.props.history.push(`/profile`)
                }
            }
        )
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ errors: nextProps.errors }, 
            () => {
                if (Object.keys(this.state.errors).length === 0) {
                    this.props.history.push("/sell")
                }
            }
        )
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`} className="errors">
                        {this.props.errors[error]}
                    </li>
                ))}
            </ul>
        )
    }

    render(){
        return (
            <div>
                <NavBar/>
                <div className="sell-page">
                    <form onSubmit={this.handleSubmit}>
                        <h1>Create a listing</h1>
                        <p>Item Name</p>
                        <input 
                            type='text'
                            value={this.state.itemName}
                            onChange={this.handleChange("itemName")}
                        />
                        <p>Description</p>
                        <input 
                            type='text'
                            value={this.state.description}
                            onChange={this.handleChange("description")}
                        />
                        <p>Price</p>
                        <input 
                            type='number'
                            value={this.state.price}
                            onChange={this.handleChange("price")}
                        />
                        <p>Category</p>
                        <select value={this.state.category} onChange={this.handleChange("category")}>
                            <option value="Games">Games</option>
                            <option value="Shoes">Shoes</option>
                            <option value="Books">Books</option>
                        </select>
                        <div className="sell-buttons">
                            <label for="file-upload" className="custom">
                                <input type="file" onChange={(e) => this.setState({ image: e.target.files[0]})}/>
                            </label>
                        </div>
                        <button className="create">Create Listing</button>
                        <div className="sell-errors">
                            {this.renderErrors()}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SellPage;