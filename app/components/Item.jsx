import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import * as actions from 'actions';

export class Item extends React.Component {

  // handleDelete (e) {
  //   e.preventDefault();
  //   var {dispatch, id} = this.props;
  //   dispatch(actions.startDeleteTodo(id));
  // }

  render() {
    var {text, createdAt} = this.props;

    return (
      <div>
        <div className="item">
          <p>{text}</p>
        </div>
      </div>
    )
  }
};

export default connect()(Item)



// <button className="my-red-button float-right" onClick={this.handleDelete.bind(this)}>D</button>
