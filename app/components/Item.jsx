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

  handleEdit (e) {
    e.preventDefault();
    var {dispatch, id} = this.props;
    dispatch(actions.toggleEditable(id));
  }

  handleSubmit (e) {
    e.preventDefault();
    var {dispatch, id} = this.props

    var itemText = this.refs.itemText.value;

    if (itemText.length > 0) {
      dispatch(actions.editText(id, itemText));
      dispatch(actions.toggleEditable(id));
    } else {
      this.refs.itemText.focus();
    }
  }

  render() {
    var {text, createdAt, editable} = this.props;

    var myComponent = () => {
      if (editable) {
        return (
          <div className="item">

            <form onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" ref="itemText" defaultValue={text}/>
            </form>

            <button className="my-red-button float-right" onClick={this.handleDelete.bind(this)}>D</button>
            <button className="my-green-button float-right" onClick={this.handleEdit.bind(this)}>E</button>
          </div>
        )
      } else {
        return (
            <div className="item">
              <p>{text}</p>
              <button className="my-red-button float-right" onClick={this.handleDelete.bind(this)}>D</button>
              <button className="my-green-button float-right" onClick={this.handleEdit.bind(this)}>E</button>
            </div>
        )
      }
    }

    return (
      <div>
        {myComponent()}
      </div>
    )
  }
};

export default connect()(Item)
