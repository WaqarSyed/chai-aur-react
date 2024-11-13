# What is useContext(), what is purpose of useContext, Use cases and effective design practices for useContext.

- The **useContext** hook in React is powerful tool for managing and sharing data across components without having
  to pass down the props manually through each level. It's expecially useful in scenarios where multiple components
  need access to the same data, and it simplifies state management across your application. Let's dive into the purpose, use cases, and effective design practices for useContext.

## 1. Purpose of useContext

- The useContext hook allows components to directly access values (state or functions) provided by a **Context**.
  A Context in React is like a "global" data container that can be accessed by any component in the component tree, removing the need to pass down props at multiple levels.

## 2. Creating Context and using useContext

- To use **useContext**, you need to:

  - **Create** a Context using React.createContext.
  - **Provide** the Context at the top level with a Provider component.
  - **Consume** the Context with useContext in any component that needs access to its values.

### Basic Structure

#### Step 1 : Create the Context

- You create a Context by calling React.createContext, which returns an object containing a Provider and Consumer component. You usually export this Context so other components can import and use it.

```javascript
import React, { createContext } from "react";

const MyContext = createContext();

export default MyContext;
```

#### Step 2 : Set up the Provider

- In the component where you want to define the context’s values, use the Provider component. It wraps all components that need access to the Context values and allows you to pass data (state and functions) as a prop.

```javascript
const MyProvider = ({children}) => {
    const [value, setValue] = useState("Hello, Context !")

    return (
        <MyContext.Provider value={{value, setValue}}>
        {children}
        <MyContext.Provider>
    )
}

export default MyProvider
```

- value={{ value, setValue }}: This value prop in Provider holds any data you want to make available throughout the app.

#### Step 3: Consuming the Context with useContext

- In any child component, you can access the context data directly by calling useContext.

```javascript
import React, { useContext } from "react";
import MyContext from "./MyContext";

const MyComponent = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue("Updated Context!")}>Update</button>
    </div>
  );
};
```

## 3. Use Cases for useContext

- **Global State**: Manage global states like themes, user authentication, and language settings.
- **Nested Component Data**: Share data across deeply nested components without prop drilling.
- **Configuration Settings**: Share app-wide configurations, such as API endpoints or feature toggles.
- **Multiple Providers**: Use multiple Contexts to handle different types of state in your app, e.g., separate Contexts for user data, theme settings, etc.

## 4. Designing Context Effectively

- To make the most of useContext, here are some best practices:

### Keep Contexts Focused

- Avoid overloading a single Context with too much data. It’s often better to create multiple, specialized Contexts for different parts of the application. For example, you might create separate Contexts for user authentication and UI theme settings rather than mixing them in one.

### Use Context Sparingly for State Management

- While useContext is great for simple, lightweight data, it can become inefficient for complex state management (such as data with many dependencies). In such cases, consider using useReducer with useContext, or even reach for a state management library like Redux if your app’s needs are complex.

### Memoize Context Values

- If the values in your Context change often, it’s a good idea to memoize them with useMemo to avoid unnecessary re-renders in consuming components.

```javascript
const MyProvider = ({ children }) => {
  const [value, setValue] = useState("Hello, Context!");

  const contextValue = useMemo(() => ({ value, setValue }), [value]);

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
```

- useMemo prevents recalculations of contextValue unless value changes, reducing re-renders for consuming components.
