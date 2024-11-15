# Common Interview Questions for React Developer

## 1. Advantages and Disadvantages of React

- Advantages of React include its ability to handle complex user interfaces, its flexibility and reusability of components, and its performance optimization through the use of Virtual DOM. Disadvantages include a steep learning curve for beginners and the need for external libraries or tools to complete a full-featured application.

## 2. What does DOM stand for ?

- DOM stands for Document Object Model.

## 3. What is Virtual DOM?

- Virtual DOM is a lightweight in-memory representation of the actual DOM. It is used to improve the performance of updates and changes to the actual DOM by reducing the number of expensive DOM manipulations.

## 4. How does Virtual DOM works ?

- Virtual DOM works by comparing the current Virtual DOM tree with a new Virtual DOM tree, and then applying the minimal set of changes to the actual DOM. This allows React to efficiently update the user interface without causing unneccessary re-renders or layout changes.

## 5. What is the difference between Shadow DOM and Virtual DOM ?

- Shadow DOM refers to a feature of web browsers that allows developers to create a separate DOM tree, called a shadow tree, that is attached to a specific element and is hidden from the main document. Virtual DOM is concept used in React to optimize the performance of updates to the user interface, whereas shadow DOM is feature of web browsers that allows for scoping of CSS and JavaScript within a specific element.

## 6. What are the differences between Real DOM and Virtual DOM ?

- Real DOM is the actual tree-like structure of a web page, which can be manipulated directly to change the layout or content of the page. Virtual DOM is a lightweight in-memory representation of the actual DOM, which is used to optimize the performance of updates to the user interface.

## 7. What is React Fiber ?

- React Fiber is a new reconciliation algorithm that was introduced in React 16. It is designed to improve the performance and flexibility of React by breaking down the render process into the smaller , asynchronous chunks.
