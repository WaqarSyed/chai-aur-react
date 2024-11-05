import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let channelName = "Chai aur Code";

  return (
    <>
      <h1 className="bg-green-400 txt-black p-4 rounded-xl mb-4">
        Tailwind Css
      </h1>
      <Card channel={channelName} />
    </>
  );
}

export default App;
