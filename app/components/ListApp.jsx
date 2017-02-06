import React from 'react';
import {connect} from 'react-redux';
import AddItem from 'AddItem';

export class ListApp extends React.Component {
  render () {

    return (
      <div>
        ListApp!
        <AddItem/>
      </div>
    )
  }
};

export default connect(
  (state) => {
    return state;
  }
)(ListApp);
