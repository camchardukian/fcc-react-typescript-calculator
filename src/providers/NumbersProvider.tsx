import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

type Context = {
  number: number,
  enteringNumber: number,
  storedNumber: number,
  setContext: Dispatch<SetStateAction<Context>>
  setNumber: Dispatch<SetStateAction<number>>,
  setEnteringNumber: Dispatch<SetStateAction<number>>,
  setStoredNumber: Dispatch<SetStateAction<number>>,
  handleSetDisplayValue: Dispatch<SetStateAction<any>>,
  handleClearValues: () => void,
}

type Props = {
  children: React.ReactNode,
}

const initialContext: Context = {
  number: 0,
  enteringNumber: 0,
  storedNumber: 0,
  setNumber: (): void => {
  },
  setEnteringNumber: (): void => {
  },
  setStoredNumber: (): void => {
  },
  setContext: (): void => {
    throw new Error('setContext function must be overridden.');
  },
  handleSetDisplayValue: (): void => {
  },
  handleClearValues: (): void => {
  }

}

const NumberContext = createContext<Context>(initialContext);


const NumberContextProvider = ({ children }: Props): JSX.Element => {
  const [contextState, setContext] = useState<Context>(initialContext);
  const [number, setNumber] = useState(0);
  const [storedNumber, setStoredNumber] = useState(0);
  const [enteringNumber, setEnteringNumber] = useState(0);

  const handleSetDisplayValue = (num: number) => {
    setEnteringNumber(Number(`${number}${num}`))
    setNumber(Number(`${number}${num}`))
  }
  const handleClearValues = () => {
    setNumber(0);
    setStoredNumber(0);
    setEnteringNumber(0);
  }

  return (
    <NumberContext.Provider
      value={{
        ...contextState, setContext, number, setNumber, enteringNumber, setEnteringNumber,
        handleSetDisplayValue, storedNumber, setStoredNumber, handleClearValues
      }}
    >
      {children}
    </NumberContext.Provider>
  );
}

export { NumberContext, NumberContextProvider };