import React from 'react';
import { randomInt } from '../../util/number_api_util'
import { Image } from 'cloudinary-react'


class OfferItem extends React.Component{
    constructor(props){
        super(props);
        const {item} = this.props;
        console.log(this.props)
        if(item){
            this.state = {
                userId: null,
                postId: null,
                name: item.name,
                id: item._id,
                description: item.description,
                imageUrl: item.imageUrl
            }
        }
        else{
            this.state = {
                userId: null,
                postId: null,
                name: "",
                description:  "",
                imageUrl: ""
            }
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
        return(
            <div className="offer-item-container dimensions">
                <input onChange={this.handleChange('name')} type="text" value={this.state.name} placeholder="item name"></input>
                <textarea onChange={this.handleChange('description')} placeholder="description" defaultValue={this.state.description}></textarea>
                {this.state.imageUrl ? 
                    <Image cloudName="dhdeqhzvx" publicId={`https://res.cloudinary.com/dhdeqhzvx/image/upload/v1632404523/${this.state.imageUrl}`} />:
                    null
                }
                <input type="file" onChange={(e)=>this.handleImageUpload(e.target.files[0])}></input>
                <i onClick={()=>this.props.removeItem(this.props.idx)} className="far fa-trash-alt"></i>
            </div>
        )
    }
}

export default OfferItem