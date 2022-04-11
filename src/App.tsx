import Counter from "./components/Counter";
import { ContadorWithReducer } from "./components/ContadorWithReducer/CounterWithReducer";
import TextField from "./components/TextField";
import TimerPadre from "./components/TimerPadre";
import Usuario from "./components/Usuario";
import Form from "./components/Form";
import Form2nd from "./components/Form2nd";
import Todo from "./todo/Todo";

function App() {
  return (
    <div className="App py-3 px-2">
      <h2>useContext</h2>
      <hr />
      <Todo />
      <br />
      <h2>useState</h2>
      <hr />
      <Counter />
      <hr />
      <Usuario />
      <br />
      <h2>useEffect</h2>
      <hr />
      <TimerPadre />
      <br />
      <h2>useReducer</h2>
      <hr />
      <ContadorWithReducer />
      <br />
      <br />
      <h2>Custom Hooks</h2>
      <hr />
      <Form />
      <hr />
      <Form2nd />
      <br />

    </div>
  );
}

export default App;
