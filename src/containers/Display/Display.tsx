import React, { useContext } from 'react';
import useNumberInfo from '../../providers/NumbersProvider';
import './styles.scss'

interface iDisplayProps {
  value: number;
}

// console.log('hhhh', useNumberInfo);

const { number, setNumber } = useNumberInfo()!;

// Documentation link: https://www.carlrippon.com/react-context-with-typescript-p2/
// Demo code: https://codesandbox.io/s/react-ts-complex-context-function-f1cv4?fontsize=14&hidenavigation=1&theme=dark&file=/src/index.tsx

const Display: React.FC<iDisplayProps> = ({ value }) => {
  // console.log('jjjjj', UseNumberInfo)
  // const { theme, setTheme } = useTheme()!
  console.log('numberrrr', number)
  return (
    <h2 id="display">{number}</h2>
  )
}

export default Display;