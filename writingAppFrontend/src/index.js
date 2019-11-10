import React from 'react';
import ReactDOM from 'react-dom';
import WriterSignup from './pages/WriterSignup.js';
import LandingPage from './pages/LandingPage.js';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
// import 'typeface-roboto';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

ReactDOM.render(
  
<BrowserRouter>
<Switch>
  <Route path="/writer" >
    <WriterSignup />
  </Route>
  <Route path="/">
    <LandingPage />
  </Route>

</Switch>
</BrowserRouter>,

  document.getElementById('root')
)
