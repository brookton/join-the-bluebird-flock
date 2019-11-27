import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import './fonts/CircularStd-Black.otf'
import './index.css';
import App from './components/App';

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/products">
        <App />
      </Route>
    </div>
  </Router>, document.getElementById('root'))
) ;