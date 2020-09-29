import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe';
import Resume from './components/pages/Resume';
import ContactMe from './components/pages/ContactMe';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/AboutMe' component={AboutMe} />
          <Route path='/Resume' component={Resume} />
          <Route path='/ContactMe' component={ContactMe} />
          <Route path='/Skills' component={Skills} />
        </Switch>
      </Router>
    </>
  );
}

export default App;