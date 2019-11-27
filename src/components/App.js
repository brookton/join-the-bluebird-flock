import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Header from './Header'
import First from './First'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import './App.css';

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/products">
        <Header />
        <First redirect={this.redirect}/>
        <Second redirect={this.redirect}/>
        <Third redirect={this.redirect}/>
        <Fourth redirect={this.redirect}/>
      </Route>
    </div>
  </Router>
);
class App extends React.Component {
    redirect(){
      window.location.href="https://bluebirdbotanicals.com";
    }
    render(){
    return (
      <div className="App">
        <Header />
        <First redirect={this.redirect}/>
        <Second redirect={this.redirect}/>
        <Third redirect={this.redirect}/>
        <Fourth redirect={this.redirect}/>
      </div>
    );
  }
}
export default App;