import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState
} from "react";

import { simplify } from "mathjs";

type Context = {
  number: number | string;
  enteringNumber: number | string;
  storedNumber: number | string;
  operatorType: string;
  decimalWillBeAdded: boolean;
  numberHasDecimal: boolean;
  isCalculating: boolean;
  setContext: Dispatch<SetStateAction<Context>>;
  setNumber: Dispatch<SetStateAction<number | string>>;
  setEnteringNumber: Dispatch<SetStateAction<number | string>>;
  setStoredNumber: Dispatch<SetStateAction<number | string>>;
  setOperatorType: Dispatch<SetStateAction<string>>;
  setIsCalculating: Dispatch<SetStateAction<boolean>>;
  handleSetDisplayValue: (value: number | string) => void;
  setDecimalWillBeAdded: Dispatch<SetStateAction<boolean>>;
  setNumberHasDecimal: Dispatch<SetStateAction<boolean>>;
  handleClearValues: () => void;
  handleSetStoredValue: () => void;
  handleChooseOperatorType: (opType: string) => void;
  handleCalculations: () => void;
  handleAddDecimal: () => void;
  handleSetIsCalculating: (status: boolean) => void;
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
  isCalculating: true,
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
  setIsCalculating: (): void => {},
  handleChooseOperatorType: (): void => {},
  handleSetStoredValue: (): void => {},
  handleCalculations: (): void => {},
  handleAddDecimal: (): void => {},
  handleSetIsCalculating: (): void => {}
};

const NumberContext = createContext<Context>(initialContext);

const NumberContextProvider = ({ children }: Props): JSX.Element => {
  const [contextState, setContext] = useState<Context>(initialContext);
  const [number, setNumber] = useState<string | number>(0);
  const [storedNumber, setStoredNumber] = useState<string | number>(0);
  const [enteringNumber, setEnteringNumber] = useState<string | number>(0);
  const [operatorType, setOperatorType] = useState<string>("");
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  const handleSetDisplayValue = (value: number | string) => {
    console.log("testttt", simplify("3/4"));
    console.log("valll", value);
    if (String(number).length < 12) {
      if (!number) {
        setNumber(value);
        setEnteringNumber(String(value));
      } else {
        if (value === 0) {
          setNumber("".concat("" + number + value));
          setEnteringNumber("".concat("" + number + value));
        } else {
          setNumber("" + number + value);
          setEnteringNumber("" + number + value);
        }
      }
    } else {
      alert("maximum character limit exceeded");
    }
  };

  const handleSetIsCalculating = (status: boolean) => {
    console.log("handleeeSetIsCalculating", status);
    setIsCalculating(status);
    console.log("uuuu", isCalculating);
    // console.log("setting caluclating", status); // logs "setting caluclating", true
    // (async () => {
    //   await setIsCalculating(status);
    // })();
    // console.log("hiii", isCalculating);
    // if (isCalculating) {
    //   console.log("meeee");
    //   handleCalculations();
    // }
    // Not sure why both the above and below result in an infinite loop

    // console.log("setting caluclating", status);
    // setIsCalculating(status);
    // const willRun: boolean = isCalculating;
    // if (willRun) {
    //   console.log("meeee");
    //   handleCalculations();
    // }
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

  // const handleChooseOperatorType = (opType: string) => {
  //   setOperatorType(opType);

  //   if (number) {
  //     handleSetStoredValue();
  //   }
  // };

  const handleCalculations = () => {
    if (enteringNumber && isCalculating) {
      console.log("makeeeeing bacon");
      let result: any = simplify(String(enteringNumber));
      // let result = 1 + 2;
      console.log("rrrrrr", result);
      // switch (operatorType) {
      //   case "+":
      //     result = Number(storedNumber) + Number(number);
      //     break;
      //   case "-":
      //     result = Number(storedNumber) - Number(number);
      //     break;
      //   case "x":
      //     result = Number(storedNumber) * Number(number);
      //     break;
      //   case "÷":
      //     result = Number(storedNumber) / Number(number);
      //     break;
      //   default:
      //     return null;
      // }
      result = Math.round(result * 10000000000) / 10000000000;
      setStoredNumber(result);
      setEnteringNumber(result);
      setNumber(result);
    }
    console.log("whattttt!!!???");
    handleSetIsCalculating(false);
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
        handleSetIsCalculating,
        // handleChooseOperatorType,
        handleCalculations,
        handleAddDecimal
      }}
    >
      {children}
    </NumberContext.Provider>
  );
};

export { NumberContext, NumberContextProvider };
