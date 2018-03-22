import React, { Component } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Home from './pages/home';

class App extends Component {
  constructor(){
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
      <div className ="row top-bar">
          <div className ="col col-md-1 offset-md-1">
            <a href="https://www.w3schools.com">Home</a>
          </div>
          <div className ="col col-md-1">
            <a href="https://www.w3schools.com">List</a>
          </div>
        </div>
       <Switch>
        <Route exact path='/' component={Home}/>} />
        </Switch>
      </div>

    );
  }
}

export default App;
