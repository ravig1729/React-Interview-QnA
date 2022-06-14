                                     ****** React.JS-Interview-Questions and Answers *****

## 1. What is Virtual DOM?
The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation.
                    (or)
DOM is a document object model, created by converting HTML CSS and JS Real DOM, which is an object which gets created whenever any React application gets loaded on the screen for the first time., whenever React components gets mounted on the screen for the first time. Now when any user makes any changes on the screen like button click because of which the state variable will get updated so in this case the changes will not directly go to Real DOM , instead in react we have concept known Virtual DOM. So we are having two virtual doms, one virtual dom gets created at the time of mounting of react component so it is a copy of your real dom. Another virtual dom is the dom which contains the new changes, updated state variables values. Now these two virtual doms will get compared with each other and will check for the new changes. this complete procedure is known as diffing algorithm. Now the new changes will be updated in your Real dom. this procedure is known as Recoinciliation.

## 2. What is SPA?
Single page application : Any web application , in which when you are clicking on any button or selecting option from navigation bar then if your page which means browser page is reloading then that means that application is your multi - page application . If it does not reload the browser page and just only updates the page without reloading then that application is known as Single Page application. When you create React application using CRA, (create-react-app boilerplate , developed by Facebook) it always create the application which will be Single page application.

## 3. What is difference between Functional and Class component?
# Functional Components::     
 1. A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element.
 2. There is no render method used in functional components.
 3. Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.
 4. React lifecycle methods (for example, componentDidMount) cannot be used in functional components.
 5. Hooks can be easily used in functional components to make them Stateful.
    example: const [name,SetName]= React.useState(" ")
 6. Constructors are not used.
# Class Component::
 1. A class component requires you to extend from React. Component and create a render function which returns a React element.
 2. It must have the render() method returning JSX (which is syntactically similar to HTML)
 3. Also known as Stateful components because they implement logic and state.
 4. React lifecycle methods can be used inside class components (for example componentDidMount).
 5. It requires different syntax inside a class component to implement hooks.
    example: constructor(props) {
               super(props);
               this.state = {name: ‘ ‘}
             }
 6. Constructor are used as it needs to store state.

## 4. What does mean by state and its use in react?
State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components.

Let's create a user component with message state,

      class User extends React.Component {
        constructor(props) {
          super(props)

          this.state = {
            message: 'Welcome to React world'
          }
        }

        render() {
          return (
            <div>
              <h1>{this.state.message}</h1>
            </div>
          )
        }
      }
<img src="https://github.com/sudheerj/reactjs-interview-questions/blob/master/images/state.jpg?raw=true" alt="state">
State is similar to props, but it is private and fully controlled by the component ,i.e., it is not accessible to any other component till the owner component decides to pass it.
            
## 5. What is JSX and why do we use it instead of js?
JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML). Basically it just provides syntactic sugar for the React.createElement() function, giving us expressiveness of JavaScript along with HTML like template syntax.
In the example below text inside <h1> tag is returned as JavaScript function to the render function.
      class App extends React.Component {
        render() {
          return(
            <div>
              <h1>{'Welcome to React world!'}</h1>
            </div>
          )
        }
      }
JSX or JavaScript XML combines HTML and JavaScript, making the code easier to read and understandable for the user. JSX combines interactivity with markup rather than separating the two. It makes it easier to visualize DOM. In JSX we can directly write HTML tags inside JavaScript code.
One of the advantages of JSX is that React creates a virtual DOM (a virtual representation of the page) to track changes and updates. Instead of rewriting the entire HTML, React modifies the DOM of the page whenever the information is updated. This is one of the main issues React was created to solve.

## 6. How do you use pass data from one component to another?
please go through src folder --> Data-p2c

## 7. What is the Difference between react and react native? Which one is library or framework?
React and React Native are developed by Facebook and have gained a huge fan base in a short time. React is known as ReactJs, which is a JavaScript library to build single-page web applications.

Besides, React Native is a React JS-based framework to design mobile apps. Moreover, with reusable components, you can develop native mobile applications.

React is a JavaScript library of reusable components designed to create skeletons of the apps, whereas React Native is designed to build native mobile apps with reusable components.
React is an open-source JS library for building the UIs for web applications; besides, React Native is used to build rich mobile UI from declarative components using only JavaScript.
Both React and React Native are ruling the industry and are widely used for mobile and web applications. However, the difference between web apps vs websites will not affect your user.
  # Which one is library or framework?
React is an open source JavaScript framework, that isn't actually a framework. But it is currently the most commonly used front-end development technology in the world. React, originally developed by and still maintained by Facebook and supported by an active open source community, is in fact a JS 'library'.
React Native is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android. It's based on React, Facebook's JavaScript library for building user interfaces, but instead of targeting the browser, it targets mobile platforms.
  # Why is react a library and react-native a framework?
Reactjs, eventually, is a JavaScript library, which enables the programmer to create an engaging and high performing UI Layer while React Native is an entire framework for building cross-platform apps, be it web, iOS or Android.

## 8. What is the package name you are using for routing?
React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package.In this Browser Router as Router, Routes and Route and NavLink get imported from react-router-dom.
React Router DOM enables you to implement dynamic routing in a web app. Unlike the traditional routing architecture in which the routing is handled in a configuration outside of a running app, React Router DOM facilitates component-based routing according to the needs of the app and platform.

## 9. What is package.json?
It contains the information about the project and also contains the libraries which the project is using and it also has the description of the commands which gets used to run test or build your project.

## 10. Routing Implementation: 
Please see in src folder --> Routing Folder..

## 11. How do you pass data from parent to child?
please go through src folder --> Data-p2c

## 12. What is lazy loading in react ?
In essence, lazy loading means that a component or a part of code must get loaded when it is required. It is also referred to as code splitting and data fetching . Talking about React specifically, it bundles the complete code and deploys all of it at the same time.

Example:An example of image lazy-loading can be found on the popular publishing platform Medium, which loads lightweight placeholder images at page load, and replaces them with lazily-loaded images as they're scrolled into the viewport. An example of image lazy-loading in action.

Benefits: The benefits of lazy loading include: Reduces initial load time – Lazy loading a webpage reduces page weight, allowing for a quicker page load time. Bandwidth conservation – Lazy loading conserves bandwidth by delivering content to users only if it's requested.

## 13. Difference b/w Stateful and stateless Component.
  # Stateless:
If the behaviour is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless we need to use a lifecycle hook in your components, we should go for function components. There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the this keyword altogether.
  # Stateful:
If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. These stateful components are always class components and have a state that gets initialized in the constructor.
    class App extends Component {
      constructor(props) {
        super(props)
        this.state = { count: 0 }
      }

      render() {
        // ...
      }
    }
React 16.8 Update:
Hooks let you use state and other React features without writing classes.
The Equivalent Functional Component
    import React, {useState} from 'react';

    const App = (props) => {
      const [count, setCount] = useState(0);
   
      return (
        // JSX
      )
    }

## 14. How do you switch one component to another?
Way to Switch/Navigate from one page to another page
  1. Link
  2. NavLink
  3. Redirect Component
  4. history.push
  5. history.replace

1. Link
Link is used to manage the navigation and it worked as an anchor tag. Check below code for the demonstration.
    import { Link } from 'react-router-dom';
    ...
    ...
    <Link to="/about">About</Link>

2. NavLink
NavLink behaves the same as Link but in addition, it comes with a new attribute called “activeClassName” which helps us to add the class to the anchor tag when page url will match.

    import { NavLink } from 'react-router-dom';
    ...
    ...
    <NavLink activeClassName="active" to="/about">About</NavLink>

## 15. Difference between Axios and fetch.
# Axios :
Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6. It can be used intercept HTTP requests and responses and enables client-side protection against XSRF. It also has the ability to cancel requests. 
EX::
    axios.get('url')
    .then((response) => {

    	// Code for handling the response
    })
    .catch((error) => {

    	// Code for handling the error
    })

# Fetch: 
The Fetch API provides a fetch() method defined on the window object. It also provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline (requests and responses). The fetch method has one mandatory argument- the URL of the resource to be fetched. This method returns a Promise that can be used to retrieve the response of the request.
EX::
    fetch('path-to-the-resource-to-be-fetched')
    .then((response) => {

    	// Code for handling the response
    })
    .catch((error) => {

    	// Code for handling the error
    });

| Axios	| Fetch |
| ----- | ------- |
| Axios has url in request object. | 	Fetch has no url in request object. |
| Axios is a stand-alone third party package that can be easily installed. |	Fetch is built into most modern browsers; no installation is required as such.|
| Axios enjoys built-in XSRF protection. | Fetch does not. |
| Axios uses the data property.	| Fetch uses the body property. |
| Axios’ data contains the object. |	Fetch’s body has to be stringified. |
| Axios request is ok when status is 200 and statusText is ‘OK’. |	Fetch request is ok when response object contains the ok property. |
| Axios performs automatic transforms of JSON data. |	Fetch is a two-step process when handling JSON data- first, to make the actual request; second, to call the .json() method on the response. |
| Axios allows cancelling request and request timeout. |	Fetch does not.|
| Axios has the ability to intercept HTTP requests. |	Fetch, by default, doesn’t provide a way to intercept requests. |
| Axios has built-in support for download progress. |	Fetch does not support upload progress. |

## 16. What are React Life cycles? Explain each one with Example.
# Lifecycle methods: 
   # Refer this Repo link for Implementation : https://github.com/Vijaykumar77/react-lifecycle
Mounting :
When an instance of a component is being created and inserted into the DOM.
Updating :
When a component is being re-render as a result of changes to either its props or state
Unmounting :
When a component is being removed from the DOM
Mounting :
1.	constructor
2.	static getDerivedStateFromProps
3.	render
4.	componentDidMount
Updating :
1.	static getDerivedStateFromProps
2.	shouldComponentUpdate
3.	render
4.	getSnapshotBeforeUpdate
5.	componentDidUpdate
Unmounting :
1.	componentWillUnmount

## 17. What is UseState Hook ?(Implementation)
The React useState Hook allows us to track state in a function component.State generally refers to data or properties that need to be tracking in an application.
   # for Implementation:please go through src folder --> Data-p2c

## 18. What is useEffect Hook ?(Implementation)
useEffect :It allows us to implement all of the lifecycle hooks from within a single function API.
// this will run when the component mounts and anytime the stateful data changes
      React.useEffect(() => {
          alert('Hey, Nads here!');
      });

// this will run, when the component is first initialized
      React.useEffect(() => {
          alert('Hey, Nads here!');
      }, []);

// this will run only when count state changes
      React.useEffect(() => {
          fetch('nads').then(() => setLoaded(true));
      }, [count]);

// this will run when the component is destroyed or before the component is removed from UI.
      React.useEffect(() => {
          alert('Hey, Nads here');
          return () => alert('Goodbye Component');
      });

## 19. What is UseReducer Hook ?(Implementation)
It does very similiar to setState, It's a different way to manage state using Redux Pattern. Instead of updating the state directly, we dispatch actions, that go to a reducer function, and this function figure out, how to compute the next state.

  # for Implementation: please go through src folder --> Hookes Folder. -->UseReducer.js
      
## 20. What is UseMemo Hook ?(Implementation)
The React useMemo Hook returns a memoized value.Think of memoization as caching a value so that it does not need to be recalculated.The useMemo Hook only runs when one of its dependencies update.This can improve performance.
The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. You can learn more about useCallback in the useCallback chapter.

  # please go through src folder --> Hookes Folder. --> UseMemo.js

## 21. What is UseRef Hook ?(Implementation)
The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.
 
  # for Implementation: please go through src folder --> Hookes Folder. --> UseRef.js

## 22. What is Context api?
The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.
                        (or)
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

For example, authenticated users, locale preferences, UI themes need to be accessed in the application by many components.

const {Provider, Consumer} = React.createContext(defaultValue)

## 23. Difference between callback and useCall back Hook ?
 callback is like an argument passed to an function whereas another one is hook, in this you pass another function as an argument.
   # for useCallback Implementation: please go through src folder --> Hookes Folder. --> UseMemo.js

  The callback function is invoked when setState finished and the component gets rendered. Since setState() is asynchronous the callback function is used for any post action.
  Note: It is recommended to use lifecycle method rather than this callback function.

     setState({ name: 'John' }, () => console.log('The name has updated and component re-rendered'))

## 24. What is Props Drilling Concept ?What is State Uplifting ?
  # Prop Drilling : 
  It is the process by which you pass data from one component of the React Component tree to another by going through other components that do not need the data but only help in passing it around.
  # State Uplifting:
  When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.

## 25. Difference between useEffect and useContext ?
  # useEffect :
  It allows us to implement all of the lifecycle hooks from within a single function API.
// this will run when the component mounts and anytime the stateful data changes
      React.useEffect(() => {
          alert('Hey, Nads here!');
      });

// this will run, when the component is first initialized
      React.useEffect(() => {
          alert('Hey, Nads here!');
      }, []);

// this will run only when count state changes
      React.useEffect(() => {
          fetch('nads').then(() => setLoaded(true));
      }, [count]);

// this will run when the component is destroyed or before the component is removed from UI.
      React.useEffect(() => {
          alert('Hey, Nads here');
          return () => alert('Goodbye Component');
      });
  # useContext :
  This hook allows us to work with React's Context API, which itself a mechanism to allow us to share data within it's component tree without passing through props. It basically removes prop-drilling
      const ans = {
          right: '✅',
          wrong: '❌'
      }

      const AnsContext = createContext(ans);

      function Exam(props) {
          return (
              // Any child component inside this component can access the value which is sent.
              <AnsContext.Provider value={ans.right}>
                  <RightAns />
              </AnsContext.Provider>
          )
      }

      function RightAns() {
          // it consumes value from the nearest parent provider.
          const ans = React.useContext(AnsContext);
          return <p>{ans}</p>
          // previously we were required to wrap up inside the AnsContext.Consumer
          // but this useContext hook, get rids that.
      }

## 26. High Order Component in react js ?
A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature.
We call them pure components because they can accept any dynamically provided child component but they won't modify or copy any behavior from their input components.
      const EnhancedComponent = higherOrderComponent(WrappedComponent)

  # for Implementation: please go through src folder --> HOC foder.

## 27. Do you know about SEO ? Is it true that react js supports SEO support?
Search engine optimisation (SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic (known as “natural” or “organic” results) rather than direct traffic or paid traffic.
React helps build a very user-friendly UI that is also valuable by SEO, so you definitely shouldn't avoid it while creating a user interface for your app/website. However, you should use some tricks to ensure that your React-site is understandable for Google crawlers and, therefore, good for SEO.

## 28. clean up in useEffect.
clean up function: this function gets executed when the component is unmounted from the screen. This is mostly used for memory leaks.
   //componentWillUnmount : Cleanup function in useEffect.
      useEffect(() =>{
        console.log("Inside useEffect hook");

        return function cleanup() {
            console.log("componentWillUnmount is happen...!")
        }
      })

## 29. What is the use of useMemo and useCallback?
 # Use of useMemo: 
 React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.
 # Use of useCallback:
 useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

## 30. Why do we need keys in react less?
The main purpose of keys is to help React differentiate and distinguish elements from each other, increasing its performance when diffing between the virtual and real DOM. To use keys, simply add the prop inside an element such as <li> . Unique IDs are the best value to assign to keys.
                                 (or)
"Key" prop is used to look pretty, and there is no benefit whatsoever. "Key" prop is a way for React to identify a newly added item in a list and compare it during the "diffing" algorithm. It is one of the attributes in HTML. It is NOT commonly used in an array.

## 31. Do you know about redux?
Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.
Here is a small example of react and Redux application. You can also try developing small apps. Sample code for increase or decrease counter is given below − This is the root file which is responsible for the creation of store and rendering our react app component. /src/index.

## 32. Have you used redux?
Yes, i used in react-redux: Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments and are easy to test. While it's mostly used as a state management tool with React, you can use it with any other JavaScript framework or library.

## 33. Is react library or frameworks?
React is Library. many React-based frameworks have cropped up in recent years to provide developers with a more powerful set of built-in tools. These allow you to build projects faster without needing as many third-party libraries. Some of the most popular of these frameworks include Next.We can store of our libraries and third party one in package-lock.json

## 34. How to pass props in components?
That’s because you don’t want to have a component rendering static data, but pass dynamic data to your component instead. That’s where React’s props come into play. You can pass data in React by defining custom HTML attributes to which you assign your data with JSX syntax. So don’t forget the curly braces.
  
  # for Implementation: please go through src folder --> Props Folder.

## 35. What is an event in react?
An event is an action that could be triggered as a result of the user action or system generated event. For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events.

React has its own event handling system which is very similar to handling events on DOM elements. The react event handling system is known as Synthetic Events. The synthetic event is a cross-browser wrapper of the browser's native event.

## 36. What is the difference between states and props?
Props: Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.

State: The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.

## 37. What is memory leak and how to overcome?
Memory leak occurs when programmers create a memory in heap and forget to delete it. 

The consequences of memory leak is that it reduces the performance of the computer by reducing the amount of available memory. Eventually, in the worst case, too much of the available memory may become allocated and all or part of the system or device stops working correctly, the application fails, or the system slows down vastly .

Memory leaks are particularly serious issues for programs like daemons and servers which by definition never terminate.

## 38. Do you prefer function-based or class component and why ?
Functional Component.
A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX). A class component requires you to extend from React. Component and create a render function which returns a React element. There is no render method used in functional components.

## 39. Explain reducer as pure function in redux?
In Redux, a reducer is a pure function that takes an action and the previous state of the application and returns the new state. The action describes what happened and it is the reducer's job to return the new state based on that action.
    (previousState, action) => newState
  # Pure functions can't do any of the following:
    1. Access global variables
    2. Change global variables
    3. Mutate its arguments
    4. Perform side effects (like make API calls)
    5. Call any other impure function (like date and random functions)

## 40. Why do we use redux thunk?
The most common use case for Redux Thunk is for communicating asynchronously with an external API to retrieve or save data. Redux Thunk makes it easy to dispatch actions that follow the lifecycle of a request to an external API.
Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. This allows for delayed actions, including working with promises. One of the main use cases for this middleware is for handling actions that might not be synchronous, for example, using axios to send a GET request.

## 41. What do you know about NPM?
NPM stands for 'Node Package Module',npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

npm consists of three distinct components:
  1. the website
  2. the Command Line Interface (CLI)
  3. the registry

