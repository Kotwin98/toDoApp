import React, { Component } from 'react';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/TaskList/TaskList';
import './App.scss';

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

  deleteTask = id => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks
    });
  };

  statusTask = id => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
      }
    });
    this.setState({
      tasks
    });
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
        <TaskList 
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.statusTask} />
      </div>
    );
  }
}

export default App;
