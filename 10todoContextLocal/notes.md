# Context API with localStorage

- Using the Context API with local storage is a powerful approach to persisting data across sessions in React Applications. Here are some pro tips to help you design a clean, efficient solution that leverages both :

## 1. Initialize State with Local Storage

- When creating context, set the initial state by reading from local storage. This ensures that any data stored in local storage will automatically populate your context when the app loads.

```javascript
const initialState =
  JSON.parse(localStorage.getItem("myAppData")) || defaultData;
const [state, setState] = useState(initialState);
```

## 2. Update Local Storage on Context Changes

- Use useContext to synchronize context state with local storage. Whenever the state updates, save it to local storage to keep them in sync.

```javascript
useEffect(() => {
  localStorage.setItem("myAppData", JSON.stringify(state));
}, [state]);
```

## 3. Create a Custom Hook for Context

- Wrapping the context logic in a custom hook can simplify access across your app and help with testing.

```javascript
import { useContext, createContext, useState, useEffect } from "react";

const MyContext = createContext();

export function MyProvider({ children }) {
  const initialState =
    JSON.parse(localStorage.getItem("myAppData")) || defaultData;
  const [state, setState] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("myAppData", JSON.stringify(state));
  }, [state]);

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  return useContext(MyContext);
}
```

## 4. Optimize Storage Reads and Writes

- To prevent excessive writes, especially for complex states, consider debouncing the setItem call within useEffect using setTimeout or a similar strategy. This reduces storage operations and improves performance.

```javascript
useEffect(() => {
  const timer = setTimeout(() => {
    localStorage.setItem("myAppData", JSON.stringify(state));
  }, 500);

  return () => clearTimeout(timer); // Clear timeout if state changes again before 500ms
}, [state]);
```
