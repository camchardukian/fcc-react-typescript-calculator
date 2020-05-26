import React, { useContext } from 'react';
import { NumberContext } from '../../providers/NumbersProvider';
import './styles.scss';
interface iNumberButtonProps {
  number: number;
  id: string;
}
const NumberButton: React.FC<iNumberButtonProps> = ({ number, id }) => {
  const { handleSetDisplayValue } = useContext(NumberContext);

  return (
    <button className="number-btn" id={`${id}`} onClick={() => handleSetDisplayValue(number)}>{number}</button>
  )
}

export default NumberButton;