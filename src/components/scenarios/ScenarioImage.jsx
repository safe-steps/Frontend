import React, {Component, PropTypes} from 'react';
import s from 'components/styles/index.scss';

export default class ScenarioPage extends Component {
  static propTypes = {
    location: PropTypes.string,
    person: PropTypes.string,
  }
  render() {
    return (
      <div className={s.scenarioImage}>
        <img className={s.location} src={'/images/locations/' + this.props.location} />
        <img className={s.person} src={'/images/people/' + this.props.person} />
      </div>
    );
  }
}
