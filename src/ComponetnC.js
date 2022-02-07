import { useReducer } from "react";

const intialstate = {
  firstCount: 0,
  secondCount: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCount: state.firstCount + action.value };
      break;
    case "decrement":
      return { ...state, firstCount: state.firstCount - action.value };
      break;
    case "increment10":
      return { ...state, secondCount: state.secondCount + action.value };
      break;
    case "decrement10":
      return { ...state, secondCount: state.secondCount - action.value };
    case "reset":
      return intialstate;
      break;
    default:
      return intialstate;
  }
};

function ComponetnC(params) {
  const [count, dispatch] = useReducer(reducer, intialstate);
  const [count2, dispatch2] = useReducer(reducer, intialstate);
  const [count3, dispatch3] = useReducer(reducer, intialstate);
  return (
    <div>
      <h1>
        ComponentC {count.firstCount},{count.secondCount}
      </h1>
      <h1>{count2.firstCount}</h1>
      <h1>{count3.firstCount}</h1>
      <p>
        <button onClick={() => dispatch2({ type: "increment", value: 5 })}>
          dispatch2
        </button>
        <button onClick={() => dispatch2({ type: "increment", value: 24 })}>
          dispatch3
        </button>
      </p>

      <button onClick={() => dispatch({ type: "increment", value: 2 })}>
        increment2
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 2 })}>
        decrement2
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        increment5
      </button>

      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        decrement5
      </button>
      <button onClick={() => dispatch({ type: "increment10", value: 10 })}>
        secondCountinc 10
      </button>
      <button onClick={() => dispatch({ type: "decrement10", value: 10 })}>
        second decre 10
      </button>
      <button onClick={() => dispatch({ type: "reset", value: 0 })}>
        reset
      </button>
    </div>
  );
}
export default ComponetnC;
