import React, { useState } from 'react';

interface iContext {
  number: number,
  setNumber: any,
  children?: React.ReactNode;
}
// Is the entire above interface useless?

// @TODO try to finish implementing TypeScript with React Context and React Hooks

export const NumberContext = React.createContext<iContext | undefined>(undefined);


const NumbersProvider = (props: any) => {
  const [number, setNumber]: [number, any] = useState<number>(333);
  // not sure how to change any inside the above tuple without causing another error.


  return (
    <NumberContext.Provider
      value={{
        number,
        setNumber,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export const useNumberInfo = () => React.useContext(NumberContext);
//


export default NumbersProvider;