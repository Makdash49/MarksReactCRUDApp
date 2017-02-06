import React from 'react';
import {connect} from 'react-redux';
// import Todo from 'Todo';

export class ItemList extends React.Component {
  render () {
    var {items} = this.props;
    console.log('ITEMS:', items);

    var renderItems = () => {

    };

    return (
      <div>
        {renderItems()}
      </div>
    )
  }

};

export default connect(
  (state) => {
    return state;
  }
)(ItemList);
