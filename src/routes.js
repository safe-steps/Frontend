import React from 'react';
import {IndexRoute, Route} from 'react-router';

import Layout from './components/layout/Layout.jsx';
import Home from './components/home/Home.jsx';

export default () => {
  return (
    <Route path="/" component={Layout}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      { /* Routes */ }


      { /* Catch all route */ }
      { /* <Route path="*" component={NotFound} status={404} /> */ }
    </Route>
  );
};
