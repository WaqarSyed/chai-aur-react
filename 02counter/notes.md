# What Does the createRoot() do.?

- It creates a complete DOM like structure (Virtual DOM)

# Why it creates a new DOM ?

- It compares main DOM with its own DOM and then updates the UI with only those elements which are updated in the DOM.

- In contrast what browsers do is : remove the complete DOM and repaints the complete DOM (this is known as 'page reload' )

# React Fiber

- Fiber allows React to manage updates to the DOM in a more efficient and flexible way, supporting complex and smooth UIs by enabling incremental rendering. Fiber makes React’s rendering process more adaptive and is the backbone of React’s Concurrent Mode and Suspense features in later versions.

## Key features of React Fiber :

- Incremental Rendering :

  - Fiber breaks down rendering work into smaller units, allowing React to pause and resume work. This lets React prioritize more important updates (like animations) and handle them smoothly.

- Prioritized Updates :

  - With Fiber, React can assign priorities to different updates. For example, user interactions (like typing or clicking) are prioritized over background data fetching, resulting in a more responsive UI.

- Concurrency :

  - React Fiber supports Concurrent Mode, which enables React to handle multiple tasks simultaneously. For example, it can render low-priority tasks in the background without blocking high-priority updates.

- Error Handling :

  - Fiber introduced better error handling with error boundaries, allowing developers to catch and handle errors gracefully without crashing the entire app.

- Suspense and Lazy Loading Support :

  - Fiber allows for the Suspense feature, which enables smooth loading experiences by letting components "wait" for asynchronous data to be ready before rendering.

- Improved Memory and Power Efficiency :

  - By scheduling and managing tasks more effectively, Fiber uses memory and processing power more efficiently, especially beneficial for complex apps with heavy user interaction.
