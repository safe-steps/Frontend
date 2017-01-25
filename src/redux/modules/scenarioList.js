const FETCH = 'scenarioList/FETCH';
const FETCH_SUCCESS = 'scenarioList/FETCH_SUCCESS';
const FETCH_FAIL = 'scenarioList/FETCH_FAIL';

const initialState = {
  scenarios: [],
  loading: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        loading: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        scenarios: action.result
      };
    case FETCH_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

export function getScenarios() {
  return {
    types: [FETCH, FETCH_SUCCESS, FETCH_FAIL],
    promise: (client) => client.get('/scenario')
  };
}
