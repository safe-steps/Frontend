const ADD_STEP_TYPE = 'scenarioEditor/ADD_STEP_TYPE';
const DELETE_STEP = 'scenarioEditor/DELETE_STEP';
const DUPLICATE_STEP = 'scenarioEditor/DUPLICATE_STEP';
const MOVE_STEP = 'scenarioEditor/MOVE_STEP';
const UPDATE_STEP = 'scenarioEditor/UPDATE_STEP';
const SELECT_STEP = 'scenarioEditor/SELECT_STEP';


import clone from 'lodash';

const initialState = {
  selectedStep: 0,
  title: 'Test Scenario',
  description: 'This Scenario is only for testing',
  steps: [
    {// 0
      type: 'dialog',
      speaker: 'narrator',
      goTo: 1,
      text: 'Welcome to the Test Scenario! Please press next.'
    },
    {// 1
      type: 'dialog',
      speaker: 'doctor',
      goTo: 2,
      text: 'Question'
    },
    {// 2
      type: 'choice',
      choices: [
        {
          text: 'yes',
          goTo: 3,
          doneWell: 'Very Good',
          canImprove: null
        },
        {
          text: 'no',
          goTo: 4,
          doneWell: null,
          canImprove: 'Not correct'
        }
      ]
    },
    {// 3
      type: 'dialog',
      speaker: 'doctor',
      goTo: 5,
      text: 'How are you?'
    },
    {// 4
      type: 'dialog',
      speaker: 'doctor',
      goTo: 6,
      text: 'Where are you from?'
    },
    {// 5
      type: 'choice',
      choices: [
        {
          text: 'Great!',
          goTo: 7,
          doneWell: null,
          canImprove: 'No further explaination?'
        },
        {
          text: 'Not doing to well.',
          goTo: 7,
          doneWell: 'Honest',
          canImprove: null
        }
      ]
    },
    {// 6
      type: 'choice',
      choices: [
        {
          text: 'Atlanta',
          goTo: 7,
          doneWell: 'Love me some ATL',
          canImprove: null
        },
        {
          text: 'Nashvegas',
          goTo: 7,
          doneWell: null,
          canImprove: 'But you are in ATL now?'
        }
      ]
    },
    {// 7
      type: 'dialog',
      speaker: 'narrator',
      goTo: null,
      text: 'Thank you for completing the Test Scenario!'
    }
  ]
};

export default function reducer(state = initialState, action = {}) {
  let newState;
  switch (action.type) {
    case ADD_STEP_TYPE:
      newState = clone(state).__wrapped__;
      newState.selectedStep = action.index + 1;
      if (action.stepType === 'dialog') {
        newState.steps.splice(action.index + 1, 0, {
          type: 'dialog',
          speaker: 'narrator',
          text: ''
        });
      }
      if (action.stepType === 'choice') {
        newState.steps.splice(action.index + 1, 0, {
          type: 'choice',
          choices: [{
            text: '',
            canImprove: '',
            doneWell: ''
          }]
        });
      }
      newState.steps.forEach((step) => {
        if (step.type === 'dialog' && step.goTo > action.index) {
          step.goTo++;
        } else if (step.type === 'choice') {
          step.choices.forEach((choice) => {
            if (choice.goTo > action.index) {
              choice.goTo++;
            }
          });
        }
      });
      return {
        ...state,
        selectedStep: newState.selectedStep,
        steps: newState.steps
      };
    case DELETE_STEP:
      newState = clone(state).__wrapped__;
      newState.steps.splice(action.index, 1);
      newState.steps.forEach((step) => {
        if (step.type === 'dialog' && step.goTo > action.index) {
          step.goTo--;
        } else if (step.type === 'choice') {
          step.choices.forEach((choice) => {
            if (choice.goTo > action.index) {
              choice.goTo--;
            }
          });
        }
      });
      return {
        ...state,
        steps: newState.steps
      };
    case DUPLICATE_STEP:
      newState = clone(state).__wrapped__;
      newState.selectedStep = action.index + 1;
      newState.steps.splice(action.index + 1, 0, {
        ...newState.steps[action.index]
      });
      newState.steps.forEach((step) => {
        if (step.type === 'dialog' && step.goTo > action.index) {
          step.goTo++;
        } else if (step.type === 'choice') {
          step.choices.forEach((choice) => {
            if (choice.goTo > action.index) {
              choice.goTo++;
            }
          });
        }
      });
      return {
        ...state,
        selectedStep: newState.selectedStep,
        steps: newState.steps
      };
    case MOVE_STEP:
      newState = clone(state).__wrapped__;
      if (action.upDown === 'up') {
        newState.selectedStep = action.index - 1;
        const temp = newState.steps[action.index];
        newState.steps[action.index] = newState.steps[action.index - 1];
        newState.steps[action.index - 1] = temp;
        newState.steps.forEach((step) => {
          if (step.type === 'dialog' && step.goTo === action.index) {
            step.goTo--;
          } else if (step.type === 'dialog' && step.goTo === action.index - 1) {
            step.goTo++;
          } else if (step.type === 'choice') {
            step.choices.forEach((choice) => {
              if (choice.goTo === action.index) {
                choice.goTo--;
              } else if (choice.goTo === action.index - 1) {
                choice.goTo++;
              }
            });
          }
        });
      }
      if (action.upDown === 'down') {
        const temp = newState.steps[action.index];
        newState.selectedStep = action.index + 1;
        newState.steps[action.index] = newState.steps[action.index + 1];
        newState.steps[action.index + 1] = temp;
        newState.steps.forEach((step) => {
          if (step.type === 'dialog' && step.goTo === action.index) {
            step.goTo++;
          } else if (step.type === 'dialog' && step.goTo === action.index + 1) {
            step.goTo--;
          } else if (step.type === 'choice') {
            step.choices.forEach((choice) => {
              if (choice.goTo === action.index) {
                choice.goTo++;
              } else if (choice.goTo === action.index + 1) {
                choice.goTo--;
              }
            });
          }
        });
      }
      return {
        ...state,
        selectedStep: newState.selectedStep,
        steps: newState.steps
      };
    case UPDATE_STEP:
      newState = clone(state).__wrapped__;
      newState.steps[action.index] = action.obj;
      return {
        ...state,
        steps: newState.steps
      };
    case SELECT_STEP:
      return {
        ...state,
        selectedStep: action.index
      };
    default:
      return state;
  }
}

export function add(index, stepType) {
  return {
    type: ADD_STEP_TYPE,
    index,
    stepType
  };
}

export function remove(index) {
  return {
    type: DELETE_STEP,
    index
  };
}

export function duplicate(index) {
  return {
    type: DUPLICATE_STEP,
    index
  };
}

export function move(index, upDown) {
  return {
    type: MOVE_STEP,
    index,
    upDown
  };
}

export function updateStep(index, obj) {
  return {
    type: UPDATE_STEP,
    index,
    obj
  };
}

export function selectStep(index) {
  return {
    type: SELECT_STEP,
    index
  };
}
