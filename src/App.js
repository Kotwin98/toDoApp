import React, { Component } from 'react';
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

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
