const UPDATE_PLAN = 'safetyPlan/UPDATE_PLAN';
const SUBMIT_PLAN = 'safetyPlan/SUBMIT_PLAN';
const SUBMIT_PLAN_SUCCESS = 'scenarioEditor/SUBMIT_PLAN_SUCCESS';
const SUBMIT_PLAN_FAIL = 'scenarioEditor/SUBMIT_PLAN_FAIL';

// import clone from 'lodash';

const initialState = {
  email: '',
  escapeRoutes: '',
  itemsToCollect: '',
  locationsAndContacts: '',
  argumentLocations: '',
  codeword: '',
  submitting: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_PLAN:
      return action.obj;
    case SUBMIT_PLAN:
      return {
        ...state,
        submitting: true
      };
    case SUBMIT_PLAN_SUCCESS:
      return {
        ...state,
        submitting: false
      };
    case SUBMIT_PLAN_FAIL:
      return {
        ...state,
        submitting: false
      };
    default:
      return state;
  }
}

export function updatePlan(obj) {
  return {
    type: UPDATE_PLAN,
    obj
  };
}

export function submitPlan(json) {
  console.log(json);
  return {
    types: [SUBMIT_PLAN, SUBMIT_PLAN_SUCCESS, SUBMIT_PLAN_FAIL],
    promise: (client) => client.post('/safetyplan', {
      data: json
    })
  };
}
