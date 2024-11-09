# Important Points to keep in mind

- Remember **key** while using loops on arrays in React.
- The key should be unique among siblings and consistent across renders.
- Using array indices as keys is generally discouraged because it can lead to unintended side effects. If the list order changes (e.g., items are added or removed), using indices can cause React to misidentify elements.
- **useId** hook can be used to generate ids for referencing html elements.
