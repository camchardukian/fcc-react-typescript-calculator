import React from "react";
import "./styles.scss";
import NumberButton from "../NumberButton";
import Display from "../Display";
import ClearButton from "../ClearButton";
import OperatorButton from "../OperatorButton";
import EqualsButton from "../EqualsButton";

const Calculator = () => {
  return (
    <div className="calculator">
      <Display />
      <ClearButton />
      <div className="flex-row">
        <NumberButton number={1} id="one" />
        <NumberButton number={2} id="two" />
        <NumberButton number={3} id="three" />
        <OperatorButton opType={"÷"} id="divide" />
      </div>
      <div className="flex-row">
        <NumberButton number={4} id="four" />
        <NumberButton number={5} id="five" />
        <NumberButton number={6} id="six" />
        <OperatorButton opType={"÷"} id="subtract" />
      </div>
      <div className="flex-row">
        <NumberButton number={7} id="seven" />
        <NumberButton number={8} id="eight" />
        <NumberButton number={9} id="nine" />
        <OperatorButton opType={"÷"} id="multiply" />
      </div>
      <div className="flex-row">
        <NumberButton number={0} id="zero" />
        <OperatorButton opType={"÷"} id="add" />
        <EqualsButton />
      </div>
    </div>
  );
};

export default Calculator;
