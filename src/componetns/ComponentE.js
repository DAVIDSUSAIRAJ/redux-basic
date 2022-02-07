import ComponentF from "./ComponentF";
import { CounterContext } from "./ComponentD";
import { useContext } from "react";
function ComponentE(params) {
  const CountContext = useContext(CounterContext);

  return (
    <div>
      <h1>COMPONENT E</h1>
      {CountContext.countState}
      <button onClick={() => CountContext.countDispatch("increment")}>
        plus 1
      </button>
      <ComponentF />
    </div>
  );
}
export default ComponentE;
