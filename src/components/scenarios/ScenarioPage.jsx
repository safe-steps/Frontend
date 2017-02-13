import React, {Component, PropTypes} from 'react';
import { asyncConnect } from 'redux-async-connect';
import s from 'components/styles/index.scss';
import {connect} from 'react-redux';
import {goToNext, chooseChoice, getScenario} from 'redux/modules/currentScenario.js';
import {Link} from 'react-router';

@asyncConnect([{
  promise: ({store: {dispatch}, params: {id}}) => {
    return dispatch(getScenario(id));
  }
}])
@connect(state => ({
  ...state.currentScenario
}), {goToNext, chooseChoice, getScenario})
export default class ScenarioPage extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    isDone: PropTypes.bool,
    doneWell: PropTypes.array,
    canImprove: PropTypes.array,
    currentStep: PropTypes.shape({
      type: PropTypes.string,
      goTo: PropTypes.number,
      text: PropTypes.string,
      choices: PropTypes.array,
      speaker: PropTypes.string
    }),
    goToNext: PropTypes.func,
    chooseChoice: PropTypes.func
  }
  render() {
    if (this.props.loading) {
      return (
        <div className={s.container}>
          <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      );
    } else if (this.props.isDone) {
      return (
        <div className={s.container}>
          <h1 className={s.title + ' ' + s.textCenter}>Scenario Complete</h1>
          <h2 className={s.lead + ' ' + s.textCenter}>Results from this scenario</h2>
          <div className={s.row}>
            <div className={s.six + ' ' + s.columns + ' ' + s.card + ' ' + s.textCenter}>
              <p className={s.title + ' ' + s.lead}>Things you did well</p>
              <ul>
                {this.props.doneWell.map((statement) => {
                  return (
                    <li>{statement}</li>
                  );
                })}
              </ul>
            </div>
            <div className={s.six + ' ' + s.columns + ' ' + s.card + ' ' + s.textCenter}>
              <p className={s.title + ' ' + s.lead}>Things on which you can improve</p>
              <ul>
                {this.props.canImprove.map((statement) => {
                  return (
                    <li>{statement}</li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={s.choices}>
            <Link to={'/'} className={s.button + ' ' + s['button-primary']}>Back to Main Screen</Link>
          </div>
        </div>
      );
    } else if (!this.props.currentStep) {
      return (
        <div className={s.container}>

        </div>
      );
    } else if (this.props.currentStep.type === 'dialog') {
      return (
        <div className={s.container}>
          <img src="http://placehold.it/1024x600" className={s.scene}></img>
          <p className={s.title + ' ' + s.lead}>{this.props.currentStep.speaker}</p>
          <p>{this.props.currentStep.text}</p>
          <button type="button" onClick={this.props.goToNext}>Next</button>
        </div>
      );
    } else if (this.props.currentStep.type === 'choice') {
      return (
        <div className={s.container}>
          <img src="http://placehold.it/1024x600" className={s.scene}></img>
          <div className={s.choices}>
            {this.props.currentStep.choices.map((choice, index) => {
              return (
                <button type="button" className={s['button-primary']} onClick={() => this.props.chooseChoice(index)}>
                  {choice.text}
                </button>
              );
            })}
          </div>
        </div>
      );
    }
  }
}
