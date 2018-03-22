import React, { Component } from 'react';
import { Switch, Route, withRouter} from 'react-router-dom';
import TaskModal from '../components/taskModal'

class Home extends Component {
  constructor(){
    super();
    this.state = {
      clicked_category:''
    }
    this.modalProperties = this.modalProperties.bind(this);
  }

  modalProperties(e, category){
    e.preventDefault();
    this.setState({
      clicked_category: category
    })
  }

  render() {
    return (
      <div>
        <div className ="row bottom-bar">
          <div className = "col col-md-6 offset-md-3">
            <div className = "category learn" data-toggle="modal" data-target="#exampleModalCenter" onClick={(e) => this.modalProperties(e, "learn")}>
            <p className="cat-name">Learn</p>
            </div>
            <div className = "category create" data-toggle="modal" data-target="#exampleModalCenter" onClick={(e) => this.modalProperties(e, "create")}>
            <p className="cat-name">Create</p>
            </div>
          </div>
        </div>
        <div className ="row">
          <div className = "col col-md-6 offset-md-3">
            <div className = "category love" data-toggle="modal" data-target="#exampleModalCenter" onClick={(e) => this.modalProperties(e, "love")}>
            <p className="cat-name">Love</p>
            </div>
            <div className = "category rest" data-toggle="modal" data-target="#exampleModalCenter" onClick={(e) => this.modalProperties(e, "rest")}>
            <p className="cat-name">Rest</p>
            </div>
          </div>
        </div>
        <TaskModal category={this.state.clicked_category}/>
      </div>
    );
  }
}

export default withRouter(Home);
