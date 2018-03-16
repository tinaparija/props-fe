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
        <div className ="row top-bar">
          <div className ="col col-md-1">
            <a href="https://www.w3schools.com">Home</a>
          </div>
          <div className ="col col-md-1">
            <a href="https://www.w3schools.com">List</a>
          </div>
        </div>
        <div className ="row bottom-bar">
          <div className = "col col-md-6 offset-md-3">
            <div className = "category learn">
            <p className="cat-name">Learn</p>
            </div>
            <div className = "category create">
            <p className="cat-name">Create</p>
            </div>
          </div>
        </div>
        <div className ="row">
          <div className = "col col-md-6 offset-md-3">
            <div className = "category love">
            <p className="cat-name">Love</p>
            </div>
            <div className = "category rest">
            <p className="cat-name">Rest</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
