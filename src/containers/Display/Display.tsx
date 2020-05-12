import React, { useContext } from 'react';
import NumbersProvider from '../../providers/NumbersProvider';
import './styles.scss'

interface iDisplayProps {
  value: number;
}
console.log(typeof NumbersProvider)
// try to fix NumbersProvider TypeScript error tomorrow.
const context = () => useContext(NumbersProvider)

const Display: React.FC<iDisplayProps> = ({ value }) => {
  return (
    <h2 id="display">{value}</h2>
  )
}

export default Display;