import React from 'react';
import './App.css';
import SignIn from './components/LoginForms/SignIn';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import SignUp from './components/LoginForms/SignUp';
import Landing from './components/Landing';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Landing}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/signup' component={SignUp}/>
        </Router>
    </div>
  );
}

export default App;
