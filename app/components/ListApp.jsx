import React from 'react';
import {connect} from 'react-redux';
import AddItem from 'AddItem';
import ItemList from 'ItemList'

export class ListApp extends React.Component {
  render () {

    return (
      <div>
        ListApp!
        <AddItem/>
        <ItemList/>
      </div>
    )
  }
};

export default connect(
  (state) => {
    return state;
  }
)(ListApp);
