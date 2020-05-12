import React, { useState } from 'react';

interface iContext {
  number: number,
  children?: React.ReactNode;
}

// @TODO try to finish implementing TypeScript with React Context and React Hooks
interface Props {

}

export const NumberContext = React.createContext<iContext | null>(null);


const NumbersProvider = (props: { children: object, }) => {
  const [number, setNumber]: any = useState(0);
  console.log('hiiii', number);
  // const [storedNumber, setStoredNumber] = useState(0);
  // const [enteringNumber, setEnteringNumber] = useState(0);
  // const [operatorType, setOperatorType] = useState('');


  // const handleSetDisplayValue = (num: number) => {

  // };





  return (
    <NumberContext.Provider
      value={{
        // handleSetDisplayValue,
        number,
        // setNumber,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumbersProvider;