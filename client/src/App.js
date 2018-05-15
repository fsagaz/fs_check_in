import React, { Component } from 'react';
import './App.scss';

import TopNav from './components/topnav';
import Controls from './components/controls';
class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav/>
        <Controls/>

        // TODO header
        // TODO placeholder controls
        // TODO results component
      </div>
    );
  }
}

// example api use
// TODO put this call somewhere sensible
// TODO send parameters to server - check out `server/src/api/server.js`


export default App;
