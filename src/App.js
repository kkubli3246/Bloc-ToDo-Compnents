import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      todos: [
        { description: 'Walk the cat', isCompleted: true },
        { description: 'Throw the dishes away', isCompleted: false },
        { description: 'Buy new dishes', isCompleted: false },
        { description: 'Study on Bloc.io!', isCompleted: true}
      ]


    };
  }
  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <div>

            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } />
            </div>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
