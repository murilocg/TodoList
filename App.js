import React, { Component } from 'react';
import TodoList from './components/TodoList';

const checkedTasks = [
  { name: 'Home Work', checked: true },
  { name: 'Wash Dishes', checked: true },
];

const uncheckedTasks = [{ name: 'Play Video-Game', checked: false }];

export default class App extends Component {
  render() {
    return <TodoList checkedTasks={checkedTasks} uncheckedTasks={uncheckedTasks} />;
  }
}
