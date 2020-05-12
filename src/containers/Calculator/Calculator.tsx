import React from 'react';
import './styles.scss';
import NumberButton from '../NumberButton';
import Display from '../Display';

const Calculator = () => {
  return (
    <div className="calculator">
      <Display value={3} />
      <div className="flex-row">
        <NumberButton number={1} id="one" />
        <NumberButton number={2} id="two" />
        <NumberButton number={3} id="three" />
      </div>
      <div className="flex-row">
        <NumberButton number={4} id="four" />
        <NumberButton number={5} id="five" />
        <NumberButton number={6} id="six" />
      </div>
      <div className="flex-row">
        <NumberButton number={7} id="seven" />
        <NumberButton number={8} id="eight" />
        <NumberButton number={9} id="nine" />
      </div>
      <NumberButton number={0} id="zero" />
    </div>
  )
}

export default Calculator;