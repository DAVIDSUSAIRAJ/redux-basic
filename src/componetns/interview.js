import { useEffect } from "react";

function Inteview(params) {
  const arryObj = [{ title: "a" }, { title: "b" }, { title: "c" }];

  let result = [{ title: "a1" }, { title: "b1" }, { title: "c1" }];

  const result1 = arryObj.map((arr, index) => {
    if (arr.title == "a") {
      return ({...arr,title:"a1"});
    } else if (arr.title == "b") {
      return ({...arr,title:"b1"});
    } else if (arr.title == "c") {
      return ({...arr,title:"c1"});
    }
  });
  const result2 = arryObj.map((arr, index) => {
    if (arr.title == "a1") {
      return { title: "a1" };
    } else if (arr.title == "b1") {
      return { title: "b1" };
    } else if (arr.title == "c1") {
      return { title: "c1" };
    }
  });

  console.log(result1);
  console.log(result2);

  useEffect(() => {
    return () => {
      // component willunmont
    };
  }, []);

  return (
    <div>
      <h1>interview</h1>
    </div>
  );
}
export default Inteview;
