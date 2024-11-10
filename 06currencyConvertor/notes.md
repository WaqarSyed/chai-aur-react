# Important Points to keep in mind

- Remember **key** while using loops on arrays in React.
- The **key** should be unique among siblings and consistent across renders.
- Using array indices as keys is generally discouraged because it can lead to unintended side effects. If the list order changes (e.g., items are added or removed), using indices can cause React to misidentify elements.
- If you lack unique identifiers, consider generating a **unique** key based on **item** attributes. If that’s not possible, use the index as a last resort (typically for lists that are static and won’t change).
- The **key** should persist for the same item across re-renders. This allows React to identify it consistently and only update items that have actually changed.
- **Consistency** is essential for React’s efficient diffing algorithm
- **useId** hook can be used to generate ids for referencing html elements.

## Best Practices for designing custom hooks

- Designing custom hooks in React allows you to encapsulate logic and reuse it across components. Following these best practices can help you create effective, maintainable, and high-performing custom hooks:

  - Always prefix custom hooks with use. This signals that the function is a hook, and React can then enforce the Rules of Hooks.

    - Each custom hook should serve a single purpose, making it easier to test, reuse, and debug.

    - When using hooks like useEffect or useCallback inside a custom hook, always manage dependency arrays carefully to avoid unnecessary re-renders or missed updates.
    - Accept dependencies as parameters when possible, making your hook more flexible.
    - Return only the necessary data and functions. Avoid exposing internal variables or functions to limit the hook's API surface and ensure encapsulation.

    - Be careful with side effects like fetching data, setting timers, or adding event listeners. Always clean up with a return function in useEffect if needed.

      - In a useInterval hook, use clearInterval in a cleanup function to prevent memory leaks.

    - If your hook could benefit from options (e.g., delay in an interval hook or base URL in a data-fetching hook), consider passing them as parameters or an options object.
      - useFetchData(url, { headers, method }) allows users to customize the API request without hardcoding.
    - Document what the hook does, what each parameter represents, and what it returns. This makes hooks easier to understand and use correctly.
      - Write comments above each parameter describing its purpose, especially for more complex hooks.
    - Use useMemo or useCallback to memoize calculations or callbacks within the hook that don’t need to be recalculated on every render.
      - In a useExpensiveCalculation hook, wrap the calculation logic in useMemo if inputs are unlikely to change often.
    - For hooks that rely on async operations, include error handling (e.g., setting an error state) to avoid unhandled promises and allow components to respond to errors.
    - Since hooks often encapsulate important logic, ensure they are thoroughly tested with unit tests to verify expected behavior.
      - Test different parameter inputs and state changes, especially with edge cases like empty arrays, timeouts, and failures.
