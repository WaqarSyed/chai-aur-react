import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// function App() {
//   return <h1> Chai aur React</h1>;
// }

// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     visit google
//   </a>
// );
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "click me to visit Google",
// };

// const reactElement = React.createElement(
//   "a",
//   { href: "https://google.com", target: "_blank" },
//   "Click me to visit google"
// );
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
