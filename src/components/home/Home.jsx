import React, {Component, PropTypes} from 'react';
// import { asyncConnect } from 'redux-async-connect';
import s from 'components/styles/index.scss';
import {browserHistory} from 'react-router';

export default class Home extends Component {
  static propTypes = {
    scenarios: PropTypes.array
  }
  render() {
    return (
      <div className={s.home}>
        <div className={s.homeSubject + ' ' + s.odd}>
          <div className={s.homeSubjectText}>
            <h2>Learn</h2>
            <p>Learn about how to work with potential victims of domestic violence in your workplace.</p>
            <button className={s['button-primary']} onClick={() => browserHistory.push('/training')}>Go Learn</button>
          </div>
          <img src="/images/Train.jpg" className={s.homeSubjectImage} />
        </div>
        <div className={s.homeSubject + ' ' + s.even}>
          <div className={s.homeSubjectText}>
            <h2>Practice</h2>
            <p>Practice your skills with scenarios that simulate how an actual encounter may play out.</p>
            <button className={s['button-primary']} onClick={() => browserHistory.push('/scenariolist')}>Go Practice</button>
          </div>
          <img src="/images/Scenario.png" className={s.homeSubjectImage} />
        </div>
        <div className={s.homeSubject + ' ' + s.odd}>
          <div className={s.homeSubjectText}>
            <h2>Help</h2>
            <p>Help your patients by creating a safety plan that they can use in unpredictable situations.</p>
            <button className={s['button-primary']} onClick={() => browserHistory.push('/safetyplan')}>Go Help</button>
          </div>
          <img src="/images/Safety.jpg" className={s.homeSubjectImage} />
        </div>
      </div>
    );
  }

}
