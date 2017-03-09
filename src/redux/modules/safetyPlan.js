const UPDATE_PLAN = 'scenarioEditor/UPDATE_STEP';


// import clone from 'lodash';

const initialState = {
  escapeRoutes: '',
  itemsToCollect: '',
  locationsAndContacts: '',
  argumentLocations: '',
  codeword: ''
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_PLAN:
      return action.obj;
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
