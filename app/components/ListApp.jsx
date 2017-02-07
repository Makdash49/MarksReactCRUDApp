import React from 'react';
import {connect} from 'react-redux';
import AddItem from 'AddItem';
import ItemList from 'ItemList'

export class ListApp extends React.Component {
  render () {

    return (
      <div>
        <div className="column small-centered small-11 medium-6 large-5">
          <div className="container">
            <AddItem/>
            <ItemList/>
          </div>
        </div>
      </div>
    )
  }
};

export default connect(
  (state) => {
    return state;
  }
)(ListApp);
