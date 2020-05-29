import React, { useContext } from "react";
import { NumberContext } from "../../providers/NumbersProvider";
import "./styles.scss";

const OperatorButton = ({ opType, id }) => {
  const { handleChooseOperatorType } = useContext(NumberContext);
  return (
    <button
      type="button"
      className="calculator-arithmetic-operator"
      id={id}
      onClick={() => handleChooseOperatorType(opType)}
    >
      <span>{opType}</span>
    </button>
  );
};

export default OperatorButton;
