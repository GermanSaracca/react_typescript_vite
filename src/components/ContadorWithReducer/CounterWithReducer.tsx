import { useReducer } from "react";
import { counterReducer } from "./counterReducer";
import { CUSTOM, DECREMENT, INCREMENT } from "./types";

const initialState = {
  contador: 0,
};

export const ContadorWithReducer = () => {
  const [contadorState, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <h2>Contador: {contadorState.contador} </h2>
      <button className="btn btn-outline-primary" onClick={() => dispatch({ type: INCREMENT })}>
        +
      </button>
      <button className="btn btn-outline-primary" onClick={() => dispatch({ type: DECREMENT })}>
        -
      </button>
      <button className="btn btn-success" onClick={() => dispatch({ type: CUSTOM, payload: 200 })}>
        200
      </button>
    </>
  );
};
