import React from 'react';
import './App.css';
import Calculator from '../src/containers/Calculator';
import { NumberContextProvider } from '../src/providers/NumbersProvider';

function App() {
  return (
    <div className="App">
      <NumberContextProvider>
        <Calculator />
      </NumberContextProvider>
    </div>
  );
}

export default App;
