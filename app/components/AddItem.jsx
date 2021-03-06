import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';


export class AddItem extends React.Component {

  handleSubmit (e) {
    e.preventDefault();
    var {dispatch} = this.props

    var itemText = this.refs.itemText.value;

    if (itemText.length > 0) {
      this.refs.itemText.value = '';
      dispatch(actions.addItem(itemText));
    } else {
      this.refs.itemText.focus();
    }
  }

  render () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="itemText" placeholder="Add an item."/>
          <button className="button expanded">Add Item</button>
        </form>
      </div>
    );
  }
};

export default connect()(AddItem);
