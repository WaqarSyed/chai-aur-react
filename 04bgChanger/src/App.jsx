import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12  inset-x-0">
        <div className="flex flex-wrap gap-3 justify-center shadow-lg rounded-xl bg-white px-3 py-2">
          <button
            className="bg-red-700 px-3 py-2 text-white rounded-xl outline-none"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="bg-green-600 px-3 py-2 text-white rounded-xl outline-none"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="bg-blue-700 px-3 py-2 text-white rounded-xl outline-none"
            onClick={() => setColor("blue")}
          >
            {" "}
            Blue{" "}
          </button>
          <button
            onClick={() => setColor("silver")}
            className="bg-slate-300 px-3 py-2 text-white rounded-xl outline-none"
          >
            silver
          </button>
          <button
            onClick={() => setColor("maroon")}
            className="bg-red-900 px-3 py-2 text-white rounded-xl outline-none"
          >
            Maroon
          </button>
          <button
            onClick={() => setColor("purple")}
            className="bg-purple-700 px-3 py-2 text-white rounded-xl outline-none"
          >
            purple
          </button>
          <button
            onClick={() => setColor("gray")}
            className="bg-gray-500 px-3 py-2 text-white rounded-xl outline-none"
          >
            gray
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
