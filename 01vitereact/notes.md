# Understanding the basics of React

- Always start with package.json file to study a project

## "react" is the core library. It comes with some other attachments

### "react-dom" is an attachment with the core library to work on the 'WEB APPS'

- So, the core is library's knowledge is needed with react-dom.
- react-dom is the implementation of react on WEB

### "react-native" is an attachment with the core library to work on "ANDROID APPS"

- So, the core is library's knowledge is needed with react-native. Core library knowledge is helpful.

#### Commonly used terms

- "npx" : Node Package Executer
- SPA : known as "single page application" because there is only one index.html file that is performing all the UI responsibilites: means all the UI is being rendered because of this single file

##### npm create vite@latest

- this is a little bit faster than 'create-react-app'

##### npx create-react-app 01/basicReact

- this command will create the dir '01/basicsReact' using the create-react-app utility
- but problem is that it's way more bulky utility , it provides with some of the packages that we don't need

### Difference between projects created with c.r.a and vite

- create react app projects come bundled with "react-scripts " to behind the scene inject js into html, node-modules folder that possess all the necessary modules and "testing libraries" for testing the app

- vite comes with only react and react-dom and in vite main.jsx is loaded into html scripts tag, there are no scripts and test dependencies included

- All the functions must have a capitalized name in both cra and vite

- cra components can have a .js extension but in vite it's compulsory to name the functional components with .jsx file extension

- Convention to follow is that whenever a function is returning some html then its name must have an extension of .jsx

### package-lock.json

- is similar to package.json but the dependencies are locked means that project will run only on the versions mentioned in the package-lock.json
