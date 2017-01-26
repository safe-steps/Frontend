const FETCH = 'scenarioList/FETCH';
const FETCH_SUCCESS = 'scenarioList/FETCH_SUCCESS';
const FETCH_FAIL = 'scenarioList/FETCH_FAIL';
const GO_TO_NEXT = 'scenarioList/GO_TO_NEXT';
const CHOOSE_CHOICE = 'scenarioList/CHOOSE_CHOICE';

import clone from 'lodash';

const initialState = {
  loading: false,
  currentScenario: null,
  currentStep: null,
  currentIndex: 0,
  doneWell: [],
  canImprove: [],
  isDone: false
};


export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        currentScenario: action.result,
        currentStep: state.steps[0],
        currentIndex: 0
      };
    case FETCH_FAIL:
      return {
        ...state,
        loading: false
      };
    case GO_TO_NEXT:
      return {
        ...state,
        currentStep: state.steps[state.currentStep.next]
      }
    case CHOOSE_CHOICE:
      return {
        ...state,
        doneWell: state.currentStep.choices[action.index].doneWell ? state.doneWell.concat([state.currentStep.choices[action.index].doneWell]) : state.doneWell,
        canImprove: state.currentStep.choices[action.index].canImprove ? state.canImprove.concat([state.currentStep.choices[action.index].canImprove]) : state.canImprove,
        currentStep: state.currentStep.choices[action.index].goTo ? state.canImprove.concat([state.currentStep.choices[action.index].goTo]) : null,
        isDone: state.currentStep.choices[action.index].goTo ? false : true
      }
    default:
      return state;
  }
}

export function getScenarios(id) {
  return {
    types: [FETCH, FETCH_SUCCESS, FETCH_FAIL],
    promise: (client) => client.get('/scenario/' + id),
    id
  };
}

export function goToNext() {
  return {
    type: GO_TO_NEXT
  };
}

export function chooseChoice(index) {
  return {
    type: CHOOSE_CHOICE,
    index
  };
}