# 1. What is React Router DOM, and why is it used?

- React Router DOM is a library for implementing dynamic client-side-routing in React applications. It allows seamless navigation between different components or views without reloading the page. It's used to create single page applications (SPAs) that feel fast and responsive.

# 2. What are the main components of React Router DOM ?

- The main components are :
  - **BrowserRouter** : Wraps the entire app and enables routing functionality.
  - **Routes and Route** : Define individual routes and the components they render.
  - **Link and NavLink** : Allow navigation without reloading the page.
  - **Outlet** : Used for nested routes.
  - **Navigate** : Redirects to a different route programmatically.

# 3. How does React Router DOM differ from traditional routing?

- Traditional routing involves navigating to different pages and reloading the entire page for each request. React Router DOM, by contrast, updates the view by rendering different components based on the URL, creating an SPA experience where only the necessary content updates, which is faster and preserves the app's state.

# 4. How would you set up the basic routing in a React app using React Router DOM ?

- Basic routing setup:

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

# 5. What is difference between Link and NavLink ?

- **Link** : A basic navigation component that renders an anchor tag , changing the URL without refreshing the page.

- **NavLink** : Similar to Link but with additional styling features that make it easier to highlight the active route (e.g. adding an active class to the link of the current page.)

# 6. Explain the useParams hook and provide an example use case.

- **useParams** hook extracts route parameters from the URL, which is useful for dynamic routes.

- _Example_ : in route /products/:id , useParams can extract the id value.

```javascript
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();

  return <div>product ID : {id}</div>;
}
```

# 7. What is purpose of useNavigate hook and how does it differ from Navigate ?

- **useNavigate** : Provides a function for programmatic navigation, which is useful for conditional redirection in event handlers.

- **Navigate** : A component that triggers navigation when rendered, typically used in render logic.

- Example with useNavigate :

```javascript
const navigate = useNavigate();
const goToHome = () => navigate("/");
```

# 8. How would you implement nested routes in React Router DOM?

- use **Outlet** to render nested routes within a parent route component.

```javascript
<Routes>
  <Route path="settings" element={<Settings />}>
    <Route path="profile" element={<Profile />} />
    <Route path="security" element={<Security />} />
  </Route>
</Routes>
```
