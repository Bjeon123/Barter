import React from "react";

class MainPage extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Barter</h1>
                <button onClick={this.props.logout}>Sign out</button>
            </div>
        )
    }
}

export default MainPage;