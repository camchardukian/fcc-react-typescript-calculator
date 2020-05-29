import React, { useContext } from "react";
import { NumberContext } from "../../providers/NumbersProvider";
import "./styles.scss";

const DecimalButton = () => {
  const { handleAddDecimal } = useContext(NumberContext);
  return (
    <button
      type="button"
      id="decimal"
      className="calculator-arithmetic-operator"
      onClick={() => handleAddDecimal()}
    >
      <span>.</span>
    </button>
  );
};

export default DecimalButton;
