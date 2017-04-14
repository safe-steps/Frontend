import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import s from '../styles/index.scss';

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
        <header className={s.header}>
          <Link to="/"><img src="/images/Logo.png" /></Link>
        </header>
        {this.props.children}
      </div>
    );
  }
}
