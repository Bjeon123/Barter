import React from 'react';
import { randomInt } from '../../util/number_api_util'

class OfferItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userId: null,
            postId: null,
            name: "",
            description: "",
            imageUrl: null,
        }
        this.handleChange=this.handleChange.bind(this);
    }

    handleImageUpload(image){
        const imageUrl= `${randomInt().toString()}${image.name.split('.')[0]}`
        let formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "ys8sasql");
        formData.append("public_id", `${imageUrl}`)
        const options = {
            method: 'POST',
            body: formData,
        };
        fetch("https://api.cloudinary.com/v1_1/dhdeqhzvx/image/upload", options).then(
            response => {
                console.log(response)
            }
        ).then(
            ()=> this.setState({imageUrl: imageUrl})
        )
    }

    handleChange(field) {
        return e => {
            e.preventDefault();
            this.setState({ [field]: e.target.value })
        }
    }

    render(){
        this.props.addItemtoState(this.state, this.props.idx)
        // console.log(this.state);
        return(
            <div className="offer-item-container">
                <input onChange={this.handleChange('name')} type="text" value={this.state.name} placeholder="item name"></input>
                <textarea onChange={this.handleChange('description')} placeholder="description"></textarea>
                <input type="file" onChange={(e)=>this.handleImageUpload(e.target.files[0])}></input>
                {/* <i onClick={()=>this.props.removeItem(this.props.index)} className="far fa-trash-alt"></i> */}
            </div>
        )
    }
}

export default OfferItem