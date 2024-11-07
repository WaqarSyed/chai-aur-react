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
            onClick={() => setColor("#b91c1c")}
          >
            {" "}
            Red{" "}
          </button>

          <button
            className="bg-gray-700 px-3 py-2 text-white rounded-xl outline-none"
            onClick={() => setColor("#374151")}
          >
            {" "}
            Gray{" "}
          </button>
          <button
            className="bg-red-900 px-3 py-2 text-white rounded-xl outline-none"
            onClick={() => setColor("#7f1d1d")}
          >
            {" "}
            Maroon{" "}
          </button>
          <button
            className="bg-orange-700 border-l-orange-700 px-3 py-2 text-white rounded-xl outline-none"
            onClick={() => setColor("#c2410c")}
          >
            {" "}
            Orange{" "}
          </button>
          <button
            className="bg-indigo-700 border-l-indigo-700 px-3 py-2 text-white rounded-xl outline-none"
            onClick={() => setColor("#4338ca")}
          >
            {" "}
            Indigo{" "}
          </button>
          <button
            className="bg-green-700 border-l-green-700 px-3 py-2 text-white rounded-xl outline-none"
            onClick={() => setColor("#15803d")}
          >
            {" "}
            Green{" "}
          </button>
          <button
            className="bg-lime-700 px-3 py-2 text-white rounded-xl outline-none"
            onClick={() => setColor("#4d7c0f")}
          >
            {" "}
            Lime{" "}
          </button>
          <button
            className="bg-cyan-500 px-3 py-2 text-white rounded-xl outline-none"
            onClick={() => setColor("#06b6d4")}
          >
            {" "}
            Cyan{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
/*

 

*/
