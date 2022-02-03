import { useContext, useState } from "react";
import { user, userContext } from "../App";

function ComponentB({ setName, nam }) {
  //   const [lname, setLname] = useState();
  //   setLname("susairaj");
  // const [name, setName] = useState("");
  const Name = useContext(userContext);
  const userfeeling = useContext(user);
  const object = nam;
  console.log(object);
  setName("ada poda");
  return (
    <div>
      <h1>component B</h1>
      {JSON.stringify(object)}

      {/* {props.name} */}
      <br></br>
      {Name}
      {userfeeling}

      {/* {name} */}
      {/* <button onClick={() => setName("ada poda")}>click child to parent</button> */}
    </div>
  );
}
export default ComponentB;
