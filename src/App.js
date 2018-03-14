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
       <Switch>
        <Route exact path='/' component={Home}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
