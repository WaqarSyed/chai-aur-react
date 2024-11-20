# Redux Toolkit (RTK)

- The Redux Toolkit (RTK) simplifies working with Redux by reducing boilerplate code and providing powerful utilities. Here's an overview of the Redux Toolkit flow:

## 1. Core Concepts in Redux Toolkit Flow

- **Store**: Centralized state container, created with configureStore.
- **Slices**: Encapsulate state logic with reducers and actions in a single file using createSlice.
- **Dispatch**: Trigger actions to modify the state.
- **Selectors**: Retrieve specific pieces of state.
- **Reducers**: Update the state based on dispatched actions.
- **Async Actions**: Simplified with createAsyncThunk.

## 2. Redux Toolkit Workflow

- The RTK workflow follows these steps:

### Step 1: Create a Slice

- A slice represents a single piece of state and contains the following:

  - Initial state
  - Reducers (to handle actions)
  - Action creators (automatically generated)

- Example :

```javascript
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1; // Mutating state is allowed thanks to Immer
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

### Step 2: Configure the Store

- The store combines slices and middleware.

- Example:

```javascript
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer, // Add more slices as needed
  },
});

export default store;
```

### Step 3: Use the Store in the Application

- The store must be provided to the application using the Provider component from react-redux.

- Example:

```javascript
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

### Step 4: Dispatch Actions in Components

- The useDispatch hook allows you to dispatch actions to update the state.

- Example:

```javascript
import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

const CounterControls = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
};

export default CounterControls;
```

### Step 5: Select State in Components

- The useSelector hook retrieves state from the store.

```javascript
import React from "react";
import { useSelector } from "react-redux";

const CounterDisplay = () => {
  const count = useSelector((state) => state.counter.value);

  return <h1>Count: {count}</h1>;
};

export default CounterDisplay;
```

## 3. Handling Async Logic with createAsyncThunk

- createAsyncThunk simplifies handling async operations like API calls.
- Example:

```javascript
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async action
export const fetchUserData = createAsyncThunk("user/fetchData", async () => {
  const response = await axios.get("/api/user");
  return response.data;
});

// Slice
const userSlice = createSlice({
  name: "user",
  initialState: { data: null, status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default userSlice.reducer;
```

## 4. Redux Toolkit Advantages

- **Less Boilerplate**: Simplified syntax for actions and reducers.
- **Immer Integration**: Enables mutable state updates (under the hood, it creates an immutable state).
- **Built-in DevTools**: Automatically configures Redux DevTools.
- **Async Simplification**: createAsyncThunk handles promise lifecycles.
- **Scalability**: Organizing code with slices promotes scalability in large projects.

## 5. RTK Summary Workflow

- **Create Slices**:
  Define state, reducers, and actions.
- **Configure Store**:
  Combine slices into a centralized store.
- **Dispatch Actions**:
  Use useDispatch to trigger state updates.
- **Select State**:
  Use useSelector to read state from the store.
- **Async Logic**:
  Use createAsyncThunk for handling asynchronous operations.
