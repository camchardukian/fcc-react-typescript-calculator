import React, { useContext } from "react";
import { NumberContext } from "../../providers/NumbersProvider";
import "./styles.scss";

const EqualsButton = () => {
  const { handleSetIsCalculating } = useContext(NumberContext);
  return (
    <button
      type="button"
      className="calculator-arithmetic-operator"
      id="equals"
      onClick={() => handleSetIsCalculating(true)}
    >
      <span>=</span>
    </button>
  );
};

export default EqualsButton;
