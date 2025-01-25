import { useReducer } from "react";

function UseReducer() {
  type stateType = {
    count: number;
  };
  type actionType = {
    type: 'increment'|'decrement'|'reset'
  
  };
  const initialState: stateType = {
    count: 0,
  };

  const reducer = (state: stateType, action: actionType):stateType => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: Math.max(state.count - 1,0) };
        case 'reset':
      return { count: 0 };
      default:
     return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Counter</h1>

      <div>
        <h1>{state.count}</h1>

        <button
          onClick={() => dispatch({ type: 'increment' })}
        >Increment</button>
        <button
          onClick={() => dispatch({ type: 'decrement' })}
        >Decrement</button>
        <button
          onClick={() => dispatch({ type: 'reset' })}
        >Reset</button>
      </div>
    </>
  );
}

export default UseReducer;
