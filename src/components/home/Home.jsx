import React, {Component, PropTypes} from 'react';
// import { asyncConnect } from 'redux-async-connect';
import s from 'components/styles/index.scss';
import {Link} from 'react-router';

export default class Home extends Component {
  static propTypes = {
    scenarios: PropTypes.array
  }
  render() {
    return (
      <div className={s.container}>
        <h1 className={s.title + ' ' + s.textCenter}>Safe Steps</h1>
        <div>Learning Page(Not Done Yet)</div>
        <div><Link to={'/scenariolist'}>Scenario List</Link></div>
        <div><Link to={'/safetyplan'}>Safety Plan Creation Tool</Link></div>
      </div>
    );
  }

}
