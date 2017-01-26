import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import scenarioList from './scenarioList';
import currentScenario from './currentScenario'

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  scenarioList,
  currentScenario
});

