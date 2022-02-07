import { createContext, useReducer } from "react";
import ComponentE from "./ComponentE";
const intialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return intialState;
  }
};
export const CounterContext = createContext();
function ComponentD(params) {
  const [count, dispatch] = useReducer(reducer, intialState);
  //   const fn = () => {
  //     dispatch("increment");
  //   };

  const obj = {
    a: "one",
    b: "two",
    a: "three",
  };
  console.log(obj);
  console.log(typeof undefined);

  return (
    <div>
      <h1>COMPONENTD</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch("increment")}>Click me</button>
      <CounterContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <ComponentE />
      </CounterContext.Provider>
    </div>
  );
}
export default ComponentD;
