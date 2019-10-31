import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import LoginForm from './components/login/LoginForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/login' render={(props) => <LoginForm {...props} /> } />
      </Switch>
    </div>
  );
}

export default App;