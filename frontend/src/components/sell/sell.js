import React from "react";
import { Link } from "react-router-dom";
import "../../styles/sell.css";
import NavBar from "../nav_bar/nav_bar_container";

class SellPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            category: "Games",
            itemName: "",
            price: 0,
            description: "",
            postImage: null
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
            description: this.state.description,
            postImage: this.state.postImage
            }
            console.log(post)
        this.props.createPost(post)
        this.setState({ 
            category: "",
            itemName: "",
            price: "",
            description: "",
            postImage: null
        })
        this.props.history.push("/home")
    }

    render(){
        console.log(this.state)
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
                            <input type="file" onChange={(e)=>this.setState({postImage: e.target})}></input>
                            <button className="create">Create Listing</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SellPage;