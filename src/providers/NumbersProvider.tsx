import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState
} from "react";

type Context = {
  number: number;
  enteringNumber: number | string;
  storedNumber: number;
  operatorType: string;
  decimalWillBeAdded: boolean;
  numberHasDecimal: boolean;
  setContext: Dispatch<SetStateAction<Context>>;
  setNumber: Dispatch<SetStateAction<number>>;
  setEnteringNumber: Dispatch<SetStateAction<any>>;
  setStoredNumber: Dispatch<SetStateAction<number>>;
  setOperatorType: Dispatch<SetStateAction<string>>;
  handleSetDisplayValue: Dispatch<SetStateAction<any>>;
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
  const [number, setNumber] = useState(0);
  const [storedNumber, setStoredNumber] = useState(0);
  const [enteringNumber, setEnteringNumber] = useState<string | number>(0);
  const [operatorType, setOperatorType] = useState("");
  const [decimalWillBeAdded, setDecimalWillBeAdded] = useState(false);
  const [numberHasDecimal, setNumberHasDecimal] = useState(false);
  const [zeroesToConcat, setZeroesToConcat] = useState("0");

  const handleSetDisplayValue = (num: number) => {
    console.log(
      "number",
      number,
      "enteringNumber",
      enteringNumber,
      "decimalWillBeAdded",
      decimalWillBeAdded,
      "numberHasDecimal",
      numberHasDecimal
    );
    if (
      numberHasDecimal &&
      decimalWillBeAdded &&
      String(enteringNumber).length !== String(number).length &&
      num !== 0
    ) {
      const example = Number(`${number}.0${num}`);
      setNumber(example);
      setEnteringNumber(example);
      setDecimalWillBeAdded(false);
      console.log("zerooo");
    } else if (decimalWillBeAdded) {
      if (num === 0) {
        setEnteringNumber(`${number}.0`);
        setNumberHasDecimal(true);
        console.log("oneeee");
      } else {
        setNumber(Number(`${number}.${num}`));
        setNumberHasDecimal(true);
        setDecimalWillBeAdded(false);
        setEnteringNumber(Number(`${number}.${num}`));
        console.log("twoooo");
      }
    } else {
      // working here today
      if (num === 0) {
        setZeroesToConcat(zeroesToConcat + "0");
        console.log("ztc", zeroesToConcat);
        setEnteringNumber(`${number}${zeroesToConcat}`);
      } else {
        if (zeroesToConcat.length > 1) {
          const stringValue = `${number}${zeroesToConcat}${num}`;
          const ABC = parseFloat(stringValue);
          console.log("fff", ABC, typeof ABC); // stringValue === "9.70004"
          setNumber(ABC); // number === 9.74 // current 9.74 expected 9.70004
          console.log("heyyyyy", number);
          setEnteringNumber(number);
        } else {
          setEnteringNumber(Number(`${number}${num}`));
          setNumber(Number(`${number}${num}`));
          setDecimalWillBeAdded(false);
        }
        console.log("threee");
      }
    }
  };
  const handleClearValues = () => {
    setNumber(0);
    setStoredNumber(0);
    setEnteringNumber(0);
    setDecimalWillBeAdded(false);
    setNumberHasDecimal(false);
    console.log("fourrr");
  };

  const handleSetStoredValue = () => {
    setStoredNumber(number);
    setNumber(0);
    setDecimalWillBeAdded(false);
    console.log("fiveee");
  };

  const handleChooseOperatorType = (opType: string) => {
    setOperatorType(opType);
    console.log("sixxx");

    if (number) {
      handleSetStoredValue();
      console.log("sevenn");
    }
  };

  const handleCalculations = () => {
    console.log("eighttt");

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
    console.log("nineee");

    let enteringNumberAsString: string = String(enteringNumber);
    if (enteringNumberAsString.indexOf(".") === -1) {
      console.log("tennn");

      setDecimalWillBeAdded(true);
    }
  };

  return (
    <NumberContext.Provider
      value={{
        ...contextState,
        setContext,
        number,
        setNumber,
        decimalWillBeAdded,
        numberHasDecimal,
        enteringNumber,
        setEnteringNumber,
        handleSetDisplayValue,
        storedNumber,
        setStoredNumber,
        operatorType,
        setOperatorType,
        setDecimalWillBeAdded,
        setNumberHasDecimal,
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
