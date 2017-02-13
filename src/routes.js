import React from 'react';
import {IndexRoute, Route} from 'react-router';

import Layout from './components/layout/Layout.jsx';
import Home from './components/home/Home.jsx';
import ScenarioPage from './components/scenarios/ScenarioPage.jsx';
import ScenarioEditorPage from './components/scenarios/ScenarioEditorPage.jsx';

export default () => {
  return (
    <Route path="/" component={Layout}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      { /* Routes */ }
      <Route path="/scenarios/:id" component={ScenarioPage}/>
      <Route path="/scenarioeditor/:id" component={ScenarioEditorPage}/>

      { /* Catch all route */ }
      { /* <Route path="*" component={NotFound} status={404} /> */ }
    </Route>
  );
};
