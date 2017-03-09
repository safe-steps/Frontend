import React, {Component, PropTypes} from 'react';
import s from 'components/styles/index.scss';
import {connect} from 'react-redux';
import {updateStep, add, remove, duplicate, move, selectStep, updateTitle, updateDescription} from 'redux/modules/scenarioEditor.js';

@connect(state => ({
  ...state.scenarioEditor
}), {updateStep, add, remove, duplicate, move, selectStep, updateTitle, updateDescription})
export default class ScenarioEditorPage extends Component {
  static propTypes = {
    selectedStep: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    steps: PropTypes.array,
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
    updateStep: PropTypes.func,
    add: PropTypes.func,
    remove: PropTypes.func,
    duplicate: PropTypes.func,
    move: PropTypes.func,
    selectStep: PropTypes.func,
    updateTitle: PropTypes.func,
    updateDescription: PropTypes.func
  }
  dialogChanged = (e) => {
    if (e.target.name === 'speaker_input') {
      this.props.updateStep(this.props.selectedStep, {
        ...this.props.steps[this.props.selectedStep],
        speaker: e.target.value
      });
    }else if (e.target.name === 'text_input') {
      this.props.updateStep(this.props.selectedStep, {
        ...this.props.steps[this.props.selectedStep],
        text: e.target.value
      });
    }
    this.forceUpdate();
  }
  choiceChanged = (e, index) => {
    if (e.target.name === 'response_input') {
      this.props.steps[this.props.selectedStep].choices[index].text = e.target.value;
      this.props.updateStep(this.props.selectedStep, this.props.steps[this.props.selectedStep]);
    }else if (e.target.name === 'go_to_input') {
      this.props.steps[this.props.selectedStep].choices[index].goTo = e.target.value;
      this.props.updateStep(this.props.selectedStep, this.props.steps[this.props.selectedStep]);
    }else if (e.target.name === 'improve_input') {
      this.props.steps[this.props.selectedStep].choices[index].toImprove = e.target.value;
      this.props.updateStep(this.props.selectedStep, this.props.steps[this.props.selectedStep]);
    }else if (e.target.name === 'done_input') {
      this.props.steps[this.props.selectedStep].choices[index].doneWell = e.target.value;
      this.props.updateStep(this.props.selectedStep, this.props.steps[this.props.selectedStep]);
    }
    this.forceUpdate();
  }
  deleteOption = (index) => {
    this.props.steps[this.props.selectedStep].choices.splice(index, 1);
    this.props.updateStep(this.props.selectedStep, this.props.steps[this.props.selectedStep]);
    this.forceUpdate();
  }
  addOption = () => {
    this.props.steps[this.props.selectedStep].choices.push({
      text: '',
      toImprove: '',
      doneWell: ''
    });
    this.props.updateStep(this.props.selectedStep, this.props.steps[this.props.selectedStep]);
    this.forceUpdate();
  }
  titleChanged = (e) => {
    this.props.updateTitle(e.target.value);
  }
  descriptionChanged = (e) => {
    this.props.updateDescription(e.target.value);
  }
  render() {
    const curStep = this.props.steps[this.props.selectedStep];
    const curStepIndex = this.props.selectedStep;
    return (
      <div><div>
        <div><label htmlFor="title_input">Scenario Title: </label> <input type="text" id="title_input" name="title_input" value={this.props.title} onChange={(e) => this.titleChanged(e)}/></div>
        <div><label htmlFor="description_input">Description: </label> <input type="text" id="description_input" name="description_input" value={this.props.description} onChange={(e) => this.descriptionChanged(e)}/></div>
      </div>
      <div className={s.row}>
        <div className={s.six + ' ' + s.columns + ' ' + s.card + ' ' + s.steps}>
          <div>
            <button className={s['button-primary']} type="button" onClick={() => {this.props.add(curStepIndex, 'dialog');}}>Add Dialog</button>
            <button className={s['button-primary']} type="button" onClick={() => {this.props.add(curStepIndex, 'choice');}}>Add Choice</button>
          </div>
          <ul>
            {this.props.steps.map((step, index) => {
              if (step.type === 'choice') {
                return (
                  <li key={index}>
                    <div className={s.title} onClick={() => {this.props.selectStep(index);}}>{index + 1}. User Choice</div>
                    <div onClick={() => {this.props.selectStep(index);}}>"{step.choices.map(choice => choice.text).join('", "')}"</div>
                    {(() => {
                      if (index === curStepIndex) {
                        return (
                          <div>
                            <button type="button" onClick={() => this.props.move(index, 'up')}>Move Up</button>
                            <button type="button" onClick={() => this.props.move(index, 'down')}>Move Down</button>
                            <button type="button" onClick={() => this.props.duplicate(index)}>Duplicate</button>
                            <button type="button" onClick={() => {this.props.remove(index); this.forceUpdate();}}>Delete</button>
                          </div>
                        );
                      }
                    })()}
                  </li>
                );
              }
              return (
                <li key={index}>
                  <div className={s.title} onClick={() => {this.props.selectStep(index);}}>{index + 1}. Dialog ({step.speaker})</div>
                  <div onClick={() => {this.props.selectStep(index);}}>"{step.text}"</div>
                  {(() => {
                    if (index === curStepIndex) {
                      return (
                        <div>
                          <button type="button" onClick={() => this.props.move(index, 'up')}>Move Up</button>
                          <button type="button" onClick={() => this.props.move(index, 'down')}>Move Down</button>
                          <button type="button" onClick={() => this.props.duplicate(index)}>Duplicate</button>
                          <button type="button" onClick={() => {this.props.remove(index); this.forceUpdate();}}>Delete</button>
                        </div>
                      );
                    }
                  })()}
                </li>
              );
            })}
          </ul>
        </div>
        {(() => {
          if (curStep.type === 'dialog') {
            return (
              <div className={s.six + ' ' + s.columns + ' ' + s.card + ' ' + s.textCenter}>
                <div>{curStepIndex + 1}. Dialog</div>
                <div><label htmlFor="speaker_input">Speaker:</label> <input type="text" id="speaker_input" name="speaker_input" value={curStep.speaker} onChange={(e) => this.dialogChanged(e)}/></div>
                <div><label htmlFor="text_input">Text:</label> <input type="text" id="text_input" name="text_input" value={curStep.text} onChange={(e) => this.dialogChanged(e)}/></div>
              </div>
            );
          }
          return (
            <div className={s.six + ' ' + s.columns + ' ' + s.card + ' ' + s.textCenter}>
              <div>{curStepIndex}. Choice</div>
              <ul>
                {curStep.choices.map((choice, index) => {
                  return (
                    <li key={curStepIndex + index}>
                      <div>Option {index + 1}</div>
                      <button type="button" onClick={() => this.deleteOption(index)}>Delete</button>
                      <div><label htmlFor="response_input">Response Text:</label> <input type="text" id="response_input" name="response_input" value={choice.text} onChange={(e) => this.choiceChanged(e, index)}/></div>
                      <div><label htmlFor="go_to_input">Go to this card:</label>
                        <select id="go_to_input" name="go_to_input" value={choice.goTo} onChange={(e) => this.choiceChanged(e, index)}>
                          {this.props.steps.map((step, _index) => {
                            if (step.type === 'dialog') {
                              return (
                                <option key={index + _index} value={_index}>{_index + 1}. {step.type} ({step.speaker})</option>
                              );
                            }
                            return (
                              <option key={index + _index} value={_index}>{_index + 1}. {step.type}</option>
                            );
                          })}
                        </select>
                      </div>
                      <div><label htmlFor="improve_input">To Improve Text:</label> <input type="text" id="improve_input" name="improve_input" value={choice.canImprove} onChange={(e) => this.choiceChanged(e, index)}/></div>
                      <div><label htmlFor="done_input">Done Well Text:</label> <input type="text" id="done_input" name="done_input" value={choice.doneWell} onChange={(e) => this.choiceChanged(e, index)}/></div>
                    </li>
                  );
                })}
              </ul>
              <button className={s['button-primary']} type="button" onClick={() => this.addOption()}>Add Option</button>
            </div>
          );
        })()}
      </div></div>
    );
  }
}
