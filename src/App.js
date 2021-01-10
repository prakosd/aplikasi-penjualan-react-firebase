import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './pages/login';
import ForgetPassword from './pages/lupa-password';
import NotFound from './pages/not-found';
import Private from './pages/private';
import Registration from './pages/registrasi';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pengaturan" exact component={Private} />
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/forget-password" component={ForgetPassword} />
        <Route path="/not-found" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
