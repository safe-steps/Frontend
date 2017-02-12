const ADD_STEP_TYPE = 'scenarioEditor/ADD_STEP_TYPE';
const DELETE_STEP = 'scenarioEditor/DELETE_STEP';
const DUPLICATE_STEP = 'scenarioEditor/DUPLICATE_STEP';
const MOVE_STEP = 'scenarioEditor/MOVE_STEP';
const UPDATE_STEP = 'scenarioEditor/UPDATE_STEP';
const SELECT_STEP = 'scenarioEditor/SELECT_STEP';


import clone from 'lodash';

const initialState = {
  selectedStep: 0,
  title: '',
  description: '',
  steps: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_STEP_TYPE:
      newState = clone(state);
      if (stepType === 'dialog') {
        newState.steps.splice(action.index + 1, 0, {
          type: 'dialog',
          speaker: 'narrator',
          text: ''
        });
      }
      if (stepType === 'choice') {
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
          step.goTo++
        } else if (step.type === 'choice'){
          step.choices.forEach((choice) => {
            if (choice.goTo > action.index) {
              choice.goTo++
            }
          })
        }
      })
      return newState;
    case DELETE_STEP:
      newState = clone(state);
      state.steps.splice(action.index, 1);
      newState.steps.forEach((step) => {
        if (step.type === 'dialog' && step.goTo > action.index) {
          step.goTo--
        } else if (step.type === 'choice'){
          step.choices.forEach((choice) => {
            if (choice.goTo > action.index) {
              choice.goTo--
            }
          })
        }
      })
      return newState
    case DUPLICATE_STEP:
      newState = clone(state);
      newState.steps.splice(action.index + 1, 0, {
        ...newState.steps[action.index]
      });
      newState.steps.forEach((step) => {
        if (step.type === 'dialog' && step.goTo > action.index) {
          step.goTo++
        } else if (step.type === 'choice'){
          step.choices.forEach((choice) => {
            if (choice.goTo > action.index) {
              choice.goTo++
            }
          })
        }
      })
      return newState;
    case MOVE_STEP:
      newState = clone(state);
      if (upDown === 'up') {
        let temp = newState.steps[action.index]
        newState.steps[action.index] = newState.steps[action.index - 1]
        newState.steps[action.index - 1] = temp
        newState.steps.forEach((step) => {
        if (step.type === 'dialog' && step.goTo === action.index) {
          step.goTo--
        } else if (step.type === 'dialog' && step.goTo === action.index - 1) {
          step.goTo++
        } else if (step.type === 'choice'){
          step.choices.forEach((choice) => {
            if (choice.goTo === action.index) {
              choice.goTo--
            } else if (choice.goTo === action.index - 1) {
              choice.goTo++
            }
          })
        } 
      }
      if (upDown === 'down') {
        let temp = newState.steps[action.index]
        newState.steps[action.index] = newState.steps[action.index + 1]
        newState.steps[action.index + 1] = temp
        newState.steps.forEach((step) => {
        if (step.type === 'dialog' && step.goTo === action.index) {
          step.goTo++
        } else if (step.type === 'dialog' && step.goTo === action.index + 1) {
          step.goTo--
        } else if (step.type === 'choice'){
          step.choices.forEach((choice) => {
            if (choice.goTo === action.index) {
              choice.goTo++
            } else if (choice.goTo === action.index + 1) {
              choice.goTo--
            }
          })
        } 
      }
      return newState;
    case UPDATE_STEP:
      newState = clone(state);
      newState.steps[action.index] = action.obj
      return newState
    case SELECT_STEP:
      newState = clone(state);
      newState.selectedStep = action.index
      return newState
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

export function delete(index) {
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




