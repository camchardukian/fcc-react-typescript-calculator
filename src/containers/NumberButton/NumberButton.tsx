import React from 'react';
import './styles.scss';
interface iNumberButtonProps {
  number: number;
  id: string;
}
const NumberButton: React.FC<iNumberButtonProps> = ({ number, id }) => {
  return (
    <button className="number-btn" id={`${id}`}>{number}</button>
  )
}

export default NumberButton;