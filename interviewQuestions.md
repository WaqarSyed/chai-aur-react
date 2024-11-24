# Common Interview Questions for React Developer

## 1. Advantages and Disadvantages of React

- Advantages of React include its ability to handle complex user interfaces, its flexibility and reusability of components, and its performance optimization through the use of Virtual DOM. Disadvantages include a steep learning curve for beginners and the need for external libraries or tools to complete a full-featured application.

## 2. What does DOM stand for ?

- DOM stands for Document Object Model.

## 3. What is Virtual DOM?

- Virtual DOM is a lightweight in-memory representation of the actual DOM. It is used to improve the performance of updates and changes to the actual DOM by reducing the number of expensive DOM manipulations.

## 4. How does Virtual DOM works ?

- Virtual DOM works by comparing the current Virtual DOM tree with a new Virtual DOM tree, and then applying the minimal set of changes to the actual DOM. This allows React to efficiently update the user interface without causing unneccessary re-renders or layout changes.

## 5. What is the difference between Shadow DOM and Virtual DOM ?

- Shadow DOM refers to a feature of web browsers that allows developers to create a separate DOM tree, called a shadow tree, that is attached to a specific element and is hidden from the main document. Virtual DOM is concept used in React to optimize the performance of updates to the user interface, whereas shadow DOM is feature of web browsers that allows for scoping of CSS and JavaScript within a specific element.

## 6. What are the differences between Real DOM and Virtual DOM ?

- Real DOM is the actual tree-like structure of a web page, which can be manipulated directly to change the layout or content of the page. Virtual DOM is a lightweight in-memory representation of the actual DOM, which is used to optimize the performance of updates to the user interface.

## 7. What is React Fiber ?

- React Fiber is a new reconciliation algorithm that was introduced in React 16. It is designed to improve the performance and flexibility of React by breaking down the render process into the smaller , asynchronous chunks.

## 8. What is the main goal of React Fiber?

- The main goal of React Fiber is to improve the performance and responsiveness of web applications by breaking down the render process into smaller, asynchronous chunks. This allows React to more effectively utilize the main thread and to better handle complex user interfaces.

## 9. What is reconciliation ?

- Reconciliation is the process that React uses to determine the minimal set of changes to be made to the actual DOM. It compares the current virtual DOM tree with a new virtual DOM tree, and then applies the minimal set of changes to the actual DOM.

## 10. What is JSX?

- JSX is a syntax extension for JavaScript that allows developers to write HTML-like elements in thir JavaScript code . It is commonly used in React to describe the structure and content of a components's user interface.

## 11. Can browsers read a JSX file ?

- Browsers cannot read JSX file directly. They must be transpiled , or converted, to JavaScript before they can be interpreted by the browser.

## 12. Explain how Virtual DOM works.

- Virtual DOM is a lightweight, in-memory representation of the actual DOM.
  It is used to improve the performance of updates and changes to the actual DOM by reducing the number of expensive DOM manipulations.

- When a component's state or prop change, React will create a new Virtual DOM tree, compare it to the previous tree, and then apply only the minimal set of changes necessary to the actual DOM. This improves the performance of the application and reduces the number of un-necessary re-renders.

## 13. What are React components?

- In React, everything is a component. A component is a small, reusable piece of code that represents a part of a User Interface.

- Components can be defined as either a class or a function and can include a combination of HTML, CSS and JavaScript code. These components can also be nested and reused throughout the application, which makses it easy to manage and maintain the application's user interface.

## 14. What is the meaning of the component-based architecture of React?

- The component-based architecture of React allows developers to build complex user interfaces by breaking them down into smaller, reusable components. Each component can manage its own state and props, and can be easily reused throughout the application. This structure makes it easy to understand , test, and maintain the application's codebase.

## 15. What are functional components?

- Functional components in React are simply JavaScript functions that return a React element. They do not have state or lifecycle methods and are used for simple, stateless components.

## 16. What are class components in React?

- Class components in React are defined using the ES6 class syntax. They have access to state and lifecycle methods and are used for more complex, stateful components.

## 17. What is the difference between functional and class components in React?

- The main difference in functional and class components in React is that functional components are simple and do not have lifecycle methods , whereas class components have access to state and lifecycle methods and are more powerful.

Additionally , functional components use hooks for state management.

## 18. How to use CSS in React?

- In React, CSS can be added to a component in several ways :
  - Using inline styles
  - Using a CSS file and importing it into the component
  - Using a CSS preprocessor like Sass or Less
  - Using a CSS-in-JS library like styled-components

## 19. How does rendering work in React?

- React's rendering process begins when a components's state or props change. React will create a new Virtual DOM tree, compare it to the previous tree, and then apply only the minimal set of changes necessary to the actual DOM. This process is called **reconciliation**.

## 20. What are States in React?

- State in React is an object that holds data that can change, and it is managed by a component. It is used to store and update the component's data and can be passed down to the child components as props.

State can be updated using the setState method, which triggers a re-render of the component, updating the user interface.

## 21. What are Props in React?

- Props in React are used to pass data from a parent component to a child component. They are essentially a way to pass data and methods down the component tree. Props are read-only, meaning that they cannot be modified by the child component.

## 22. What is children prop?

- The children prop is a special prop that is used pass children elements to a component. It is used to pass elements between components, such as a list of items or a set of nested components.

## 23. What is a higher-order component in React?

- A higher-order component (HOC) is function that takes a component as an argument and returns a new component with additional functionality. HOCs are used to reuse component logic, such as authentication or performance optimization.

## 24. How to create props proxy for HOC component?

- To create a props proxy for an HOC component, you can use the React.forwardRef function. This function allows you to pass props through to the wrapped component, preserving the original component's props.

## 25. What are controlled components?

- Controlled components are components that are controlled by the state of the parent component. The parent component manages the component's state, and the child component's behaviour is determined by the parent component's state.

## 26. What are uncontrolled components?

- Uncontrolled components are components that manage their own state internally, and their behavior is not determined by the state of parent component.

## 27. How to update state in React class components?

- To update state in a React class component, you can use the setState method. This method takes an object or function as an argument, and it will merge the new state with the existing state.

## 28. How to update state in React functional component?

- To update state in React functional component, you can use the useState hook. This hook returns an array containing the current state and a function to update it.

## 29. How to differentiate between State and Props?

- State is the internal data of a component that can change and is managed by the component itself. Props are external data passed to a component from its parent component. State can be updated by the component, whereas props cannot be updated by the component.

## 30. What is Lifting State Up in React?

- Lifting state up in React refers to the process of moving state management from a child component to its parent component. This is done to make the state more easily accessible and manageable for the entire component tree.

## 31. What is an Event in React?

- An Event in React is a way to respond to user interactions such as clicks, hover, or form submissions.

## 32. How to Handle Events in React(for both functional and class components)?

- In React, events can be handled using the _on_ Keyword, followed by the event name and a callback function. For example, to handle a button click event, you would use onClick={handleClick}. This can be done in both functional and class components.

## 33. What is the difference between HTML and React Event Handling?

- In HTML, events are handled using event attributes, such as onclick or onchange. In React, events are handled using the on keyword and a callback function. React's event handling system is more powerful and flexible than the traditioal HTML event handling system.

## 34. What are synthetic events in React?

- Synthetic events in React are a cross-browser compatible way to handle events. They are used to normalize the behaviour of different browser event systems and provide a consistent API for handling events.

## 35. How to pass parameter to an event handler?

- To pass a parameter to an event handler, you can use an arrow function to wrap the event handler. For example:

```html
<button onClick={ () => {handleClick(parameter)}}>
  </button>
```

## 36. What are React Hooks?

- React Hooks are functions that allow you to use state and other React features in functional components. They were introduced in React 16.8.

## 37. When were the React Hooks introduced first?

- React hooks were first introduced in React 16.8 in 2019.

## 38. Can you explain the useState hook with examples?

- The useState hook allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. Here's an example of how to use the useState hook:

```javascript
import React, { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
export default MyComponent;
```

## 39. Can you explain the useEffect hook?

- The useEffect hook allows you to run side effects, such as fetching data or updating the DOM, in a functional component. It takes a callback function as its first argument, which is called after the component has rendered. Here's an example of how to use the useEffect hook:

```javascript
import React, { useState, useEffect } from "react";

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://my-api.com/data");
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);
  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
```

- The useEffect hook is used to run an async function fetchData that fetches data from an API and updates the component's state with the result. The empty array [] passed as the second argument to useEffect means that the effect will only run once, when the component is first rendered.

- The useEffect hook allows the component to update its state and re-render in response to changes in some variable. In this case, when the component is first rendered, the data is fetched and the component re-renders with the updated data.

## 40. When are we using the useMemo hook and why ?

- useMemo is a hook that allows you to memoize a value. It is used to optimize the performance of a component by only re-computing a value if its dependencies have changed. This can be useful for avoiding expensive calculations or rendering operations. Here's an example of how to use the useMemo hook:

```javascript
import React, { useState, useMemo } from "react";

function MyComponent() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);

  const result = useMemo(() => {
    // this a costly calculation

    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
      sum += i;
    }
    return sum;
  }, [a, b]);

  return (
    <div>
      <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
      <p> The result is : {result}</p>
    </div>
  );
}

export default MyComponent;
```

- In this example, the useMemo hook is used to memoize the result of a costly calculation that depends on the values of a and b. The useMemo hook takes two arguments : the first is the function that performs the calculation, and the second is an array of dependencies.

- The component has two input fields, where the user can set the values of a and b. When either of the inputs change, the component re-renders, but the result is only recalculated if a or b changed, which is determined by the dependencies array [a,b] .

- This prevents the costly calculation from being performed every time the component re-renders, improving the performance of the application.

## 41. What is useRef being used for?

- useRef is a hook that allows you to create a refference to a DOM node or a Javascript object. It can be used to access a DOM node directly, or to store a value that should not cause a re-render when it changes. Here's an example of how to use the useRef hook :

```javascript
import React, { useRef } from "react";

function MyComponent() {
  const inputRef = useRef(null);
  function handleClick() {
    inputRef.current.value = "Hello, World";
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Update Input</button>
    </div>
  );
}
export default MyComponent;
```
