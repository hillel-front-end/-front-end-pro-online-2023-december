import React, { useState } from "react";
import Logo from "./assets/react.svg";
import loanCalculatorService from "./service/LoanCalculator.service";

const initialUserInput = {
  price: 1000,
  firstPayment: 0,
  term: 2,
  rate: 0,
};

// const initalSchedual = loanCalculatorService.paymentScheduleClassic({
//   creditSum: initialUserInput.price,
//   interestRateMonth: initialUserInput.rate / 100 / 12,
//   creditPeriod: initialUserInput.term,
// });

// console.log(initalSchedual, "initalSchedual");

function App() {
  const [userInput, setUserInput] = useState(initialUserInput);
  // const [schedual, setSchedual] = useState(initalSchedual);

  const schedual = loanCalculatorService.paymentScheduleClassic({
    creditSum: userInput.price,
    interestRateMonth: userInput.rate / 100 / 12,
    creditPeriod: +userInput.term,
  });

  function onChangeHandler(event) {
    const { name, value } = event.target;
    // const newUserInput = { ...userInput, [name]: +value };
    // setUserInput(newUserInput); // bad practice
    setUserInput((prevUserInput) => ({ ...prevUserInput, [name]: +value })); // good

    // console.log(userInput, "userInput.term");

    // setSchedual( // bad practice
    // loanCalculatorService.paymentScheduleClassic({
    //   creditSum: newUserInput.price,
    //   interestRateMonth: newUserInput.rate / 100 / 12,
    //   creditPeriod: +newUserInput.term,
    // })
    // );
  }

  console.log("----render----");

  return (
    <div className="app">
      <header className="header text-center">
        <img src={Logo} alt="" />
        <h1 className="title">Кредитний калькулятор</h1>
      </header>
      <main id="main">
        <div className="card card-shadow credit-calculator text-center flex-column-center">
          <div className="w-35 input-group">
            <input
              type="number"
              className="form__field"
              name="price"
              placeholder="Ціна (грн)"
              onChange={onChangeHandler}
              value={userInput.price}
            />
            <label className="form__label">Ціна (грн)</label>
          </div>

          <div className="w-35 input-group">
            <input
              type="number"
              className="form__field"
              name="firstPayment"
              placeholder="Перший внесок"
              onChange={onChangeHandler}
              value={userInput.firstPayment}
            />
            <label className="form__label">Перший внесок(грн)</label>
          </div>

          <div className="w-35 input-group">
            <input
              type="number"
              className="form__field"
              name="term"
              placeholder="Строк кредитування"
              onBlur={onChangeHandler}
              defaultValue={userInput.term}
            />
            <label className="form__label">Строк кредитування</label>
          </div>

          <div className="w-35 input-group">
            <input
              type="number"
              className="form__field"
              name="rate"
              placeholder="Відсоткова ставка за кредитом(%)"
              onChange={onChangeHandler}
              value={userInput.rate}
            />
            <label className="form__label">
              Відсоткова ставка за кредитом(%)
            </label>
          </div>
        </div>

        {JSON.stringify(userInput)}

        {JSON.stringify(schedual)}

        <div className="result-container">
          <table id="result">
            <thead>
              <tr>
                <th>Місяць</th>
                <th>Заборгованість за кредитом, грн </th>
                <th>Погашення кредиту, грн </th>
                <th>Відсотки за кредитом </th>
                <th>Виплата в місяць, грн</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
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
