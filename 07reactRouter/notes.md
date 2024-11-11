# 1. What is React Router DOM ?

- **React Router DOM** is a library for managing client-side-routing in React applications. It helps create multi-page applications by allowing seamless navigation between different views without reloading the page.

# 2. Core Concepts in React Router DOM

## Browser Router

- The main router component that wraps your entire app, managing the URL structure. Always place it at the root level of your component tree.

## Routes & Route

- **Routes** groups all route definitions.
- **Route** defines a single path-to-component relationship. It renders the specified component when the path matches the URL.

## Link

- Renders an anchor tag (<a>) without reloading the page. Use _<Link to="/path">_ for navigation without losing app state.

## NavLink

- Similar to Link but adds active styling for the current page link, useful for navigation menus where you want to highlight the active route.

## Outlet

- Similar to Link but adds active styling for the current page link, useful for navigation menus where you want to highlight the active route.

## Navigate

- Programmatically redirects users to a different route. Use it when navigation depends on certain conditions (e.g., after form submission or authentication).