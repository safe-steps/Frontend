import React, {Component, PropTypes} from 'react';
import { asyncConnect } from 'redux-async-connect';
import {connect} from 'react-redux';
import {goToNext, chooseChoice, getScenario} from 'redux/modules/currentScenario.js'

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
      choices: PropTypes.array
    }),
    goToNext: PropTypes.func,
    chooseChoice: PropTypes.func
  }
  render() {
    if (this.props.loading) {
      return (
        <div>
          <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      );
    } else if (this.props.isDone) {
      return (
        <div>
          <h2>Things you did well</h2>
          <ul>
            {this.props.doneWell.map((statement) => {
              return (
                <li>{statement}</li>
              );
            })}
          </ul>
          <h2>Things on which you can improve</h2>
          <ul>
            {this.props.canImprove.map((statement) => {
              return (
                <li>{statement}</li>
              );
            })}
          </ul>
        </div>
      );
    } else if (!this.props.currentStep) {
      console.log('hello');
      return (
        <div></div>
      )
    } else if (this.props.currentStep.type === 'narrator' || this.props.currentStep.type === 'dialog') {
      return (
        <div>
          {this.props.currentStep.text}
          <button type="button" onClick={this.props.goToNext}>Next</button>
        </div>
      );
    } else if (this.props.currentStep.type === 'choice') {
      return (
        <div>
          <ul>
            {this.props.currentStep.choices.map((choice, index) => {
              return (
                <li onClick={() => this.props.chooseChoice(index)}>{choice.text}</li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
}
