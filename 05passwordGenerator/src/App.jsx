import { useEffect, useCallback, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);

  // useRef Hook
  const passwordRef = useRef(null);
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumAllowed) str += "0123456789";
    if (isCharAllowed) str += ".,?/()!~@#$%^&*:";

    for (let index = 1; index <= length; index++) {
      const char = Math.floor(Math.random() * (str.length + 1));
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, isCharAllowed, isNumAllowed, setPassword]);

  const CopyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, isCharAllowed, isNumAllowed, generatePassword]);
  return (
    <div className="w-full py-4 max-w-md mx-auto shadow-md px-4 my-8 rounded-lg text-orange-600 bg-gray-600">
      <h1 className="text-white my-3 text-center">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          className="outline-none py-1 px-3 w-full"
          type="text"
          value={password}
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={CopyToClipboard}
          className="bg-blue-500 px-3 hover:bg-blue-700 focus:outline-none outline-none py-0.5 shrink-0 text-white"
        >
          Copy
        </button>
      </div>
      <div className="flex flex-wrap gap-x-3">
        <div className="flex gap-x-1 items-center">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label> length : {length}</label>
        </div>
        <div className="flex gap-x-1 items-center">
          <input
            type="checkbox"
            defaultChecked={isNumAllowed}
            onClick={() => setIsNumAllowed((prev) => !prev)}
          />
          <label> Number </label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={isCharAllowed}
            onClick={() => setIsCharAllowed((prev) => !prev)}
          />
          <label> Character </label>
        </div>
      </div>
    </div>
  );
}

export default App;
/*
! classes for main div : 
* classes for h1 : 
? classes for p.input and btn : 
! classes for p.input : 
* classes for btn : 
? classes for div containing range, checkboxes
classes for each div : 
*/
