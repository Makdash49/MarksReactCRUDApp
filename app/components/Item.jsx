import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import * as actions from 'actions';

export class Item extends React.Component {

  handleDelete (e) {
    e.preventDefault();
    var {dispatch, id} = this.props;
    dispatch(actions.deleteItem(id));
  }

  render() {
    var {text, createdAt} = this.props;

    return (
      <div>
        <div className="item">
          <p>{text}</p>
          <button className="my-red-button float-right" onClick={this.handleDelete.bind(this)}>D</button>
        </div>
      </div>
    )
  }
};

export default connect()(Item)
