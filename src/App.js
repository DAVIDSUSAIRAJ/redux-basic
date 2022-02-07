// import React from "react";
import {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";
import axios from "axios";
import ComponentA from "./componetns/componentA";
import ComponetnC from "./ComponetnC";
import ComponentD from "./componetns/ComponentD";
import Inteview from "./componetns/interview";
// import { createContext } from "react";
import "./App.css";
export const userContext = createContext();
export const user = createContext();

// USE REDUCER WITH USE CONTEXT
// FIRST INTIALIZEVALUE
let intialstate = 0;
// END INTIALIZE
let reducers = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

      break;
    case "decrement":
      return state - 1;

      break;
    default:
      return intialstate;
  }
};

// END REDUCER WITH USE-CONTEXT

function App() {
  const counterContext = createContext();
  const [count, dispatch1] = useReducer(reducers, intialstate);
  const [posts, setPosts] = useState("posts");
  const [response, setRespons] = useState([]);
  const [id, setId] = useState(5);
  const [err, setErr] = useState("");

  // let sampleString = "just for fun";
  // let sampleArray = sampleString.split(" ");
  // let sampleReverse = sampleArray.reverse();
  // let result = sampleReverse.join(" ");
  // console.log(result);

  // let array = [88, 76, 56, 9, 10, 88, 45, 56, 23, 0, 23, 32];

  // let newArr = [];
  // array.forEach((arr) => {
  //   if (!newArr.includes(arr)) {
  //     newArr.push(arr);
  //   }
  // // });
  // let sortList = newArr.sort((a, b) => {
  //   return b - a;
  // });
  // console.log(sortList);
  let a = 3;
  let aa = new Number(5);
  console.log(a === aa);

  console.log(typeof aa);
  console.log(typeof a);
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const f = fruits.entries();
  let x = "";
  // f.array.forEach(([key, value]) => {});
  console.log(f);
  // console.log(typeOf(a));
  // let numbers =[88, 76, 56, 9, 10, 88, 45, 5623, 0, 23, 3]
  // let result1 = [...new Set(array)];
  // let filt = array.filter((arr, index) => {
  //   if (array.indexOf(arr) !== index) return arr;
  // }).sort((a, b) =>  a - b
  // );
  // console.log(filt);

  // let result2 = result1.sort((a, b) => {
  //   return b - a;
  // });
  // console.log(result2);
  // let array = ["A", "B", "A", "C", "B"];
  // let uniqueChars = [...new Set(array)];

  // console.log(uniqueChars);

  // let newArry = array.sort((a, b) => {
  //   if (a < b) return -1;
  //   if (a > b) return 1;
  //   if (a == b) return 0;
  // });
  // let newArray = array.sort((a, b) => {
  //   return b - a;
  // });
  // console.log(newArray);
  // let obj = {
  //   fname: "david",
  //   lname: "susairaj",
  // };
  // console.log(Object.entries(obj));

  let arr = [1, 2, 3, 4, 5];
  let arrstring = [];
  arr.forEach((ar, index) => {
    arrstring.push(index, ar);
  });
  // let result = toString(arrstring)
  let result = arrstring.join(" ");
  let result1 = arrstring.join();
  let pus = [...result1];

  console.log(arrstring);
  console.log(result);
  let resu = pus.filter((value) => {
    if (Number(value) == value) {
      return value;
    }
  });
  let strNO = resu.map((va) => {
    return Number(va);
  });

  let sor = strNO
    .filter((val, ind) => {
      if (strNO.indexOf(val) === ind) {
        return val;
      }
    })
    .sort((a, b) => {
      return a - b;
    });
  console.log(resu);
  console.log(strNO);
  console.log(sor);
  // let stringArray = Array.from(result);
  // console.log(stringArray);
  // console.log(result);

  // let newArr = [];
  // let keyValueObject = Object.entries(obj).forEach(([key, value], index) => {
  //   newArr.push(key, value, index);
  // });
  // let result = newArr.join(" ");
  // console.log(result);
  // console.log(newArr);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/post/`)
      .then((res) => {
        // console.log(res);
        setRespons(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        setErr(err.message);
      });
  }, [posts, id]);
  const handelDel = (e, id) => {
    e.preventDefault();
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((ress) => console.log(ress));
  };
  // forms
  const [inputs, setInputs] = useState({});
  // inputs={
  //   title:"any title in input",
  //   body:"any body in input"
  // }
  // YEN TITLE BODY KODUTHURUKKEN YENDRALL SERVER LA ULLADHULA TITLE AND BODY DHAAN IRUKKKU.SO  I ADD THAT;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    axios
      .post(`https://jsonplaceholder.typicode.com/posts /`, inputs)
      .then((res) => console.log(res));
  };

  return (
    <div>
      <h1>hello</h1>

      <Inteview />
      <ComponentD />
      <counterContext.Provider
        value={{ counter: count, counterdispatch: dispatch1 }}
      >
        <ComponetnC />
        <user.Provider value={"ada yenda"}>
          <userContext.Provider value={"DAVID"}>
            <ComponentA name={"david"} />
          </userContext.Provider>
        </user.Provider>
      </counterContext.Provider>
      {count}
      <input type="text" onChange={(e) => setId(e.target.value)}></input>
      <button onClick={() => setPosts(id)}>posts</button>
      <button onClick={() => setPosts("comments")}>commetns</button>
      {/* {JSON.stringify(posts)} */}

      {/* <ul>
        {response.map((resp) => (
          <li key={resp.id}>{JSON.stringify(resp)}</li>
        ))}
      </ul> */}
      <p>{response === null ? "...loading" : response.title}</p>
      <p>{err}</p>
      <table
        style={({ border: "1px solid red" }, { borderCollapse: "collapse" })}
      >
        <thead>
          <tr style={{ border: "1px solid red" }}>
            <th>id</th>
            <th>name</th>
            <th>body</th>
          </tr>
        </thead>
        {response.map((resp) => {
          return (
            <tbody key={resp.id}>
              <tr style={{ border: "1px solid red" }}>
                <td style={{ border: "1px solid red" }}>{resp.id}</td>
                <td style={{ border: "1px solid red" }}>{resp.title}</td>
                <td style={{ border: "1px solid red" }}>{resp.body}</td>
                <td>
                  <button onClick={(e) => handelDel(e, resp.id)}>delete</button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      {/* form */}
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="title"
            value={inputs.title || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your age:
          <input
            type="text"
            name="body"
            value={inputs.body || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
export default App;
