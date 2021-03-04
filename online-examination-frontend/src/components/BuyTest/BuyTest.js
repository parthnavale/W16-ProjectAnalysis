import React from 'react';
import "./BuyTest.css";
import { Jumbotron,Image,Row, Col, Button } from 'react-bootstrap';




const BuyTest = () =>{
    
    return(
        <div className="divBuyTest">
            <Jumbotron className="classJumbotron" >
            <h1 className="display-4" >Buy Test</h1>
             <p className=""><br/>Are you sure, you want to buy a test?</p>
             <br/>
             <Button id="btnYes" onClick="">Yes</Button>
             <Button id="btnNo">No</Button>
                </Jumbotron>
      
        
        </div>
    );
    
}

export default BuyTest;