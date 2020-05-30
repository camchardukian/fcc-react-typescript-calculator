import React, { useContext } from "react";
import { NumberContext } from "../../providers/NumbersProvider";
import "./styles.scss";

const Display: React.FC = () => {
  const { enteringNumber } = useContext(NumberContext);
  return (
    <>
      <h2 id="display">{enteringNumber}</h2>
    </>
  );
};

export default Display;
