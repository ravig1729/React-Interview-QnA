//in App.js
import React, { useState } from 'react'
import TestUseEffect from './useEffectHooks';

const App = () => {

  const[showComp, setShowComp] = useState(true);
  return (
    <div className = 'App'>
    {showComp ? <TestUseEffect/> : null}
    <button onClick={() =>setShowComp(false)}>Unmount useEffect Component</button>
    </div>
  )
}

export default App

//in component:
import React, { Fragment, useEffect,useState } from 'react'


const TestUseEffect = () => {

    const[a,setA] = useState("ABC");
    const[b,setB] = useState("XYZ");

    //componentDidMount and componentDidUpdate
    useEffect(() =>{
      console.log("Hello use Effect Hook")
    })

    //componentDidMount
    useEffect(() =>{
        console.log("componentDidMount is rendered")
      },[])

      //In this case, useEffect will work componentDidMount and will work likecomponentDidMount for "a" state variable only.
      useEffect(() =>{
        console.log("Inside useEffect hook")
      },[a])

      //componentWillUnmount : Cleanup function in useEffect.
      useEffect(() =>{
        console.log("Inside useEffect hook");

        return function cleanup() {
            console.log("componentWillUnmount is happen...!")
        }
      })

  return (
    <Fragment>
    <h1>This is useEffect</h1>
    <p>Value of a state variable = {a}</p> <p>Value of b state variable = {b}</p>
    <button onClick={()=>setA("QWE")}>Update a state value</button> 
    <button onClick={()=>setB("RTY")}>Update b state value</button>
    </Fragment>
  )
}

export default TestUseEffect

//useEffect is named export from React library.
//Alternative of creating state variable in functional component.alternative of lifecycle methods.
//major lifecycle methods:: componentDidMount, componentDidUpdate, componentWillUnmount.
//Hooks which accepts first parameter as a callback fun, and second parameter is dependency array.
//when you want to make server calls .
//if you do not want that useEffect should run like a componentDidupate then pass an empty dependency array. 
// How the useEffect can be executed Like componentDidUpdate only for one state variable: pass the state variable for which you want to execute useEffect in the dependency array.
// clean up function: this function gets executed when the component is unmounted from the screen. This is mostly used for memory leaks.
