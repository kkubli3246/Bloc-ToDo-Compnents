import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
   render() {
     return (
       <div className="App">
          <ul>
            <ToDo />
            <ToDo />
          </ul>
       </div>
     );
   }
 }

export default App;
