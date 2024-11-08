# Difference between useEffect and useCallback hooks

## 1. Purpose and Function Execution

- **useEffect** Runs side effects based on dependencies. The dependencies in useEffect determine when the effects should be re-executed.

  - If values in the dependency array change, useEffect re-runs.

  - **Example use cases:** fetching data, setting up subscriptions, or manually manipulating the DOM.

- **useCallback** Caches a function instance to prevent re-creation. Dependencies tell useCallback when to refresh the function, preserving its identity across renders.

  - Only updates the function if a dependency value changes.
  - **Example use cases:** passing stable callback references to child components or functions in useEffect hooks.

  ## 2. Effect of Dependencies on Render

- **useEffect** Triggers a side effect whenever dependencies change, potentially causing additional render cycles if it updates component state.

- **useCallback** Re-creates the function only if dependencies change. This affects which version of the function is passed to components, but doesn’t trigger re-renders itself.

## 3. Usage with Other Hooks

- **useEffect** Primarily used for managing lifecycle effects, like network requests or subscriptions, which require updates on state or prop changes.
- **useCallback** Often used with useMemo or useEffect to ensure stability of functions that depend on other values but need to avoid unnecessary re-creation or passing.

## Example

- **useEffect** Example:

```javascript
useEffect(() => {
  console.log("Effect triggered by prop change");
}, [prop1, prop2]);
```

- **useCallback** Example:

```javascript
const memoizedFunction = useCallback(() => {
  console.log("Callback uses prop1 or prop2");
}, [prop1, prop2]);
```
