import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState
} from "react";

type Context = {
  number: number;
  enteringNumber: number;
  storedNumber: number;
  operatorType: string;
  decimalWillBeAdded: boolean;
  setContext: Dispatch<SetStateAction<Context>>;
  setNumber: Dispatch<SetStateAction<number>>;
  setEnteringNumber: Dispatch<SetStateAction<number>>;
  setStoredNumber: Dispatch<SetStateAction<number>>;
  setOperatorType: Dispatch<SetStateAction<string>>;
  handleSetDisplayValue: Dispatch<SetStateAction<any>>;
  setDecimalWillBeAdded: Dispatch<SetStateAction<boolean>>;
  handleClearValues: () => void;
  handleSetStoredValue: () => void;
  handleChooseOperatorType: (opType: string) => void;
  handleCalculations: () => void;
  handleAddDecimal: () => void;
};

type Props = {
  children: React.ReactNode;
};

const initialContext: Context = {
  number: 0,
  enteringNumber: 0,
  storedNumber: 0,
  decimalWillBeAdded: false,
  operatorType: "",
  setNumber: (): void => {},
  setEnteringNumber: (): void => {},
  setStoredNumber: (): void => {},
  setContext: (): void => {
    throw new Error("setContext function must be overridden.");
  },
  handleSetDisplayValue: (): void => {},
  handleClearValues: (): void => {},
  setOperatorType: (): void => {},
  setDecimalWillBeAdded: (): void => {},
  handleChooseOperatorType: (): void => {},
  handleSetStoredValue: (): void => {},
  handleCalculations: (): void => {},
  handleAddDecimal: (): void => {}
};

const NumberContext = createContext<Context>(initialContext);

const NumberContextProvider = ({ children }: Props): JSX.Element => {
  const [contextState, setContext] = useState<Context>(initialContext);
  const [number, setNumber] = useState(0);
  const [storedNumber, setStoredNumber] = useState(0);
  const [enteringNumber, setEnteringNumber] = useState(0);
  const [operatorType, setOperatorType] = useState("");
  const [decimalWillBeAdded, setDecimalWillBeAdded] = useState(false);

  const handleSetDisplayValue = (num: number) => {
    if (decimalWillBeAdded) {
      setEnteringNumber(Number(`${number}.${num}`));
      setNumber(Number(`${number}.${num}`));
    } else {
      setEnteringNumber(Number(`${number}${num}`));
      setNumber(Number(`${number}${num}`));
    }
  };
  const handleClearValues = () => {
    setNumber(0);
    setStoredNumber(0);
    setEnteringNumber(0);
    setDecimalWillBeAdded(false);
  };

  const handleSetStoredValue = () => {
    setStoredNumber(number);
    setNumber(0);
    setDecimalWillBeAdded(false);
  };

  const handleChooseOperatorType = (opType: string) => {
    setOperatorType(opType);

    if (number) {
      handleSetStoredValue();
    }
  };

  const handleCalculations = () => {
    console.log("hiii", "number", number, "storedNumber", storedNumber);
    if (number && storedNumber) {
      let result = 0;
      switch (operatorType) {
        case "+":
          result = Number(storedNumber) + Number(number);
          break;
        case "-":
          result = Number(storedNumber) - Number(number);
          break;
        case "x":
          result = Number(storedNumber) * Number(number);
          break;
        case "÷":
          result = Number(storedNumber) / Number(number);
          break;
        default:
          return null;
      }
      result = Math.round(result * 10000000000) / 10000000000;
      setStoredNumber(result);
      setEnteringNumber(result);
      setNumber(0);
    }
  };

  const handleAddDecimal = () => {
    setDecimalWillBeAdded(true);
  };

  return (
    <NumberContext.Provider
      value={{
        ...contextState,
        setContext,
        number,
        setNumber,
        decimalWillBeAdded,
        enteringNumber,
        setEnteringNumber,
        handleSetDisplayValue,
        storedNumber,
        setStoredNumber,
        operatorType,
        setOperatorType,
        setDecimalWillBeAdded,
        handleClearValues,
        handleSetStoredValue,
        handleChooseOperatorType,
        handleCalculations,
        handleAddDecimal
      }}
    >
      {children}
    </NumberContext.Provider>
  );
};

export { NumberContext, NumberContextProvider };
