import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// function createObject() {
//   console.log("outermost this", this);

//   return {
//     arrowFunction: () => {
//       console.log("arrowFunction this", this);
//     },
//     functionKeywordFunction: function () {
//       console.log("functionKeyword this", this);
//     },
//   };
// }

// const obj = createObject();
// console.log("obj", obj);
// obj.arrowFunction();
// obj.functionKeywordFunction();

root.render(<App />);
