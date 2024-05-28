import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

const initialUserInput = {
  price: 100000,
  firstPayment: 0,
  term: 2,
  rate: 10,
};

function App() {
  const [userInput, setUserInput] = useState(initialUserInput);

  function onChangeHandler(name, value) {
    setUserInput((prevUserInput) => ({ ...prevUserInput, [name]: +value }));
  }

  return (
    <div className="app">
      <Header className="text-center" />
      <main id="main">
        <UserInput userInput={userInput} onChange={onChangeHandler} />
        <Result userInput={userInput} />
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
