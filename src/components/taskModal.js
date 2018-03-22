import React, { Component } from 'react';
import { Switch, Route, withRouter} from 'react-router-dom';

class TaskModal extends Component {
  constructor(){
    super();
    this.state = {
    }
  }

render() {
  return (
    <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Note it down</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form>
          <div className="form-group">
            <label htmlFor="taskName" class="col-form-label">How did you {this.props.category}?</label>
            <input className="form-control" id="taskName"></input>
          </div>
        </form>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default withRouter(TaskModal);
