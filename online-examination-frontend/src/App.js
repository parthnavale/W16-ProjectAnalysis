import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import AboutUs from './components/AboutUs/AboutUs'
import Scores from './components/Scores/Scores'
import Login from './components/Login/Login.js'
import Register from './components/Register/Register'
import Institution from './components/Institution/Institution.js'
import Pagenotfound from './components/Error/Error'
import PracticeExam from './components/PracticeExam/PracticeExam.js'
import BuyTest from './components/BuyTest/BuyTest.js'
import ActualExam from './components/ActualExam/ActualExam.js'
import Taketest from './components/Taketest/Taketest'
import PracticeResult from './components/PracticeResult/PracticeResult'
import ActualResult from './components/ActualResult/ActualResult'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export const AuthContext = React.createContext()

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      user: null,
      setAuth: loginObj => {
        this.setState(
          { isLoggedIn: loginObj.isLoggedIn, user: loginObj.user },
          () => {
            this.setValuesOnLocalStorage()
          }
        )
      },
      clearAuth: () => {
        localStorage.clear()
        this.setState({ isLoggedIn: false, user: null })
      }
    }
  }

  componentDidMount () {
    this.checkIfLoginOrNot()
  }

  checkIfLoginOrNot () {
    let isLoggedIn = localStorage.getItem('isLoggedIn')
    let userObj = localStorage.getItem('user')
    this.setState(prevState => ({
      ...prevState,
      isLoggedIn: isLoggedIn ? true : false,
      user:
        userObj && Object.keys(userObj).length > 0 ? JSON.parse(userObj) : null
    }))
  }
  setValuesOnLocalStorage () {
    const { isLoggedIn, user } = this.state
    try {
      localStorage.setItem('isLoggedIn', isLoggedIn)
      localStorage.setItem('user', JSON.stringify(user))
    } catch (e) {
      console.error(e)
    }
  }
  render () {
    return (
      <div className='App'>
        <AuthContext.Provider value={this.state}>
          <Router>
            <Header />
            <Switch>
              <Route exact path='/' component={Main} />
              <Route exact path='/aboutus' component={AboutUs} />
              <Route exact path='/taketest' component={Taketest} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />

              <Route path='/institution' component={Institution} />
              <Route path='/scores' component={Scores} />
              <Route path='/buytest' component={BuyTest} />
              <Route path='/practice' component={PracticeExam} />
              <Route path='/practiceresult' component={PracticeResult} />
              <Route path='/actualtest' component={ActualExam} />
              <Route path='/actualresult' component={ActualResult} />
              <Route component={Pagenotfound} />
            </Switch>
            <Footer />
          </Router>
        </AuthContext.Provider>
      </div>
    )
  }
}

export default App
