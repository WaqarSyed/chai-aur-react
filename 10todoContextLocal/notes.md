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

## 5. Structure Data Thoughtfully

- Store only essential data in local storage (e.g., user settings, small pieces of UI state) to avoid large, nested objects, which can slow down read/write operations and the app’s load time.

## 6. Handle Edge Cases (Invalid or Outdated Data)

- Local storage data can sometimes become outdated or corrupt. Wrap the JSON.parse() call in a try-catch block and set default values if an error occurs.

```javascript
const initialState = (() => {
  try {
    return JSON.parse(localStorage.getItem("myAppData")) || defaultData;
  } catch (error) {
    console.error("Failed to load data from local storage:", error);
    return defaultData;
  }
})();
```

## 7. Support Clear or Reset Functions

- Provide a function in your context to clear or reset the stored data. This is useful for logout flows or when a user wants to reset the app’s settings.

```javascript
const clearData = () => {
  localStorage.removeItem("myAppData");
  setState(defaultData);
};
```

## 8. Consider JSON Schema Validation

- For larger apps, use JSON schema validation (e.g., ajv library) to validate stored data. This can prevent issues when the structure of your context changes during app updates.

## 9. Keep the Context Purpose-Focused

- Use context only for values needed across multiple components to avoid bloating the context state. For values needed in a single component or subtree, use local state instead.
