import React from 'react';
import {connect} from 'react-redux';

export class ListApp extends React.Component {
  render () {

    return (
      <div>
        ListApp!!!!!
      </div>
    )
  }

};

export default connect(
  (state) => {
    return state;
  }
)(ListApp);
