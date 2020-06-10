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
  setIsCalculating: (): void => {},
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
  const [operatorType, setOperatorType] = useState<string>("");

  const handleSetDisplayValue = (value: number | string) => {
    if (String(number).length < 15) {
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

  const handleClearValues = () => {
    setNumber(0);
    setStoredNumber(0);
    setEnteringNumber(0);
  };

  const handleSetStoredValue = () => {
    setStoredNumber(number);
    setNumber(0);
  };

  const handleCalculations = () => {
    const enteringNumberWithoutMultipleOperators = handleRemoveMultipleConsecutiveOperators();
    let result: any = simplify(String(enteringNumberWithoutMultipleOperators));
    result = result.evaluate();
    result = Math.round(result * 10000000000) / 10000000000;
    setStoredNumber(result);
    setEnteringNumber(result);
    setNumber(result);
  };

  const handleRemoveMultipleConsecutiveOperators = () => {
    const stringifiedEnteringNumber = String(enteringNumber);
    let processedValueToReturn: string[] | string = [];
    const regExpTestingForDigits = new RegExp(/\d|\./);
    // let numberOfConsecutiveDigits = 0;
    let numberOfConsecutiveOperators = 0;

    for (let i = stringifiedEnteringNumber.length - 1; i >= 0; i -= 1) {
      console.log(stringifiedEnteringNumber[i], i);
      if (regExpTestingForDigits.test(stringifiedEnteringNumber[i])) {
        console.log(
          "rrr",
          i,
          stringifiedEnteringNumber[i],
          regExpTestingForDigits.test(stringifiedEnteringNumber[i])
        );
        processedValueToReturn.unshift(stringifiedEnteringNumber[i]);
        // numberOfConsecutiveDigits += 1;
        numberOfConsecutiveOperators = 0;
      }
      if (stringifiedEnteringNumber[i].match(/[+/*]/)) {
        numberOfConsecutiveOperators += 1;
      }
      if (
        numberOfConsecutiveOperators >= 1 ||
        stringifiedEnteringNumber[i] === "-"
      ) {
        console.log(
          "attention",
          "stringifiedEnteringNumber[i]",
          stringifiedEnteringNumber[i],
          "processedValueToReturn",
          processedValueToReturn
        );
        console.log("tttt", processedValueToReturn[0]);
        processedValueToReturn.unshift(stringifiedEnteringNumber[i]);
        console.log("helpppp", processedValueToReturn);
        if (
          processedValueToReturn[1].match(/[+/*]/) &&
          processedValueToReturn[0].match(/[+/*]/)
        ) {
          console.log("hereee", typeof processedValueToReturn);
          if (Array.isArray(processedValueToReturn)) {
            console.log(
              "processedValueToReturn00000",
              processedValueToReturn[0],
              "processedValueToReturn1111",
              processedValueToReturn[1]
            );
            processedValueToReturn.splice(0, 1);
          }
        }
      }
    }
    console.log("finishsss", processedValueToReturn.reverse().join(""));
    return processedValueToReturn.reverse().join("");
  };

  const handleCheckToAvoidAddingDoubleDecimals = () => {
    let copyEnteringNumber: number | string = String(enteringNumber);
    if (copyEnteringNumber.indexOf(".") === -1) {
      return true;
    } else {
      let numberOfOperatorsSinceLastDecimal = 0;
      for (let i = 0; i < copyEnteringNumber.length; i += 1) {
        if (copyEnteringNumber[i].match(/[+-/*]/)) {
          numberOfOperatorsSinceLastDecimal += 1;
        }
        if (copyEnteringNumber[i] === ".") {
          numberOfOperatorsSinceLastDecimal = 0;
        }
        if (numberOfOperatorsSinceLastDecimal) {
          copyEnteringNumber = copyEnteringNumber + "";
          return true;
        }
      }
    }
  };

  const handleAddDecimal = () => {
    if (handleCheckToAvoidAddingDoubleDecimals()) {
      const enteringNumberWithConcattedDecimal = enteringNumber + ".";
      if (
        enteringNumberWithConcattedDecimal !== enteringNumber &&
        !storedNumber
      ) {
        setEnteringNumber(enteringNumberWithConcattedDecimal);
        setNumber(enteringNumberWithConcattedDecimal);
      } else if (String(number).indexOf(".") === -1 && !storedNumber) {
        setNumber("0.");
        setEnteringNumber("0.");
      } else if (String(number).indexOf(".") === -1) {
        setNumber(number + ".");
        setEnteringNumber(enteringNumber + ".");
      }
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
        handleCalculations,
        handleAddDecimal
      }}
    >
      {children}
    </NumberContext.Provider>
  );
};

export { NumberContext, NumberContextProvider };
