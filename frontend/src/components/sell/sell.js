import React from "react";
import { Link } from "react-router-dom";
import "../../styles/sell.css";
import NavBar from "../nav_bar/nav_bar_container";

class SellPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            category: "",
            itemName: "",
            price: 0,
            description: ""
        }
        console.log(this.props)
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
        const post = {
            userId: this.props.userId, 
            category: this.state.category,
            itemName: this.state.itemName,
            price: this.state.price,
            description: this.state.description
            }
            console.log(post)
        this.props.createPost(post)
        this.setState({ 
            category: "",
            itemName: "",
            price: "",
            description: ""
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
                        <select>
                            <option onClick={() => this.setState({ category: 'Games'})}>Game</option>
                            <option onClick={() => this.setState({ category: 'Shoes'})}>Shoes</option>
                            <option onClick={() => this.setState({ category: 'Books'})}>Books</option>
                        </select>
                        <div className="sell-buttons">
                            <button className="upload">Upload Image</button>
                            <button className="create">Create Listing</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SellPage;