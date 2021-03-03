import React from 'react';
import './Error.css';


const Error = ()=>{
    return(
        <div className="center-text">
        <div class="d-flex justify-content-center align-items-center" id="main">
        <img src="error.jpg" alt={1} height="150" width="150"/>
            <h1 class="mr-3 pr-3 align-top border-right inline-block align-content-center">404</h1>
            <div class="inline-block align-middle">
                <h2 class="font-weight-normal lead" id="desc">The page you requested was not found.</h2>
            </div>
        </div>
        
        </div>
    );
}

export default Error;