import { useState } from "react";
import ComponentB from "./componentB";

function ComponentA({ name }) {
  const [tex, setTex] = useState("ds");
  return (
    <div>
      <h1>component A</h1>
      {tex}

      <ComponentB nam={[{ namee: "dadid" }]} setName={(text) => setTex(text)} />
    </div>
  );
}
export default ComponentA;
