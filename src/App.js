import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Top from './Components/Top';
import About from './Components/About';
import Credit from './Components/Credit';
import Login from './Auth/Login';
import Logout from './Auth/Logout';

const App = () => (
  <div>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={ Top } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/credit" component={ Credit } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/logout" component={ Logout } />
        }}/>
      </Switch>
    </main>
  </div>
)

export default App

