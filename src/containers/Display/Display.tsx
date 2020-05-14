import React from 'react';
import useNumberInfo from '../../providers/NumbersProvider';
import './styles.scss'

interface iDisplayProps {
  value: number;
}

// Documentation link: https://www.carlrippon.com/react-context-with-typescript-p2/
// Demo code: https://codesandbox.io/s/react-ts-complex-context-function-f1cv4?fontsize=14&hidenavigation=1&theme=dark&file=/src/index.tsx

const Display: React.FC<iDisplayProps> = ({ value }) => {
  const { number, setNumber }: any = useNumberInfo(''); // do not know why an argument is required here.
  console.log('ffff', number) // cannot understand why this is undefined.

  return (
    <h2 id="display">{number}</h2>
  )
}

export default Display;