import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <div>
        Hello from APP
        <TodoInput/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
