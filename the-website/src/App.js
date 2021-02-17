import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Music from './components/pages/Music';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/music' exact component={Music} />
          <Route path='/about' exact component={About} />
          <Route path='/sign-up' exact component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
