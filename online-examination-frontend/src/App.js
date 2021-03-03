import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import AboutUs from "./components/AboutUs/AboutUs";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register";
import Institution from "./components/Institution/Institution.js";
import Pagenotfound from "./components/Error/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/institution" component={Institution} />
          <Route component={Pagenotfound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
