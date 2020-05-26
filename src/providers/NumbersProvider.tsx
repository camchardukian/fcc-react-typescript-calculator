import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

type Context = {
  number: number,
  enteringNumber: number,
  setContext: Dispatch<SetStateAction<Context>>
  setNumber: Dispatch<SetStateAction<number>>,
  setEnteringNumber: Dispatch<SetStateAction<number>>,
  handleSetDisplayValue: Dispatch<SetStateAction<any>>
}

type Props = {
  children: React.ReactNode,
}

const initialContext: Context = {
  number: 0,
  enteringNumber: 0,
  setNumber: (): void => {
  },
  setEnteringNumber: (): void => {
  },
  setContext: (): void => {
    throw new Error('setContext function must be overridden.');
  },
  handleSetDisplayValue: (): void => {

  }
}

const NumberContext = createContext<Context>(initialContext);


const NumberContextProvider = ({ children }: Props): JSX.Element => {
  const [contextState, setContext] = useState<Context>(initialContext);
  const [number, setNumber] = useState(0);
  const [enteringNumber, setEnteringNumber] = useState(0);

  const handleSetDisplayValue = (num: number) => {
    setEnteringNumber(Number(`${number}${num}`))
    setNumber(Number(`${number}${num}`))

  }

  return (
    <NumberContext.Provider
      value={{
        ...contextState, setContext, number, setNumber, enteringNumber, setEnteringNumber,
        handleSetDisplayValue
      }}
    >
      {children}
    </NumberContext.Provider>
  );
}

export { NumberContext, NumberContextProvider };