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
            image: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(field) {
        return e => {
            e.preventDefault();
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        let post = {
            userId: this.props.userId,
            category: this.state.category,
            itemName: this.state.itemName,
            price: this.state.price,
            description: this.state.description,
            imageUrl: `${randomInt().toString()}${this.state.image.name.split('.')[0]}`
        }
        let formData = new FormData();
        formData.append("file", this.state.image);
        formData.append("upload_preset", "ys8sasql");
        formData.append("public_id",`${post['imageUrl']}` )
        const options = {
            method: 'POST',
            body: formData,
        };
        fetch("https://api.cloudinary.com/v1_1/dhdeqhzvx/image/upload", options).then(
            response =>{
                console.log(response)
            }
        ).then(
            () => this.props.createPost(post)
        )
        this.setState({ 
            category: "",
            itemName: "",
            price: "",
            description: "",
            image: null
        })
        this.props.history.push("/home")
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
                    </form>
                </div>
            </div>
        )
    }
}

export default SellPage;