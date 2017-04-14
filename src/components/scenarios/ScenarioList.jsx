import React, {Component, PropTypes} from 'react';
import { asyncConnect } from 'redux-async-connect';
import s from 'components/styles/index.scss';
import {getScenarios} from 'redux/modules/scenarioList.js';
import {connect} from 'react-redux';
import {Link, browserHistory} from 'react-router';

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
        <h2 className={s.lead + ' ' + s.textCenter}>Scenarios to demonstrate how to handle cases of domestic violence</h2>
        <button className={s['button-primary']} onClick={() => browserHistory.push('/scenarioeditor')}>Submit a New Scenario</button>
        {this.props.scenarios.map((scenario) => {
          return (
            <div className={s.row + ' ' + s.card} key={scenario._id}>
              <div className={s.four + ' ' + s.columns}>
                <Link to={'/scenarios/' + scenario._id}><img className={s.listImg} src="http://placehold.it/350x200"></img></Link>
              </div>
              <div className={s.eight + ' ' + s.columns}>
                <p className={s.title + ' ' + s.lead}>{scenario.title}</p>
                <p>Scenario description describing what will be simulated.</p>
                <Link to={'/scenarios/' + scenario._id}>Enter Scenario →</Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

}
