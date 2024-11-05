import { useEffect, useCallback, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);

  // useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumAllowed) str += "0123456789";
    if (isCharAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * (str.length + 1));
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, isNumAllowed, isCharAllowed, setPassword]);

  const CopyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isCharAllowed, isNumAllowed, passwordGenerator]);

  return (
    <div className=" w-full py-4 max-w-md mx-auto shadow-md px-4 my-8 rounded-lg text-orange-600 bg-gray-600 ">
      <h1 className="text-white my-3 text-center ">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          placeholder="password"
          className="outline-none py-1 px-3 w-full"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={CopyToClipboard}
          className="bg-blue-500 px-3 hover:bg-blue-700 focus:outline-none outline-none py-0.5 shrink-0 text-white "
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex gap-x-1 items-center">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label>length: {length}</label>
        </div>
        <div className="flex gap-x-1 items-center">
          <input
            type="checkbox"
            defaultChecked={isNumAllowed}
            onChange={() => setIsNumAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Number </label>
        </div>
        <div className="flex gap-x-1 items-center">
          <input
            type="checkbox"
            defaultChecked={isCharAllowed}
            onChange={() => setIsCharAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput">Character </label>
        </div>
      </div>
    </div>
  );
}

export default App;
