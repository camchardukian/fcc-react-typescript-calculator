import React, { useContext } from "react";
import { NumberContext } from "../../providers/NumbersProvider";
import "./styles.scss";

const ClearButton = () => {
  const { handleClearValues } = useContext(NumberContext);
  return (
    <button type="button" id="clear" onClick={() => handleClearValues()}>
      <span className="clear-text">AC</span>
    </button>
  );
};

export default ClearButton;
