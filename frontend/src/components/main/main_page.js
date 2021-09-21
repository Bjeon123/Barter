import React from "react";
import {Link} from 'react-router-dom';
import NavBar from '../nav_bar/nav_bar_container'

class MainPage extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <NavBar/>
            </div>
        )
    }
}

export default MainPage;