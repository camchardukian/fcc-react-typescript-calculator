import React, { useContext, useEffect } from "react";
import { NumberContext } from "../../providers/NumbersProvider";
import "./styles.scss";

const EqualsButton = () => {
  const {
    handleSetIsCalculating,
    isCalculating,
    handleCalculations
  } = useContext(NumberContext);
  useEffect(() => {
    console.log("runnnn", isCalculating);
    if (isCalculating) {
      console.log("iffff");
      // return
      handleCalculations();
    }
  });
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
