import { INCREMENT, DECREMENT, CUSTOM } from "./types";

interface InitialState {
  contador: number;
}

type IncrementAction = { type: typeof INCREMENT };
type DecrementAction = { type: typeof DECREMENT };
type CustomAction = { type: typeof CUSTOM; payload: number };

type ActionTypes = IncrementAction | DecrementAction | CustomAction;

export const counterReducer = (state: InitialState, action: ActionTypes) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        contador: state.contador + 1,
      };
    case DECREMENT:
      return {
        ...state,
        contador: state.contador - 1,
      };
    case CUSTOM:
      return {
        ...state,
        contador: state.contador + action.payload,
      };
    default:
      return state;
  }
};
