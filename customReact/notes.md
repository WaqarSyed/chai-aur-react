# How React creates elements : Internal working

- React creates and manages elements through a combination of JavaScript objects, a virtual representation of the DOM, and an efficient update process. Here’s a look at how React creates and renders elements internally:

## 1. JSX Transpilation :

- When you write JSX in a React component, such as:

```javascript
const element = <h1>Hello, World!</h1>;
```

- this JSX is transpiled by Babel into a React.createElement() call:

```javascript
const element = React.createElement("h1", null, "Hello, World!");
```

## React.createElement() :

- React.createElement() takes three arguments: the type of element (like h1), its props, and its children, and returns a plain JavaScript object called a React Element. This element is a lightweight description of what the DOM should look like, containing:

  - type: the HTML tag or React component

  - props: properties like id or className
  - children: nested elements or text content

- For Example:

```javascript
const element = {
  type: "h1",
  props: { children: "Hello, World!" },
};
```

## 3. Virtual DOM :

- When a component renders, React uses the element structure from React.createElement() to build a virtual DOM—a virtual representation of the UI as a JavaScript object tree. This virtual DOM is an efficient way for React to compare previous and updated render outputs.

## 4. Rendering & Diffing :

- On initial render, React creates an internal DOM representation that mirrors the virtual DOM structure.

- For subsequent renders, React compares the new virtual DOM with the previous version using a process called reconciliation.

- React identifies the differences (or diffs) and calculates the minimum set of changes required to update the real DOM.

## 5. Updating the Real DOM :

- React uses the identified differences to efficiently update the real DOM, using methods like appendChild, removeChild, or replaceChild only where necessary. This efficient update process minimizes direct interaction with the DOM, which is typically slower.
