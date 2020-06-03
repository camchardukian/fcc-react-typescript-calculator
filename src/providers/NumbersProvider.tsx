import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState
} from "react";

type Context = {
  number: number | string;
  enteringNumber: number | string;
  storedNumber: number | string;
  operatorType: string;
  decimalWillBeAdded: boolean;
  numberHasDecimal: boolean;
  setContext: Dispatch<SetStateAction<Context>>;
  setNumber: Dispatch<SetStateAction<number | string>>;
  setEnteringNumber: Dispatch<SetStateAction<number | string>>;
  setStoredNumber: Dispatch<SetStateAction<number | string>>;
  setOperatorType: Dispatch<SetStateAction<string>>;
  handleSetDisplayValue: (num: number) => void;
  setDecimalWillBeAdded: Dispatch<SetStateAction<boolean>>;
  setNumberHasDecimal: Dispatch<SetStateAction<boolean>>;
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
  numberHasDecimal: false,
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
  setNumberHasDecimal: (): void => {},
  handleChooseOperatorType: (): void => {},
  handleSetStoredValue: (): void => {},
  handleCalculations: (): void => {},
  handleAddDecimal: (): void => {}
};

const NumberContext = createContext<Context>(initialContext);

const NumberContextProvider = ({ children }: Props): JSX.Element => {
  const [contextState, setContext] = useState<Context>(initialContext);
  const [number, setNumber] = useState<string | number>(0);
  const [storedNumber, setStoredNumber] = useState<string | number>(0);
  const [enteringNumber, setEnteringNumber] = useState<string | number>(0);
  const [operatorType, setOperatorType] = useState("");

  const handleSetDisplayValue = (num: number) => {
    if (String(number).length < 12) {
      if (!number) {
        setNumber(num);
        setEnteringNumber(num);
      } else {
        if (num === 0) {
          setNumber("".concat("" + number + num));
          setEnteringNumber("".concat("" + number + num));
        } else {
          setNumber(Number("" + number + num));
          setEnteringNumber(Number("" + number + num));
        }
      }
    } else {
      alert("maximum character limit exceeded");
    }
  };

  const handleClearValues = () => {
    setNumber(0);
    setStoredNumber(0);
    setEnteringNumber(0);
  };

  const handleSetStoredValue = () => {
    setStoredNumber(number);
    setNumber(0);
  };

  const handleChooseOperatorType = (opType: string) => {
    setOperatorType(opType);

    if (number) {
      handleSetStoredValue();
    }
  };

  const handleCalculations = () => {
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
    let copyEnteringNumber;
    String(enteringNumber).indexOf(".") > -1
      ? (copyEnteringNumber = enteringNumber)
      : (copyEnteringNumber = enteringNumber + ".");
    if (copyEnteringNumber !== enteringNumber && !storedNumber) {
      setEnteringNumber(copyEnteringNumber);
      setNumber(copyEnteringNumber);
    } else if (String(number).indexOf(".") === -1 && !storedNumber) {
      setNumber("0.");
      setEnteringNumber("0.");
    } else if (String(number).indexOf(".") === -1) {
      setNumber(number + ".");
      setEnteringNumber(enteringNumber + ".");
    }
  };

  return (
    <NumberContext.Provider
      value={{
        ...contextState,
        setContext,
        number,
        setNumber,
        enteringNumber,
        setEnteringNumber,
        handleSetDisplayValue,
        storedNumber,
        setStoredNumber,
        operatorType,
        setOperatorType,
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
