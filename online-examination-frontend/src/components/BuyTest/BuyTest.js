import React from "react";
import { Redirect } from "react-router-dom";
import "./BuyTest.css";
import { Jumbotron, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { AuthContext } from "../../App";

const BuyTest = (props) => {
  function purchaseTest(context) {
    fetch("http://localhost:8000/api/auth/purchase", {
      method: "post",
      body: JSON.stringify({ userId: context.user.userId }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(
        (result) => {
          if (result) {
            alert("Successfully purchased test!");
            let userObj = { ...context.user };
            userObj.isPurchased = true;
            context.setAuth({ isLoggedIn: true, user: userObj });
            props.history.push("/taketest");
          } else {
            alert("Error purchasing test.");
          }
        },
        (error) => {
          console.error(error);
        }
      );
  }

  return (
    <AuthContext.Consumer>
      {(context) => {
        if (!context.isLoggedIn) {
          return <Redirect to="/login" />;
        }
        if (context.user.isPurchased === 1) {
          return <Redirect to="/taketest" />;
        }
        return (
          <div className="divBuyTest">
            <Jumbotron className="classJumbotron">
              <h1 className="display-4">Buy Test</h1>
              <p className="">
                <br />
                Are you sure, you want to buy a test?
              </p>
              <br />
              <div className="row center">
                <Button
                  id="btnYes"
                  onClick={() => {
                    purchaseTest(context);
                  }}
                >
                  Yes
                </Button>
                <LinkContainer to="/taketest">
                  <Button id="btnNo">No</Button>
                </LinkContainer>
              </div>
            </Jumbotron>
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default BuyTest;
