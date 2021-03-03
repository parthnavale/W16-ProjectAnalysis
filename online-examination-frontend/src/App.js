import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import AboutUs from "./components/AboutUs/AboutUs";
import Scores from "./components/Scores/Scores";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register";
import Pagenotfound from "./components/Error/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Taketest from './components/Taketest/Taketest';

export const AuthContext = React.createContext();

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoggedIn : false,
      setAuth: loginObj => {
        localStorage.setItem("isLoggedIn", loginObj);
        let { isLoggedIn } = this.state;
        if (loginObj) {
          isLoggedIn = true;
        } else {
          isLoggedIn = false;
        }
        this.setState({ isLoggedIn: isLoggedIn });
      },
      clearAuth : () =>{
        localStorage.clear();
        this.setState({ isLoggedIn: false });
      }
    };
  }

  render(){
  return (
    <div className="App">
      <AuthContext.Provider value={this.state}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/taketest" component={Taketest}/>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/scores" component={Scores} />
          <Route component={Pagenotfound} />
        </Switch>
        <Footer />
      </Router>
      </AuthContext.Provider>
    </div>
  )};
}

export default App;
