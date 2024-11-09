# Important Points to keep in mind

- Remember **key** while using loops on arrays in React.
- The **key** should be unique among siblings and consistent across renders.
- Using array indices as keys is generally discouraged because it can lead to unintended side effects. If the list order changes (e.g., items are added or removed), using indices can cause React to misidentify elements.
- If you lack unique identifiers, consider generating a **unique** key based on **item** attributes. If that’s not possible, use the index as a last resort (typically for lists that are static and won’t change).
- The **key** should persist for the same item across re-renders. This allows React to identify it consistently and only update items that have actually changed.
- **Consistency** is essential for React’s efficient diffing algorithm
- **useId** hook can be used to generate ids for referencing html elements.
