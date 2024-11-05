import { useState } from "react";
import AddTodo from "./components/AddTodo";
import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1> Learn about Redux</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
