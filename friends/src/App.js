import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import LoginForm from './components/login/LoginForm';
import ProtectedRoute from './components/auth/PrivateRoute';
import Friend from './components/friends/Friend';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/login' render={(props) => <LoginForm {...props} /> } />
        <ProtectedRoute exact path="/friends" component={Friend} />
      </Switch>
    </div>
  );
}

export default withRouter(App);