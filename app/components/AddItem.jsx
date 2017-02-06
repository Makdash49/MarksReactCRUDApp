import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';


export class AddItem extends React.Component {

  handleSubmit (e) {
    e.preventDefault();
    var {dispatch} = this.props

    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  }

  render () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="todoText" placeholder="Add an item."/>
          <button className="button expanded">Add Item</button>
        </form>
      </div>
    );
  }
};

export default connect()(AddItem);
