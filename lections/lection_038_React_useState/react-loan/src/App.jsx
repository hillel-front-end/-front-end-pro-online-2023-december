import { useCallback, useState, useMemo } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import loanCalculatorService from "./service/LoanCalculator.service";

const initialUserInput = {
  price: 0,
  firstPayment: 0,
  term: 2,
  rate: 10,
};

function App() {
  const [userInput, setUserInput] = useState(initialUserInput);

  function onChangeHandler(name, value) {
    setUserInput((prevUserInput) => ({ ...prevUserInput, [name]: +value }));
  }

  const onReload = useCallback(() => {
    console.log(userInput, "userInput in useCallback");
 const [error, setEror] = useState({});
    setUserInput((p) => ({ ...p }));
  }, [userInput.price, userInput.term]); // useCallback(func, deps[])

  console.log(userInput, "userInput in App");

  // useMemo
  const schedual = useMemo(() => {
    console.log("---calculate---");
    return loanCalculatorService.paymentScheduleClassic({
      creditSum: userInput.price,
      interestRateMonth: userInput.rate / 100 / 12,
      creditPeriod: +userInput.term,
    });
  }, [userInput.price, userInput.term]); // useMemo(fn, [])

  console.log("---Render App --", schedual);

  return (
    <div className="app">
      <Header className="text-center" onReload={onReload} />
      <main id="main">
        <UserInput userInput={userInput} onChange={onChangeHandler} />
        <Result schedual={schedual} />
      </main>
    </div>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <div>Hello world</div>;
//   }
// }

export default App;

// render 1 App() -> setPrice(1001)
// render 2: App()
