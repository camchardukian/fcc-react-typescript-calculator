import React, { useContext } from "react";
import { NumberContext } from "../../providers/NumbersProvider";
import "./styles.scss";

const EqualsButton = () => {
  const { handleCalculations } = useContext(NumberContext);
  return (
    <button
      type="button"
      className="calculator-arithmetic-operator"
      id="equals"
      onClick={() => handleCalculations()}
    >
      <span>=</span>
    </button>
  );
};

export default EqualsButton;
