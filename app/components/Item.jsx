import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import * as actions from 'actions';

export class Item extends React.Component {
  render() {
    var {text, createdAt} = this.props;
    
    return (
      <div>
        <p>{text}</p>
        <p>{createdAt}</p>
      </div>
    )
  }
};

export default connect()(Item)
