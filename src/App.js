import React, { Component } from 'react';
import AddTask from './components/AddTask/AddTask';
import './App.css';

class App extends Component {
  counter = 6;
  state = {
    tasks: [
      {
        id: 0,
        text: 'walk a dog',
        important: true,
        active: true
      },
      {
        id: 1,
        text: 'study programming',
        important: true,
        active: true
      },
      {
        id: 2,
        text: 'workout',
        important: false,
        active: true
      },
      {
        id: 3,
        text: 'play video games',
        important: false,
        active: true
      },
      {
        id: 4,
        text: 'buy groceries',
        important: true,
        active: true
      },
      {
        id: 5,
        text: 'do laundry',
        important: false,
        active: true
      }
    ]
  };

  addTask = (text, important) => {
    const task = {
      id: this.counter,
      text,
      important,
      active: true
    };
    this.counter++;
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));
    return true;
  };

  render() {
    return (
      <div className="App">
        <h1>Add task</h1>
        <AddTask add={this.addTask} />
      </div>
    );
  }
}

export default App;
