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

# 9. What is purpose of Outlet component?

- Outlet acts as a placeholder for child routes in nested routing scenarios, allowing child routes to render within the parent component's layout.

# 10. Explain the useLocation hook and provide a scenario where it would be useful.

- useLocation provides access to the current location object, containing information such as pathname, search and hash.
- **Use Case** : Checking the current path or reading query parameters.

# 11. What is the difference between HashRouter and BrowserRouter?

- **BrowserRouter** : Uses HTML5 history API and works with a standard URL structure. Suitable for applications with server configuration for handling routes.

- **HashRouter** : Appends a hash (#) in the URL, which doesn't require server-side-routing. Ideal for apps that need routing wihtout server configuration.

# 12. How would you protect routes in a React application using React Router DOM ?

- Implement a protected route component that checks authentication status before allowing access.

```javascript
function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}
```

# 13. Describe how useSearchParams works and when you would use it .

- useSearchParams lets you read and update the URL's query parameters without reloading. Useful in cases like filtering search results by parameters(e.g. ?query=react).

# 14. What is purpose of the **replace** option in Navigate and useNavigate ?

- When replace is true , navigation replaces the current history entry, preventing users from going back to the previous route with the browser's back button.

# 15. How do you animate route transitions in React Router DOM?

- Use libraries like framer-motion to animate route transitions by wrapping components in motion components or using animated containers around Routes.

# 16. What changes were introduced in React Router v6?

- The switch from Switch to Routes.
- Nested routes with Outlet.
- Hooks like useNavigate, useLocation, and useParams became more standardized.
- Removal of exact matching for routes, as React Router now matches best-matching routes automatically.
