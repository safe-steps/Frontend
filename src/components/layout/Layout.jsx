import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';

// import s from '../styles/index.scss';

@asyncConnect([{
  promise: () => {
    const promises = [];

    return Promise.all(promises);
  }
}])
@connect(() => ({}), {})
export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
