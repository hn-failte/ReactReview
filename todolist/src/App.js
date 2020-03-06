import React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import Header from './Pages/Header'
import Footer from './Pages/Footer'
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      msg: 111
    }
  }
  render(){
    return (
      <div className="App">
        <Router>
          <Route path="/header" render={() => <Header msg={this.state.msg} doClick={this.handleClick.bind(this)} />} />
          <Route path="/footer" component={Footer} />
          <Redirect from="*" to="header" />
        </Router>
      </div>
    )
  }
  handleClick(val){
    this.setState(state => {
      state.msg += 1;
      return state
    })
  }
}

export default App;
