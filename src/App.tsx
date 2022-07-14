import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <For each={}>{(seat, index) =>
      {index() + 1}: <div class="seat"></div>
    }</For>
  );
};

export default App;
