import React from 'react';
import Home from './pages/Home';
import Fields from './pages/Fields';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/fields' component={Fields} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
