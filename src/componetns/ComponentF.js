import { useContext } from "react";

import { CounterContext } from "./ComponentD";
function ComponentF(params) {






















  
  const Countervalue = useContext(CounterContext);
  return (
    <div>
      <h1>COMPONENT f</h1>
      {Countervalue.countState}
      <button onClick={() => Countervalue.countDispatch("decrement")}>
        minus 1
      </button>
    </div>
  );
}
export default ComponentF;
