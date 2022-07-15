import type { Component } from 'solid-js';
import { createSignal, For } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  const [seats, setSeats] = createSignal(0);

  return (
    <For each={}>{(seat, index) =>
      {index() + 1}: <div class="seat"></div>
    }</For>
  );
};

export default App;
