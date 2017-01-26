import React, {Component, PropTypes} from 'react';
import { asyncConnect } from 'redux-async-connect';
import s from 'components/styles/index.scss';
import {getScenarios} from 'redux/modules/scenarioList.js';
import {connect} from 'react-redux';
import {Link} from 'react-router';

@asyncConnect([{
  promise: ({store: {dispatch}}) => {
    return dispatch(getScenarios());
  }
}])
@connect(state => ({
  scenarios: state.scenarioList.scenarios
}))
export default class Home extends Component {
  static propTypes = {
    scenarios: PropTypes.array

  }
  render() {
    return (
      <div className={s.container}>
        <h1 className={s.title + ' ' + s.textCenter}>Safe Steps</h1>
        <p className={s.lead + ' ' + s.textCenter}>Scenarios to demonstrate how to handle cases of domestic violence</p>
        <div className={s.row}>
          {this.props.scenarios.map((scenario) => {
            return (
              <div className={s.card + ' ' + s['six'] + ' ' + s['columns'] + ' ' + s['offset-by-three']} key={scenario._id}><Link to={'/scenarios/' + scenario._id}>{scenario.title}</Link></div>
            );
          })}
        </div>
      </div>
    );
  }

}
