import React, { useState } from 'react';
import Child from "./Child"

function Parent(){
   
  const[data, setData] = useState(" Send Data");

  const parentToChild = () =>{
     setData("this is data sending from parent to child");
     console.log("Sent successfully");
  }

  return(
    <div>
      <h1>Data transfer from Parent to Child</h1>
      <Child parentToChild={data}/>
      <button onClick={() =>parentToChild()}>Click Parent</button>
    </div>
  )
}

export default Parent;
