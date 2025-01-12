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

- JSX is a syntax extension for JavaScript that allows developers to write HTML-like elements in their JavaScript code . It is commonly used in React to describe the structure and content of a components's user interface.

## 11. Can browsers read a JSX file ?

- Browsers cannot read JSX file directly. They must be transpiled , or converted, to JavaScript before they can be interpreted by the browser.

## 12. Explain how Virtual DOM works.

- Virtual DOM is a lightweight, in-memory representation of the actual DOM.
  It is used to improve the performance of updates and changes to the actual DOM by reducing the number of expensive DOM manipulations.

- When a component's state or prop change, React will create a new Virtual DOM tree, compare it to the previous tree, and then apply only the minimal set of changes necessary to the actual DOM. This improves the performance of the application and reduces the number of un-necessary re-renders.

## 13. What are React components?

- In React, everything is a component. A component is a small, reusable piece of code that represents a part of a User Interface.

- Components can be defined as either a class or a function and can include a combination of HTML, CSS and JavaScript code. These components can also be nested and reused throughout the application, which makes it easy to manage and maintain the application's user interface.

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

- The children prop is a special prop that is used to pass children elements to a component. It is used to pass elements between components, such as a list of items or a set of nested components.

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

- In HTML, events are handled using event attributes, such as onclick or onchange. In React, events are handled using the on keyword and a callback function. React's event handling system is more powerful and flexible than the traditional HTML event handling system.

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

## 42. How to create refs?

- To create a ref, you can use the useRef hook, which returns a ref object. You can then assign this object to a ref attribute on a JSX element.

## 43. What are forward refs and can you give me a code example for it?

- A forward ref is a way to pass a ref through a component to a child component. It allows you to access the ref of a child component from the parent component. Here's an example of how to create a forward ref:

```javascript
import React, { forwardRef } from "react";

const ChildComponent = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

function ParentComponent() {
  inputRef = React.useRef(null);

  function handleClick() {
    inputRef.current.value = "hello, world";
  }
  return (
    <div>
      <ChildComponent ref={inputRef} />
      <button onClick={handleClick}>Update Input</button>
    </div>
  );
}
export default ParentComponent;
```

- In this example , the ChildComponent is defined as a "forward ref" component using the forwardRef higher-order component. The forwardRef function takes a component and returns a new component that can accept a ref as a prop.

- The ParentComponent has a ref object inputRef that is passed as a prop to the ChildComponent using the ref attribute. Inside the child component , the ref prop is passed as a second argument to the component function , this way is passed to the input element using the ref attribute.

- When the button is clicked , it triggers the handleClick function, which updates the value of the input field by accessing its value property via the ref object. This way. the ref object can be passed through the component hierarchy to access elements deep down in the tree.

## 44. Can you create your custom React hooks ?

- Yes, you can create your custom React hooks by following the naming convention "use" and using state and other hooks inside it.

## 45. What do you need to keep in mind while creating custom React hooks?

- When creating custom React hooks, it's important to keep in mind that they should only call other hooks at the top level and not inside loops or conditions.

- Also, it's important to make sure that the hook only performs one specific action.

## 46. What is the Context API in React?

- The Context API in React allows you to share data between components without passing props through every level of the component tree. It provides a way for components to access data that is "global" to the component tree, such as a user's authentication status or a theme.

- The Context API consists of a Provider component , which provides the data, and a Consumer component , which accesses the data.

## 47. What is React Router?

- React Router is a library for routing in React apps. It allows you to define the different routes in your application and render the appropriate components for each route. This makes it easy to change the displayed content based on the current URL , without having to refresh the page.

## 48. What are Pure components and what is their purpose?

- Pure components are components that only re-render if their props or state have changed. They are optimized for performance , and they can improve the performance of your application by reducing the number of unnecessary re-renders.

- Pure components are also known as "functional components" or "stateless components" and they are defined by a function.

## 49. Can you update the React state directly?

- No, you cannot update the React state directly. You should always use the **setState** method to update the state, which will trigger a re-render of the component.

## 50. What is the purpose of callback function as an argument of **setState()**?

- The callback function passed as an argument to **setState** is called after the state has been updated and the component has re-rendered. It can be used to perform any additional actions, such as sending a network request, that depend on the updated state.

## 51. What is "key" prop and what is the benefit of using it in arrays of elements?

- The "key" prop is used to give a unique identifier to each item in array of elements. When elements are re-rendered, React uses the key to identify which elements have changed , added, or removed. This allows React to update the DOM efficiently , improving the performance of the application.

## 52. What are different phases of component lifecycle in React ?

- The different phases of the component lifecycle in React are :

  - **Mounting** : When a component is being added to the DOM.
  - **Updating** : When a component's props or state change.
  - **Unmounting** : When a component is being removed from the DOM.

## 53. What are the lifecycle methods of React?

- The lifecycle methods of React are methods that are called at specific points during the lifecycle of a component. They include:
  - **componentDidMount** : Called after the component has been added to the DOM.
  - **componentDidUpdate** : Called after the component has been updated.
  - **componentWillUnmount** : Called before the component is removed from the DOM.
  - **render** : Called whenever the component needs to update the DOM.
  - **constructor** : Called before the component is added to the DOM.

## 54. What is the purpose of using super constructor with props argument?

- The purpose of using **super(props) constructor** with the props argument is to call the constructor of parent class and pass in the props. It is necessary because the parent's class constructor sets up the initial state and props of the component and must be called before the child class's constructor.

## 55. Why React uses className over class attribute?

- React uses className attribute over class attribute because class is reserved keyword in JavaScript. Using className avoids any confusion and ensures that the attribute will be interpreted as intended.

## 56. What are fragments ?

- A fragment is a way to group a list of children without adding extra nodes to the DOM. It allows you to return multiple elements from a component's render method without wrapping them in an additional DOM node. Fragments are represented by an empty JSX tag :<> or </>

## 57. Why fragments are better than container divs?

- Fragments are better than container divs because they don't add an extra node to the DOM. This can make the rendered HTML cleaner and more efficient, especially when you have a component that renders a list of items. Additionally, it helps with accessibility because it doesn't create an unnecessary wrapper element around the content.

## 58. What are stateless components ?

- Stateless components , also known as functional components , are components that don't have any internal state. They are defined as a function , they receive props and they return JSX to be rendered. They are simpler , easy to reason about and less prone to bugs than stateful components because they don't have lifecycle methods.

## 59. What are error boundaries in React v16?

- Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors and display a fallback UI. They were introduced in React v16 and they allow you handle errors gracefully and ensures that your application continues to function even if there is an error.

## 60. What is the use of **react-dom** package?

- The **react-dom** package is a package that provides the renderer for React components . It provides the functions that are used to render React components on the web (DOM).

## 61. What will happen if you use **setState()** in constructor?

- If you use **setState()** in constructor , it will cause the component to re-render before it is added to the DOM. This can cause unexpected behaviour and should be avoided. Instead , it is recommended to intialize the state with the constructor's props and use setState() in **componentDidMount.**

## 62. What is the impact of indexes as keys?

- Using indexes as keys can have a negative impact on performance because they don't provide a stable identity for elements, and React has to rely on the order of elements in the array to determine which elements have changed. This can lead to unnecessary re-renders.

## 63. How do you implement Server Side Rendering or SSR?

- To implement Server Side Rendering (SSR) in a React application , you can use a library such as Next.js or ReactDOMServer. These libraries allow you to render your React components on the Server and send the resulting HTML to the browser. This can improve the performance of your application by reducing the initial load time and providing a better experience for search engines.

## 64. What is the lifecycle methods order in mounting?

- The lifecycle methods order in mounting is :

  - **constructor()**
  - **static getDerivedStateFromProps()**
  - **render()**
  - **componentDidMount()**

## 65. What are the lifecycle methods that are going to be deprecated in React v16?

- The lifecycle methods that are going to be deprecated in React v16 are:

  - **componentWillMount**
  - **componentWillReceiveProps**
  - **componentWillUpdate**

## 66. What is the purpose of **getDerivedStateFromProps()** lifecycle method?

- The purpose of **getDerivedStateFromProps()** is to provide a way to synchronize a component's internal state with its props. This lifecycle method is called before **render()** and it allows you to update the internal state based on changes in the props. It is used as an alternative to **componentWillReceiveProps()**.

## 67. What is the purpose of **getSnapshotBeforeUpdate()** lifecycle method?

- The purpose of **getSnapshotBeforeUpdate()** is to capture some information from the DOM before it is potentially changed. This lifecycle method is called right before the browser updates the DOM and it allows you to capture the current scroll position or other information that you might want to use later.

## 68. Why do we need to pass a function to **setState()**?

- We need to pass a function to **setState()** instead of an object because setState() is asynchronous , it batches multiple calls together and it only updates the component once. By passing a function , we ensure that the latest state is used when the component re-renders.

## 69. What is strict mode in React?

- Strict mode is a development-only feature in React that highlights potential problems in an application. When a component is rendered in Strict mode , React will run extra checks and warnings for any potential issues. This can help you identify and fix problems before they become a bigger issue.

## 70. Can component re-render without calling **setState**?

- You can force a component to re-render without calling **setState** by changing its key prop. This will cause React to treat the component as a new one and it will re-render it. This can be useful in some cases, but its generally not recommended because it can cause unnecessary re-renders and negatively impact performance.

## 71. What is the difference between React and ReactDOM?

- React is a JavaScript library for building User Interfaces. It provides a way to build re-usable UI components and manage their state. ReactDOM is a separate library that provides specific methods for interacting with the DOM, such as **render()** and **unmountComponentAtNode()**. ReactDOM is glue that connects React with the DOM.

## 72. Why is ReactDOM separated from React?

- React and ReactDOM are separated to provide better flexibility in different environments. React can be used to build the interfaces on the Web, on Mobile , or on Desktop without having to change the core library. ReactDOM provides the specific methods needed to render components on the Web.

## 73. Is it possible to use React without rendering HTML?

- Yes, it is possible to use React without rendering HTML. React can be used to build user interfaces for native mobile apps or Virtual Reality. React Native and React VR are examples of libraries that allow you to use React to build apps for those environments.

## 74. You can't update props in React. Why?

- You can't update props in React because they are passed down from parent component and are consisdered to be immutable. Instead you should use state to manage data that can change within a component , and pass that data down to child components as props.

## 75. How to focus an input element on page load?

- To focus an input element on page load, you can use the **ref** property to create a reference to the input element , and then call the **focus()** method on that reference in the **componentDidMount()** lifecycle method.

## 76. How to programmatically trigger a click event in React?

- To programmatically trigger a click event in React, you can use the **ref** property to create a reference to the element, and then call the **click()** method on that reference.

## 77. What is bundling in React, and why do we use it?

- Bundling is the process of combining multiple JavaScript files into a single file. This is done to reduce the number of network requests needed to load an application and to improve the performance of the application. There are various bundlers such as **webpack, rollup, parcel** and **browserify**.

## 78. What is code-splitting in React and why do we use it?

- Code-splitting is a technique that allows you to split your application's JavaScript code into smaller chunks. This can improve the performance of your application by only loading the code that is needed for the current page or component. This technique is usually used in combination with a bundler like webpack.

## 79. What is flux?

- Flux is an architecture for managing the state of an application. It is designed to be used with React and it provides a unidirectional data flow, where data is passed down through components in an hierarchical structure.

## 80. What is Redux? Do you know any alternatives?

- Redux is a library for managing the state of an application. It provides a central store to hold the state, and it uses actions and reducers to manage the state changes. Alternatives to Redux are Mobx , Apollo, and Unstated-next.

## 81. What are the core priciples of Redux?

- The core priciples of Redux are :

  - The state of the application is stored in a single immutable state tree
  - The state can only be modified by emitting an action, an object describing the change
  - To specify how the state tree is transformed by actions , you write pure reducers

## 82. What are the downsides of Redux compared to Flux?

- The downsides of Redux compared to Flux are :

  - The learning curve is steeper as it has a lot more concepts
  - It can create unnecessary complexity for small or simple applications
  - It can make debugging more difficult because the state is not visible in the components
  - It can lead to verbose and repetive code because actions and action creators are separate files

## 83. What is the difference between React Context and React Redux?

- React context is a built-in-feature of React that allows you to share data between components without having to pass props down through multiple levels of the component tree. React Redux is a library that allows you to connect your React components to a Redux store. It provides a way to access the state from the store and to dispatch actions to modify the state.

## 84. Why are Redux state functions are called reducers?

- Redux state functions are called reducers because they are used to reduce the current state and an action to the next state. The reducer takes the current state and an action as input and returns the next state.

## 85. What is redux-saga?

- redux-saga is library that allows you to handle side effects in a Redux application by using generator functions. It provides a way to handle async actions and to separate the logic for handling side effects from the rest of the application.

## 86. What is Redux Thunk?

- Redux Thunk is middleware that allows you to write action creators that return a function instead of an action. This function can then be used to perform async logic and dispatch other actions.

## 87. What is the difference between React Native and React?

- React Native is a framework for building mobile applications using React. It provides a way to use React to build apps for IOS and Android. React, on the other hand , is JavaScript library for building user interfaces .

React Native uses a subset of React and provides platform-specific components and APIs to access the device's native features.

## 88. What is NextJS and major features of it?

- NextJS is a framework for building web applications with React. It provides a set of features for building server-rendered React applications , including:

  - Server-side rendering (SSR) out of the box
  - Automatic code splitting for faster load times
  - Built-in development server with hot reloading
  - Easy setup for custom routes with file-system based routing
  - Static site generation (SSG)

## 89. Is it good to use arrow functions in render methods?

- It's generally not good to use arrow functions in the render method because they create a new function on every render , which can negatively impact performance. If a component uses an arrow function in its render method , it will re-create that function on every render and cause the component to re-render even if its props haven't changed.

## 90. What is route based code splitting ?

- Route-based code splitting is a technique that allows you to split your application's JavaScript code into smaller chunks based on the routes in your application. This can improve the performance of your application by only loading the code that is needed for the current page or component.

## 91. Is it possible to use react without JSX?

- Yes, it is possible to use React without JSX. React provides a way to use JavaScript to create elements, and you can use JavaScript to create the same elements that you would create with JSX.

## 92. What is render hijacking in React?

- Render hijacking in React is a technique that allows you to modify the rendered output of a component by wrapping it in another component. The wrapped component can then add or remove elements , change the styles, or modify the behavior of the original component.

## 93. What is React memo function?

- React memo is a higher-order component that allows you to optimize the performance of functional components by memoizing the component's output. It prevents the component from re-rendering when its props haven't changed.

## 94. What is the difference between try catch block and error boundaries?

- Try catch block works with imperative code whereas error boundaries are meant for declarative code to render on the screen.
- A try catch block is language level construct that allows you to handle exceptions that occur during the execution of the code inside the block.

- Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors and display a fallback UI. Error boundaries are used specifically to handle errors in React applications, whereas try-catch block are used to handle exceptions in JavaScript.

## 95. How to fetch data with React Hooks?

- You can use the useEffect hook to fetch data in a React functional component. The useEffect hook allows you to run a side effect , such as fetching data , after the component has rendered. You can also use useState to store the fetched data and update the component when the data is available.

## 96. What is Concurrent Rendering?

- Concurrent rendering is feature of React that allows the browser to continue rendering the rest of the application while a component is being updated. This can improve the user experience by providing smoother animations and reducing the perceived time to load the application.

## 97. What is the difference between async mode and concurrent mode?

- Async mode is an experimental feature that allows React to schedule updates and render components asynchronously. This can improve the performance of an application by reducing the number of updates that needs to processed at the same time. Concurrent mode is a feature that allows React to work in an asychronous way and it's not yet released but it's planned to be in the future.

## 98. What is state mutation and how to prevent it?

- State mutation is when the current state is modified directly, instead of creating a new state object. This can make it difficult to track changes and can lead to unexpected behavior . To prevent state mutation , you should use the spread operator or **object.assign()** to create a new state object and only update the properties that need to be changed.

## 99. What are the benefits of using typescript with React?

- Using TypeScript with React can provide the following benefits:

  - Improved code quality and maintainability
  - Better type checking and fewer runtime errors
  - Improved developer experience with autocompletion and better error messages
  - Better documentation and understanding of the codebase

## 100. What is the purpose of **eslint** plugin for hooks?

- The ESlint plugin for hooks is a set of rules that enforces the rules of hooks as specified by the React team. It helps to prevent common mistakes and inconsistencies when using hooks. It also helps to make sure that hooks are only used in functional components and that they are called in correct order.

# HTML Questions

## 1. What are the different types of input fields available in HTML5 forms?

- HTML5 introduced various types of input fields to enhance form handling and user experience. Here's a list of most common input types:

### Textual Input Fields

- **text** : A simple one-line text input field.
- **email** : For email addresses ; validates input for proper email format.
- **password** : Input for passwords ; characters are masked.
- **url** : For URLs ; validates for proper URL format.
- **tel** : For telephone numbers ; no standard format validation.
- **number** : For numeric input ; includes arrows for incrementing or decrementing.
- **search** : Input optimized for search terms.

### Selection Input Fields

- **checkbox** : For multiple options selection.
- **radio** : For selecting one option from a group.
- **select** : A dropdown list (not an input type but part of forms)

### Date and Time Input Fields

- **date** : For selecting a date
- **time** : For selecting a time
- **datetime-local** : For selecting both date and time (local timezone)
- **month** : For selecting a month and year
- **week** : For selecting a week and year

### File and Media Input Fields

- **file** : For uploading files.
- **image** : For submitting images as buttons.
- **color** : For selecting a color using color picker.

### Specialized Input Fields

- **range** : For selecting a numeric value within a range using a slider.
- **hidden** : An input not visible to the user (useful for hidden data).
- **submit** : For submitting the form.
- **reset** : For resetting the form to its initial state.
- **button** : A clickable button (not associated with the form submission).
- **textarea** : For multi-line text input ( not an input type but essential for forms).

## 2. What are Web Components , and how are they implemented?

- Web Components are a set of technologies that allow developers to create reusable, encapsulated custom elements for web applications. They are framework-agnostic, meaning they work in any framework or even plain HTML/JavaScript.

## 3. What are meta tags, and how do they influence webpage behavior?

- Meta tags are small pieces of HTML code that provide information about a webpage(metadata) to browsers, search engines and other services. They are placed in the _head_ section of an HTML document.

  - Improve SEO (Search Engine Optimization)
  - Control Page Display and Behavior
  - Specify Author or Keywords
  - Control Browser Behavior
  - Social Media Integration

## 4. How can you create an accessible form in HTML?

- Creating an accessible form in HTML ensures that all users, including those with disabilities , can interact with the form effectively. This involves using semantic HTML , proper labeling and accessibility features.

### Key Features of an accessible form :

- **Labels:** Associate each input with a descriptive label
- **Fieldset and Legend:** Group related inputs together for better context.
- **ARIA Attributes:** Use for additional accessibility when needed.
- **Keyboard Accessibility:** Ensure all fields are navigable via keyboard.
- **Validation and Error Messages:** Provide meaningful feedback.

### Example :

```html
<form action="/submit" method="POST">
  <!-- Fieldset for grouping -->
  <fieldset>
    <legend>Personal Information</legend>

    <!-- Label associated with input -->
    <label for="name">Name:</label>
    <input
      type="text"
      id="name"
      name="name"
      required
      aria-required="true"
      aria-describedby="nameHelp"
    />
    <small id="nameHelp">Enter your full name</small>

    <br /><br />

    <label for="email">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      required
      aria-required="true"
      aria-describedby="emailHelp"
    />
    <small id="emailHelp">Example: yourname@example.com</small>

    <br /><br />

    <label for="age">Age:</label>
    <input type="number" id="age" name="age" aria-required="true" />
  </fieldset>

  <br />

  <!-- Grouping radio buttons -->
  <fieldset>
    <legend>Gender</legend>
    <label>
      <input type="radio" name="gender" value="male" />
      Male
    </label>
    <label>
      <input type="radio" name="gender" value="female" />
      Female
    </label>
    <label>
      <input type="radio" name="gender" value="other" />
      Other
    </label>
  </fieldset>

  <br />

  <!-- Submit button -->
  <button type="submit">Submit</button>
</form>
```

## 5. How do you optimize a webpage for SEO using HTML?

- Optimizing a webpage for SEO (Search Engine Optimization) involves using HTML effectively to ensure your content is indexed and ranked well by search engines. Here's how you can do it:

- Use Proper HTML Structure
- Use Semantic elements like **header, footer, article, section and nav** to make your page easier for search engines to understand.
- Include Meta Tags
- Add a descriptive and keyword-rich **title** tag for each page.
- Use the **description** tag for a concise summary of the page.
- Ensure the page is mobile-friendly with **viewport**.

```HTML
        <head>

      <title>Learn SEO Optimization | My Blog</title>
      <meta name="description" content="Discover how to optimize your website for better search engine rankings.">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>

```

- Use descriptive filenames and **alt** attributes for images.
- Compress images to improve page loading speed.
- Use the **srcset** attribute for responsive images.
- Keep URLs short, descriptive, and include keywords.
- Avoid using special characters or long query strings.
- Minimize HTML, CSS, and JavaScript.
- Use lazy loading for images and videos.
- Enable caching and use a Content Delivery Network (CDN).
- Link to other pages on your site using descriptive anchor text.
- Include high-quality external links for credibility.
- Use proper **label** elements for forms.
- Ensure keyboard and screen-reader compatibility.
- Ensure the site is responsive with the meta viewport tag.
- Use **media queries** in your CSS for different screen sizes.

```css
@media (max-width: 768px) {
  body {
    font-size: 16px;
  }
}
```

## 6. What is the purpose of DOCTYPE declaration?

- DOCTYPE declaration in HTML serves as an instruction to the web browser about the version of HTML the webpage is written in . It ensures the browser renders the page correctly by using the appropriate standards.

### Key Purposes of DOCTYPE Declaration :

- The DOCTYPE declaration ensures that the browser operates in standards mode, where it adheres to web standards for rendering.
  Without a DOCTYPE or with an incorrect one, the browser might switch to quirks mode, which tries to emulate non-standard behavior for older, non-compliant web pages.

- Specifies the HTML Version

- Helps maintain cross-browser consistency by encouraging the use of modern web standards.

```html
<!DOCTYPE html>
```

- This tells the browser to render the page in standards mode using the HTML5 specification.

## 7. What are semantic HTML tags, and why are they important?

- Semantic HTML tags are HTML elements that clearly describe their meaning and purpose both to the browser and to developers. These tags provide more meaningful content structure and improve the readability of code.
- Unlike non-semantic tags like _div_ or _span_, semantic tags give a clear indication of the role or type of content they contain.

### Examples of Semantic HTML Tags

- **header**: Represents introductory content or navigation links.
- **nav**: Represents a navigation menu.
- **main**: Represents the main content of the document.
- **section**: Groups related content.
- **article**: Represents independent, self-contained content like a blog post.
- **aside**: Represents content related to the main content (like a sidebar).
- **footer**: Represents footer content of a page or section.

- **strong**: Indicates strong importance, typically bold.
- **em**: Indicates emphasis, typically italic.
- **mark**: Highlights text.
- **time**: Represents a specific time or date.

### Importance of Semantic Tags :

- Improved Accessibility
- Better SEO
- Enhanced Readability and Maintenance
- Standards Compliance
- Improved Browser Behavior

## 8. What is the difference between data-attributes and custom attributes?

- HTML attributes are key-value pairs used to store additional information on an element. Two common types are data attributes and custom attributes. Here's how they differ:

### 1. Data Attributes

- Data attributes are predefined attributes in HTML5 that allow embedding custom data into HTML elements. They must follow a specific naming convention and start with data-.

#### Syntax :

```html
<div data-key="value"></div>
```

#### Purpose :

- To store custom data that can be accessed via JavaScript.
- Useful for embedding metadata in HTML elements without affecting their appearance.

#### Access in JavaScript :

```javascript
const div = document.querySelector("div");
console.log(div.dataset.key); // Output: "value"
```

#### Advantages :

- Recognized by browsers, ensuring proper handling.
- Easy access through the dataset property.
- Ensures the separation of concerns (HTML for structure, JavaScript for behavior).

### 2. Custom Attributes

- Custom attributes are arbitrary attributes added to HTML elements without using the data- prefix. They don’t have any special treatment or recognition by browsers.

#### Syntax :

```html
<div custom-key="value"></div>
```

#### Purpose :

- Can be used for specific purposes in custom setups or frameworks.
- Typically discouraged unless working in a closed or controlled environment.

#### Access in JavaScript :

```javascript
const div = document.querySelector("div");
console.log(div.getAttribute("custom-key")); // Output: "value"
```

#### Disadvantages :

- Not standardized and can lead to conflicts or unexpected behavior in the DOM.
- No special handling or built-in API like dataset.

# CSS Questions

## 1. Explain the difference between relative, absolute, fixed and sticky positioning in CSS?

## 2. How does the z-index property work, and how is it used?

- The z-index property in CSS controls the stacking order of elements along the z-axis(perpendicular to the screen). Elements with higher z-index values are displayed in front of those with lower values.

- **Works with Positioned Elements:** Only applies to elements with position: relative, absolute, fixed, or sticky.
- **Higher Value = On Top:** Elements with greater z-index overlap those with smaller values.
- **Default Value:** The default z-index is auto, which follows the stacking order of the DOM.
- **Stacking Contexts:** A new stacking context is created when an element has a z-index or specific properties like opacity (<1), transform, or filter.

```css
.box1 {
  position: relative;
  z-index: 1; /* Lower layer */
}
.box2 {
  position: relative;
  z-index: 10; /* Higher layer */
}
```

- In this example, .box2 appears on top of .box1.

## 3. What are CSS Grid and Flexbox , and how do they differ?

### CSS Grid :

- A 2D layout system for designing web layouts both rows and columns.
- Ideal for creating entire page layouts or complex grid-based designs.

```css
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: auto;
```

### CSS Flexbox :

- A 1D layout system for arranging items in a row or column.
- Best for aligning and distributing space within a container.

```css
display: flex;
flex-direction: row;
justify-content: space-between;
```

## 4. How can you implement a responsive design using CSS?

### To Implement a Responsive Design in CSS :

- **1.Use Relative Units**
  - Instead of fixed units like px, use em, rem, %, or vw/vh for flexible layouts.
- **2.Media Queries**
  - Adjust styles based on screen size or device characteristics.
- **3.Flexible Layouts**
  - Use Flexbox or CSS Grid for layouts that adapt to screen size.
- **4.Viewport Meta Tag (for mobile devices)**
  - Ensure proper scaling on mobile devices.
- **5.Responsive Images**
  - Use max-width: 100% for images to scale with container size.

## 5. How does the box-sizing property affect element sizing?

- The box-sizing property in CSS determines how the total width and height of an element are calculated.

### Values :

#### 1. content-box (default):

- The width and height only apply to the content area.
- Padding and border are added outside the width and height , increasing the total size of the element.

```css
div {
  width: 200px;
  padding: 20px;
  border: 5px solid;
}
```

- The total width will be 200px + 40px (padding) + 10px (border) = 250px.

#### 2. border-box :

- The width and height include the padding and border within the element's size.
- The element's total size remains the specified width/height , regardless of padding and border.

```css
div {
  width: 200px;
  padding: 20px;
  border: 5px solid;
  box-sizing: border-box;
}
```

- The total width remains 200px, including padding and border.

- **content-box adds padding and border to the element’s width/height, while border-box includes them within the specified width/height.**

## 6. How do CSS variables (custom properties) work?

- CSS variables allow you to store reusable values and apply them throughout your CSS.

### Syntax :

#### 1. Define a variable :

```css
:root {
  --primary-color: #3498db;
  --font-size: 16px;
}
```

#### 2. Use the variable :

```css
body {
  color: var(--primary-color);
  font-size: var(--font-size);
}
```

### Key Features :

- **Global Scope**: Variables defined under :root are globally accessible.
- **Local Scope**: Variables can be scoped to a specific element.
- **Dynamic**: Variables can be updated with JavaScript or within media queries.

### Benefits :

- **Maintainability**: Easier to manage and update values in one place.
- **Reusability**: Reuse values consistently across your stylesheets.

## 7. What is the difference between nth-child() and nth-of-type()?

### 1. nth-child():

- Selects an element based on its position among all sibling elements, regardless of type.
- **Example:** Selects every second child element:

```css
li:nth-child(2) {
  color: red;
}
```

### 2. nth-of-child():

- Selects an element based on its position among sibling elements of the same type.
- **Example:** Selects the second **p** element:

```css
p:nth-of-type(2) {
  color: blue;
}
```

- **nth-child() counts all sibling elements, while nth-of-type() counts only sibling elements of the same type.**

# JavaScript Questions

## 1. Explain the difference between undefined and null in JavaScript?

- A variable that is declared but not assigned a value is **undefined**.
  - It indicates the absence of a value.
- Represents the intentional absence of any object value.
  - It is an object type with a value of **null**.

## 2. What is the difference between synchronous and asynchronous programming?

- **Synchronous:** Blocking, sequential execution.
- **Asynchronous:** Non-blocking, allows multitasking (e.g., using setTimeout, Promises, or async/await).

## 3. Explain the concept of Event bubbling and Event capturing?

- **Event Bubbling:** The event starts from the target element and propagates upward to its ancestors.
- **Event Capturing:** The event starts from the topmost ancestor and propagates downward to the target element.Enable it by setting the third parameter of addEventListener to true.

## 4. What are modules in JavaScript, and how do import and export work?

### Modules in JavaScript :

- Modules are reusable pieces of JavaScript code that can be imported or exported between files.
- They promote code organization and reusability.

### Export :

- Used to make variables, functions, or classes available to other files.

#### 1. Named Export :

- Export multiple items

```javascript
export const name = "John";
export function greet() {
  console.log("Hello!");
}
```

#### 2. Default Export :

- Export a single default item

```javascript
export default function greet() {
  console.log("Default Greeting!");
}
```

### Import :

- Used to bring exported items into another file.

#### 1. Named Import :

- Use the same name as exported.

```javascript
import { name, greet } from "./module.js";
```

#### 2. Default Import :

- No need to match the name

```javascript
import greet from "./module.js";
```

## 5. What is the purpose of the this keyword in JavaScript?

- The **this** keyword refers to the object that is currently executing the function.
- Its value depends on how and where the function is called.

### Common Scenarios :

#### 1.Global Context

- In the global scope, this refers to the global object (window in browsers).

```javascript
console.log(this); // Window
```

#### 2.Inside an Object

- Refers to the owning object

```javascript
const obj = {
  name: "John",
  greet() {
    console.log(this.name); // "John"
  },
};
obj.greet();
```

#### 3.In a Constructor Function

- Refers to the newly created object

```javascript
function Person(name) {
  this.name = name;
}
const person = new Person("John");
console.log(person.name); // "John"
```

#### 4.In an Event Listener

- Refers to the element that triggered the event.

```javascript
document.querySelector("button").addEventListener("click", function () {
  console.log(this); // <button>
});
```

#### 5.Arrow Functions

- In arrow functions , **this** is lexically bound and refers to the surrounding context.

```javascript
const obj = {
  name: "John",
  greet: () => {
    console.log(this.name); // Undefined (global context)
  },
};
obj.greet();
```

- **this** _provides dynamic context, making it crucial for working with objects, event handlers, and constructors. Its value depends on how the function is invoked._

## 6. How do you debounce or throttle functions in JavaScript?

### 1.Debouncing :

- Ensures a function executes after a specific delay and resets the timer if called again within that delay.

- **Use Case** : Reducing API calls while typing.

```javascript
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

const log = debounce(() => console.log("Debounced!"), 300);
window.addEventListener("resize", log);
```

### 2.Throttling :

- Ensures a function executes at most once in a specified interval, even if called repeatedly.
- **Use Case**: Handling scroll events.

```javascript
function throttle(func, interval) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= interval) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

const log = throttle(() => console.log("Throttled!"), 300);
window.addEventListener("scroll", log);
```

- **Debounce**: Delays execution until no repeated calls occur within a delay period.
- **Throttle**: Limits execution to at most once every interval, regardless of calls.

## 7. What is the difference between deep copy and shallow copy in JavaScript?

### 1.Shallow Copy

- Copies only the first level of an object or array.
- Nested objects/arrays are referenced, not duplicated.
- Changes to nested objects affect both the original and the copy.

```javascript
const original = { name: "John", address: { city: "NY" } };
const shallowCopy = { ...original };
shallowCopy.address.city = "LA";
console.log(original.address.city); // "LA" (affected)
```

### 2.Deep Copy

- Creates a completely independent copy of the object, including all nested objects/arrays.
- Changes to the copy do not affect the original.

```javascript
const original = { name: "John", address: { city: "NY" } };
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = "LA";
console.log(original.address.city); // "NY" (unaffected)
```

- **Shallow Copy: References nested structures, causing shared modifications.**
- **Deep Copy: Fully duplicates the object, preventing shared modifications.**

## 8.How JavaScript Manages Memory (Garbage Collection)?

### 1.Memory Allocation:

- JavaScript allocates memory when variables, objects, or functions are created.

### 2.Garbage Collection:

- JavaScript automatically frees memory that is no longer used.
- It uses the mark-and-sweep algorithm:
  - Objects that are still reachable (accessible from the code) are kept.
  - Unreachable objects (not referenced anywhere) are removed from memory.

### 3.Reachable Objects:

- Objects are reachable if:

  - They can be accessed from the global scope.
  - They are part of a function or closure.
  - They are referenced by another object.

### 4.Avoid Memory Leaks:

- Remove unused variables by setting them to null.
- Be cautious of circular references, where objects reference each other.

```javascript
let obj = { name: "John" }; // Allocated in memory
obj = null; // Now eligible for garbage collection (unreachable)
```

- **JavaScript automatically clears unused memory to optimize performance, but you should write clean code to prevent memory leaks.**

## 9. What is the difference between apply(), call() and bind()?

### call():

- Invokes a function immediately and allows passing arguments individually.
- Syntax: function.call(thisArg, arg1, arg2, ...)

```javascript
function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}
greet.call({ name: "John" }, "Hello"); // Output: Hello, John
```

### apply():

- Similar to call(), but arguments are passed as an array.
- Syntax: function.apply(thisArg, [arg1, arg2, ...])

```javascript
greet.apply({ name: "John" }, ["Hello"]); // Output: Hello, John
```

### bind():

- Returns a new function with a bound this context and optional arguments.
- Does not invoke the function immediately.
- Syntax: function.bind(thisArg, arg1, arg2, ...)

```javascript
const boundGreet = greet.bind({ name: "John" }, "Hello");
boundGreet(); // Output: Hello, John
```

- **call(): Invokes immediately, arguments passed individually.**
- **apply(): Invokes immediately, arguments passed as an array.**
- **bind(): Creates a new function, invoked later.**

## 10.Explain the concept of Closures in JavaScript with an example.

- A closure is a function that "remembers" the variables from its outer scope even after the outer function has finished executing.

- Closures allow functions to access their lexical environment.
- Useful for creating private variables or maintaining state.

```javascript
function outerFunction() {
  let count = 0; // Variable in outer scope

  return function innerFunction() {
    count++; // Accessing outer variable
    console.log(`Count: ${count}`);
  };
}

const counter = outerFunction();
counter(); // Output: Count: 1
counter(); // Output: Count: 2
```

- **Closures allow a function to "remember" its outer scope, making it powerful for encapsulation and maintaining state.**

## 11.How does Event Delegation work, and why is it useful?

- Event Delegation is a technique where you attach a single event listener to a parent element to manage events for its child elements.

### How it works:

- Events in JavaScript bubble up from the target element to its ancestors.
- Instead of adding listeners to each child, you add one to the parent and use the event's target property to determine which child triggered the event.

```javascript
document.querySelector("#parent").addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log(`Button clicked: ${event.target.textContent}`);
  }
});

// HTML:
// <div id="parent">
//   <button>Button 1</button>
//   <button>Button 2</button>
// </div>
```

### Why its useful :

#### 1.Improves Performance:

- Reduces the number of event listeners, especially for dynamically created elements.

#### 2.Handles Dynamic Elements:

- Works for elements added to the DOM after the parent listener is attached.

#### 3.Cleaner Code:

- Simplifies managing multiple child elements.

- **Event Delegation leverages event bubbling to efficiently handle events for multiple child elements using a single parent listener.**

## 12.What are promises and how do they differ from async/await?

- Promises represent a value that may be available now, in the future, or never (asynchronous operation result).
- They have three states: Pending, Resolved (fulfilled), or Rejected.

### Syntax :

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success"), 1000);
});

promise
  .then((result) => console.log(result)) // "Success"
  .catch((error) => console.error(error));
```

### Async/await :

- Async/Await is syntactic sugar built on promises to write asynchronous code in a cleaner, synchronous style.
- **async** makes a function return a promise.
- **await** pauses execution until the promise resolves or rejects.

#### Syntax :

```javascript
async function fetchData() {
  try {
    const result = await promise;
    console.log(result); // "Success"
  } catch (error) {
    console.error(error);
  }
}

fetchData();
```

- **Promises provide a flexible way to handle asynchronous operations.**
- **Async/Await simplifies promise handling, making code more readable and easier to debug.**

# Node Questions

## 1. What is Node.js?

- Node.js is a JavaScript engine used for executing JavaScript code outside the browser, commonly used to build scalable backend applications.

## 2. What is the difference between Node.js and JavaScript?

- JavaScript is a scripting language, while Node.js is a runtime environment that allows JavaScript to run on the server side.

## 3. Is Node.js single-threaded?

- Yes, Node.js is single-threaded but uses event-driven architecture and non-blocking I/O to handle multiple requests efficiently.

## 4. What kind of API function is supported by Node.js?

- Node.js supports asynchronous, non-blocking APIs by default but also provides blocking APIs when needed. These APIs enable Node.js to handle tasks like file I/O, networking, and event-driven programming efficiently.

## 5. What is a module in Node.js?

- A module in Node.js is a block of code that provides a specific functionality, which can be reused across different parts of an application.

## 6. What is npm and its advantages?

- Npm is the default package manager for Node.js, offering benefits like dependency management , version control and a centralized repository.

## 7. What is middleware?

- Middleware functions execute between the request and response cycle, performing tasks like logging, authentication, and data processing.

## 8. How does Node.js handle concurrency despite being single-threaded?

- Node.js handles concurrency through asynchronous non-blocking operations, allowing multiple tasks to run simultaneously within a single thread.

## 9. What is control flow in Node.js?

- control flow refers to the order in which code statements and functions are executed , managing asynchronous operations and error handling.

## 10. What do you mean by event loop in Node.js?

- The event loop is a mechanism that processes asynchronous tasks in a single thread by continously checking for and executing callback functions.

## 11. What are the main disadvantages of Node.js?

- Disadvantages include its single-threaded nature, preference for NoSQL databases, and rapid API changes that can cause instability.

## 12. What is REPL in Node.js?

- REPL stands for Read, Evaluate , Print and Loop ; it's an interactive environment for executing Node.js code and debugging.

## 13. How to import a module in Node.js?

- Use the 'require()' function to import external modules, storing the result in a variable for use in the application.

## 14. What is the difference between Node.js and AJAX?

- Node.js is a server-side runtime environment, while AJAX is a client-side technique for asynchronously updating parts of a web page.

## 15. What is package.json in Node.js?

- 'package.json' is a metadata file in Node.js that contains information about the project, such as dependencies, scripts, and version.

## 16. What is the most popular Node.js framework used these days?

- The most popular Node.js framework is Express.js, known for its scalability and minimalistic approach to building web applications.

## 17. What are promises in Node.js?

- Promises in Node.js are objects that handle asynchronous operations, providing a cleaner alternative to callback functions.

## 18. What is event-driven programming in Node.js?

- Event-driven programming synchronizes multiple events using event loops and callback functions to simplify program flow.

## 19. What is buffer in Node.js?

- A buffer is a temporary storage space for binary data, allowing Node.js to handle raw data directly.

## 20. What are streams in Node.js?

- Streams are objects used to handle continuous data flows, allowing for efficient reading and writing of data.

## 21. Explain crypto module in Node.js?

- The crypto module provides cryptographic functionality, such as encryption , decryption , and hashing of data.

## 22. What is callback hell?

- Callback hell refers to the problematic situation caused by deeply nested callbacks, making code difficult to read and maintain.

## 23. Explain the use of timers module in Node.js?

- The timers module allows execution of code after a specified delay or immediately in the next event loop cycle using functions like '**setTimeout()**' and '**setImmediate()**'.

## 24. What is the difference between setImmediate() and process.nextTick() methods?

- **process.nextTick()** executes callbacks at the start of the next event loop, while **setImmediate()** executes them at the end of the current event loop.

## 25. What is the difference between setTimout() and setImmediate() method?

- **setTimeout()** schedules a callback after a specified delay, whereas **setImmediate()** executes it immediately after I/O events.

## 26. What is the difference between spawn() and fork() method?

- **spawn()** runs a new process from the command line, while **fork()** creates a new instance of the existing process to perform parallel tasks.

## 27. Explain the use of passport module in Node.js?

- The passport module adds authentication features to the applications , supporting various sign-in methods.

## 28. What is fork in Node.js?

- Fork is a method to create child processes that allow parallel execution of tasks in Node.js.

## 29. What are the three methods to avoid callback hell?

- To avoid callback hell use 'async/await' , promises, or generators.

## 30. What is body-parser in Node.js?

- Body-parser is a middleware that parses incoming request bodies in a middleware before handling it in Node.js applications.

## 31. What is CORS in Node.js?

- CORS stands for Cross Origin Resource Sharing, allowing restricted resources on a web page to be requested from another domain.

## 32. Explain the tls module in Node.js?

- The **tls** module provides an implementation of TLS and SSL protocols to establish secure network connections.

## 33. What is a cluster in Node.js?

- A **cluster** allows Node.js to utilize multiple cores of a machine by creating child processes that share the same server port.

## 34. How to manage sessions in Node.js?

- Sessions in Node.js can be managed using the **express-session** module , which stores the session data on the server.

## 35. Explain the types of streams in Node.js?

- Types of streams include readable, writable, duplex(both), and transform(modifies data) streams.

## 36. How can we implement authentication and authorization in Node.js?

- Use packages like Passport for authentication and JWT for managing tokens to implement security in Node.js applications.

## 37. Explain the packages used for file uploading in Node.js?

- Multer is a popular middleware used for handling file uploads in Node.js.

## 38. How to handle database connection in Node.js?

- Database connections in Node.js are managed using drivers like MySQL and libraries like Mongoose for MongoDB.

## 39. How to read command line arguments in Node.js?

- Use the process.argv array to access command-line arguments passed when running a Node.js application.

## 40. What are child processes in Node.js?

- Child processes allow Node.js to handle multiple tasks concurrently by creating subprocesses that can run independently.

# Coding Questions

## 1. Remove duplicate elements from an Array.

- To remove duplicate elements from an array using JavaScript, you can use the following approach :

```javascript
const array = [1, 4, 5, "Banana", 6, 1, 4, 4, 9, 3, "Banana"];

const uniqueElements = array.filter((element, index) => {
  return array.indexOf(element) === index;
});
```

## 2. Write a Function to generate a Fibonacci series of a given length.

-

```javascript
function fibonacci(length) {
  const fibArray = [0, 1];
  for (let i = 2; i < length; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }
  return fibArray;
}
const series = fibonacci(7);
console.log(series);
```

## 3. Reverse a string with inbuilt methods and without methods

- Reversing string with methods

```javascript
let string = "javascript";
let reversedString = string.split("").reverse().join("");
console.log(reversedString);
```

- Reversing string without methods

```javascript
let string = "javascript";
let reversedString = "";
for (let index = string.length - 1; index >= 0; index--) {
  reversedString += string[index];
}
console.log(reversedString);
```

## 4. Implement a function to check if a string is a palindrome.

```javascript
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
```

## 5. Write a function to find the factorial of a number.

```javascript
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

## 6. Write a function to flatten a nested array.

```javascript
function flattenArray(arr) {
  return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, [4]]]])); // Output: [1, 2, 3, 4]
```

## 7. Write a function to find the first non-repeating character in a string.

```javascript
function firstNonRepeatingChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
}
```

## 8. Implement a debounce function.

```javascript
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage example
const log = debounce(() => console.log("Debounced!"), 1000);
log();
log();
log(); // Only the last call logs "Debounced!" after 1 second.
```

## 9. Write a function to merge two sorted arrays

```javascript
function mergeSortedArrays(arr1, arr2) {
  let i = 0,
    j = 0;
  const result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }
  return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}

console.log(mergeSortedArrays([1, 2, 3, 4, 5], [7, 8, 9, 10]));
```

## 10. Write a function to check if a string is a subsequence

```javascript
function isSubsequence(s1, s2) {
  let i = 0;
  for (let char of s2) {
    if (char === s1[i]) i++;
    if (i === s1.length) return true;
  }
  return false;
}

console.log(isSubsequence("abc", "ahgfdblkmnc")); // true
```

## 11. Write a function to find majority element in an array

```javascript
function findMajorityElement(nums) {
  const count = {};
  const majority = Math.floor(nums.length / 2);

  for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] > majority) return num;
  }
  return -1; // No majority element
}

console.log(findMajorityElement([3, 3, 4, 2, 3, 3])); // 3
```

## 12. Write a function to Rotate an array.

```javascript
function rotateArray(nums, k) {
  k %= nums.length;
  return [...nums.slice(-k), ...nums.slice(0, -k)];
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
```

## 13. Write a function to group Anagrams.

```javascript
function groupAnagrams(words) {
  const map = new Map();

  for (let word of words) {
    const sorted = word.split("").sort().join("");
    if (!map.has(sorted)) map.set(sorted, []);
    map.get(sorted).push(word);
  }

  return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
```

## 14. Write a function to find the missing number.

```javascript
function findMissingNumber(arr, n) {
  let total = (n * (n + 1)) / 2;
  let sum = arr.reduce((acc, num) => acc + num, 0);
  return total - sum;
}
console.log(findMissingNumber([1, 2, 4, 5], 5));
```

## 15. Implement a Basic LRU(Least Recently Used) Cache.

```javascript
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    // If key exists, move it to the end to mark it as recently used
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      // If key exists, delete it first (to update its position)
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // Remove the least recently used item (first item in Map)
      const lruKey = this.cache.keys().next().value;
      this.cache.delete(lruKey);
    }

    // Insert the key-value pair
    this.cache.set(key, value);
  }
}

// Example usage:
const lru = new LRUCache(3);
lru.put(1, 10);
lru.put(2, 20);
lru.put(3, 30);
console.log(lru.get(1)); // 10
lru.put(4, 40); // Removes key 2
console.log(lru.get(2)); // -1 (key 2 was removed)
```

## 16. Write a function to find two numbers in the array such that their sum equals the target.

```javascript
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) return [nums[map.get(complement)], nums[i]];
    map.set(nums[i], i);
  }
  return [];
}

console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 12], 9));
```

## 17. Explain the difference between call, apply and bind.

- **call** : Invokes a function with a specified this value and arguments provided individually.

```javascript
function greet(greeting) {
  console.log(`${greeting},${this.name}`);
}
const person = { name: "waqar" };
greet.call(person, "hello");
```

- **apply** : Similar to call , but arguments are passed as an array.

```javascript
greet.apply(person, ["hello"]); // output : Hello, waqar
```

- **bind** : Returns a new function with this bound to specified object, without invoking it immediately.

```javascript
const boundGreet = greet.bind(person);
boundGreet("hey"); // output: hey , waqar
```

## 18. How does Javascript handle asynchronous operations?

- JavaScript uses **event loop** to handle asynchronous operations using constructs like:

  - **Callbacks**

  ```javascript
  setTimeout(() => console.log("callback"), 1000);
  ```

  - **Promises**

  ```javascript
  new Promise((resolve) => resolve("Resolved").then(console.log));
  ```

  - **async/await**

  ```javascript
  async function fetchData() {
    const data = await new Promise.resolve("Async Data");
    console.log(data);
  }

  fetchData(); // output: Async Data
  ```

## 19. What are closures and why are they useful?

- A closure is function that remembers its lexical scope even when executed outside it.

```javascript
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const increment = counter();
console.log(increment()); // output : 1
console.log(increment()); // output : 2
```

## 20. What is the difference between debounce and throttle?

- **Debounce**: Ensures a function runs only after specified time has elapsed since the last call.

```javascript
function debounce(func, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}
```

- **Throttle**: Ensures a function runs at most once in a specified time interval.

```javascript
function throttle(func, interval) {
  let lastTime = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      func(...args);
    }
  };
}
```

## 21. Explain the Event Delegation Pattern in JavaScript.

- Event Delegation is a technique where a parent element handles events for its child elements.

```javascript
document.getElementById("parent").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log("Button clicked:", e.target.textContent);
  }
});
```

## 22. What is the difference between shallow copy and deep copy?

- **Shallow Copy**: Copies only the first level of an object.

```javascript
const obj = { a: 1, b: { c: 2 } };
const shallowCopy = { ...obj };
shallowCopy.b.c = 3;
console.log(obj.b.c); // Output: 3
```

- **Deep Copy**: Recursively copies all levels.

```javascript
const deepCopy = JSON.parse(JSON.stringify(obj));
deepCopy.b.c = 4;
console.log(obj.b.c); // Output: 2
```

## 23. How do you handle memory leaks in JavaScript?

- **Unreleased References**: Remove event listeners when no longer needed.

```javascript
element.removeEventListener("click", handler);
```

- **Global Variables**: Avoid global variables to prevent unintentional references.
- **Detached DOM Elements**: Ensure elements are properly removed from DOM.

Need some advance questions on JS.
