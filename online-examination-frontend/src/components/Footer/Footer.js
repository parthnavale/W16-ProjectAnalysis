import React from "react";
import "./Footer.css";


const footerPage = (props) => {
  return (

    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-4">
            <h6>About Us</h6>
            <a href="/scores">For test takers</a><br />
            <a href="/institution">For admissions</a><br />
            <a href="/aboutus">About us</a>
          </div>

          <div className="col-xs-4 col-md-4">
            <h6>Help and Support</h6>
            <a href="/##">Help Center</a><br />
            <a href="/scores">How scores work</a><br />
          </div>

          <div className="col-xs-4 col-md-4">
            <h6>Privacy and Terms</h6>
            <a href="##">Terms</a><br />
            <a href="##">Privacy</a><br />
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; {new Date().getFullYear()} All Rights Reserved by
             <a href="/"> Online Examination System</a>.
                </p>
          </div>
        </div>
      </div>
    </footer>


  );
};

export default footerPage;