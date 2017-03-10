import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import scenarioList from './scenarioList';
import currentScenario from './currentScenario';
import scenarioEditor from './scenarioEditor';
import safetyPlan from './safetyPlan';


export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  scenarioList,
  currentScenario,
  scenarioEditor,
  safetyPlan
});

