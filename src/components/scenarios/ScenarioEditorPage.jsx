import React, {Component, PropTypes} from 'react';
import s from 'components/styles/index.scss';
import {connect} from 'react-redux';
import {updateStep, add, remove, duplicate, move, selectStep, updateTitle, updateDescription, submitScenario} from 'redux/modules/scenarioEditor.js';
import {Link} from 'react-router';

@connect(state => ({
  ...state.scenarioEditor
}), {updateStep, add, remove, duplicate, move, selectStep, updateTitle, updateDescription, submitScenario})
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
    updateDescription: PropTypes.func,
    submitScenario: PropTypes.func
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
    }else if (e.target.name === 'go_to_input') {
      this.props.updateStep(this.props.selectedStep, {
        ...this.props.steps[this.props.selectedStep],
        goTo: e.target.value
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
      <div><div className={s.titlebar + ' ' + s.row}>
        <div className={s.two + ' ' + s.columns}><label htmlFor="title_input">Scenario Title</label> <input type="text" id="title_input" name="title_input" value={this.props.title} onChange={(e) => this.titleChanged(e)}/></div>
        <div className={s.four + ' ' + s.columns}><label htmlFor="description_input">Description</label> <input type="text" id="description_input" name="description_input" value={this.props.description} onChange={(e) => this.descriptionChanged(e)}/></div>
        <Link to={'/'} className={s.button} onClick={() => {
          this.props.submitScenario({
            title: this.props.title,
            description: this.props.description,
            steps: this.props.steps
          });
        }}>Submit Scenario</Link>
        <Link to={'/'} className={s.button}>Back to Home</Link>
      </div>
      <div className={s.row}>
        <div className={s.steps}>
          <div className={s.card + ' ' + s.row}>
            <button className={s.button + ' ' + s.six + ' ' + s.columns} type="button" onClick={() => {this.props.add(curStepIndex, 'dialog');}}>Add Dialog</button>
            <button className={s.button + ' ' + s.six + ' ' + s.columns} type="button" onClick={() => {this.props.add(curStepIndex, 'choice');}}>Add Choice</button>
          </div>
          <ul>
            {this.props.steps.map((step, index) => {
              if (step.type === 'choice') {
                return (
                  <li className={s.card} key={index}>
                    <div className={s.title} onClick={() => {this.props.selectStep(index);}}>Step {index + 1}. User Choice</div>
                    <div onClick={() => {this.props.selectStep(index);}}>"{step.choices.map(choice => choice.text).join('", "')}"</div>
                    {(() => {
                      if (index === curStepIndex) {
                        return (
                          <div>
                            <a href="#" onClick={() => this.props.move(index, 'up')}>Move Up</a> • <a href="#" onClick={() => this.props.move(index, 'down')}>Move Down</a> • <a href="#" onClick={() => this.props.duplicate(index)}>Duplicate</a> • <a href="#" onClick={() => {this.props.remove(index); this.forceUpdate();}}>Delete</a>
                          </div>
                        );
                      }
                    })()}
                  </li>
                );
              }
              return (
                <li className={s.card} key={index}>
                  <div className={s.title} onClick={() => {this.props.selectStep(index);}}>Step {index + 1}. Dialog ({step.speaker})</div>
                  <div onClick={() => {this.props.selectStep(index);}}>"{step.text}"</div>
                  {(() => {
                    if (index === curStepIndex) {
                      return (
                        <div>
                          <a href="#" onClick={() => this.props.move(index, 'up')}>Move Up</a> • <a href="#" onClick={() => this.props.move(index, 'down')}>Move Down</a> • <a href="#" onClick={() => this.props.duplicate(index)}>Duplicate</a> • <a href="#" onClick={() => {this.props.remove(index); this.forceUpdate();}}>Delete</a>
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
              <div className={s.editor}>
                <h3 className={s.title}>Step {curStepIndex + 1}. Dialog</h3>
                <div><label htmlFor="speaker_input">Speaker:</label> <input type="text" id="speaker_input" name="speaker_input" value={curStep.speaker} onChange={(e) => this.dialogChanged(e)}/></div>
                <div><label htmlFor="text_input">Text:</label> <input type="text" id="text_input" name="text_input" value={curStep.text} onChange={(e) => this.dialogChanged(e)}/></div>
                <div><label htmlFor="go_to_input">Go to this card:</label>
                  <select id="go_to_input" name="go_to_input" value={curStep.goTo} onChange={(e) => this.dialogChanged(e)}>
                    {this.props.steps.map((step, _index) => {
                      if (_index === 0) {
                        return (
                          <option key={_index} value={_index}>Finish Scenario</option>
                        );
                      }if (step.type === 'dialog') {
                        return (
                          <option key={_index} value={_index}>Step {_index + 1}. {step.type} ({step.speaker})</option>
                        );
                      }
                      return (
                        <option key={_index} value={_index}>Step {_index + 1}. {step.type}</option>
                      );
                    })}
                  </select>
                </div>
              </div>
            );
          }
          return (
            <div className={s.editor}>
              <h3 className={s.title}>Step {curStepIndex}. Choice</h3>
              <ul>
                {curStep.choices.map((choice, index) => {
                  return (
                    <li key={curStepIndex + index}>
                      <div className={s.title}>
                        <h5>Option {index + 1}</h5>
                      </div>
                      <div className={s.row}>
                        <div className={s.six + ' ' + s.columns}><label htmlFor="response_input">Response Text:</label> <input type="text" id="response_input" name="response_input" value={choice.text} onChange={(e) => this.choiceChanged(e, index)}/></div>
                        <div className={s.six + ' ' + s.columns}><label htmlFor="go_to_input">Go to this card:</label>
                          <select id="go_to_input" name="go_to_input" value={choice.goTo} onChange={(e) => this.choiceChanged(e, index)}>
                            {this.props.steps.map((step, _index) => {
                              if (step.type === 'dialog') {
                                return (
                                  <option key={index + _index} value={_index}>Step {_index + 1}. {step.type} ({step.speaker})</option>
                                );
                              }
                              return (
                                <option key={index + _index} value={_index}>Step {_index + 1}. {step.type}</option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      <div className={s.row}>
                        <div className={s.six + ' ' + s.columns}><label htmlFor="improve_input">To Improve Text:</label> <input type="text" id="improve_input" name="improve_input" value={choice.canImprove} onChange={(e) => this.choiceChanged(e, index)}/></div>
                        <div className={s.six + ' ' + s.columns}><label htmlFor="done_input">Done Well Text:</label> <input type="text" id="done_input" name="done_input" value={choice.doneWell} onChange={(e) => this.choiceChanged(e, index)}/></div>
                      </div>
                      <a href="#" onClick={() => this.deleteOption(index)}>Delete Option</a>
                      <hr></hr>
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
