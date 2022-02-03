// import React from "react";
import { useState, useEffect, createContext } from "react";
import axios from "axios";
import ComponentA from "./componetns/componentA";
// import { createContext } from "react";
import "./App.css";
export const userContext = createContext();
export const user = createContext();
function App() {
  const [posts, setPosts] = useState("posts");
  const [response, setRespons] = useState([]);
  const [id, setId] = useState(5);
  const [err, setErr] = useState("");

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
      .post(`https://jsonplaceholder.typicode.com/posts/`, inputs)
      .then((res) => console.log(res));
  };

  return (
    <div>
      <h1>hello</h1>
      <user.Provider value={"ada yenda"}>
        <userContext.Provider value={"DAVID"}>
          <ComponentA name={"david"} />
        </userContext.Provider>
      </user.Provider>
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
