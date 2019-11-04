import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PrivateRoute from './components/auth/PrivateRoute';
import NavBar from './components/navigation/NavBar';
import LoginForm from './components/login/LoginForm';
import FriendForm from './components/friends/FriendForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/login' render={(props) => <LoginForm {...props} /> } />
        <PrivateRoute path='/friends' component={FriendForm} />
      </Switch>
    </div>
  );
}

export default withRouter(App);