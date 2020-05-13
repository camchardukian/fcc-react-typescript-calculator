import React, { useState } from 'react';

interface iContext {
  number: number,
  setNumber: any,
  children?: React.ReactNode;
}

// @TODO try to finish implementing TypeScript with React Context and React Hooks

export const NumberContext = React.createContext<iContext | undefined>(undefined);


const NumbersProvider = (props: { children?: object, }) => {
  const [number, setNumber]: any = useState(111);
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
        setNumber,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export const useNumberInfo = () => React.useContext(NumberContext);



export default NumbersProvider;