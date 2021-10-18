import React from 'react';
import Loader from 'react-loader-spinner';

const LoadingPage = () => {
    return(
        <div className="loading-page"><Loader type="ThreeDots" color="black" /></div>
    )
}


export default LoadingPage;