const FETCH = 'scenarioList/FETCH';
const FETCH_SUCCESS = 'currentScenario/FETCH_SUCCESS';
const FETCH_FAIL = 'currentScenario/FETCH_FAIL';
const GO_TO_NEXT = 'currentScenario/GO_TO_NEXT';
const CHOOSE_CHOICE = 'currentScenario/CHOOSE_CHOICE';


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
        ...initialState,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        currentScenario: action.result,
        currentStep: action.result.steps[0],
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
        currentStep: state.currentScenario.steps[state.currentStep.goTo],
        isDone: !state.currentStep.goTo
      };
    case CHOOSE_CHOICE:
      return {
        ...state,
        doneWell: state.currentStep.choices[action.index].doneWell ? state.doneWell.concat([state.currentStep.choices[action.index].doneWell]) : state.doneWell,
        canImprove: state.currentStep.choices[action.index].canImprove ? state.canImprove.concat([state.currentStep.choices[action.index].canImprove]) : state.canImprove,
        currentStep: state.currentStep.choices[action.index].goTo ? state.currentScenario.steps[state.currentStep.choices[action.index].goTo] : null,
        isDone: !state.currentStep.choices[action.index].goTo
      };
    default:
      return state;
  }
}

export function getScenario(id) {
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
