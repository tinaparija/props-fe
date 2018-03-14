import React, { Component } from 'react';
import { Switch, Route, withRouter} from 'react-router-dom';

class Home extends Component {
  constructor(){
    super();
    this.state = {
    }
  }


  render() {
    return (
      <div>
      Hi
      </div>
    );
  }
}

export default withRouter(Home);
