import React from 'react';
import './App.css';
import Calculator from '../src/containers/Calculator';
import NumbersProvider from '../src/providers/NumbersProvider';

function App() {
  return (
    <div className="App">
      <NumbersProvider>
        <Calculator />
      </NumbersProvider>
    </div>
  );
}

export default App;
