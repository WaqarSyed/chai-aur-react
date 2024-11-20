import { useState } from "react";
import AddTodo from "./components/AddTodo";
import "./App.css";
import Todos from "./components/Todos";

function App() {
  const [editTodo, setEditTodo] = useState(null);
  return (
    <>
      <h1 className="text-3xl"> Learn about Redux</h1>
      <AddTodo editTodo={editTodo} setEditTodo={setEditTodo} />
      <Todos setEditTodo={setEditTodo} />
    </>
  );
}

export default App;
