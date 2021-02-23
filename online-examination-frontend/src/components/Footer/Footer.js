import React from "react";
import "./Footer.css";


const footerPage = (props) => {
    return (
        
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-md-4">
                <h6>About Us</h6>
                <a href="http://google.com/">For test takers</a><br/>
                  <a href="https://www.google.com/">For admissions</a><br/>
                  <a href="https://www.google.com/">Other</a>
                 

              </div>
    
              <div className="col-xs-4 col-md-4">
                <h6>Help and Support</h6>
                <a href="http://google.com/">Help Center</a><br/>
                  <a href="https://www.google.com/">How scores work</a><br/>
                  </div>
    
              <div className="col-xs-4 col-md-4">
                <h6>Privacy and Terms</h6>
                <a href="http://google.com/">Terms</a><br/>
                  <a href="https://www.google.com/">Privacy</a><br/>
               
              </div>
            </div>
            <hr/>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
             <a href="#"> Online Examination System</a>.
                </p>
              </div>
            </div>
          </div>
        </footer>


    );
};  

export default footerPage;