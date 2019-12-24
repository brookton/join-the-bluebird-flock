import React from 'react';
import { Router } from "@reach/router"
import Home from './Home'
import SocialLanding from './SocialLanding'
import './App.css';

class App extends React.Component {
    render(){
    return (
      <div className="App">
        <Router>
          <SocialLanding path="/b-corp-hemp-company" />
          <Home path="/"/>
        </Router>
      </div>
    );
  }
}
export default App;