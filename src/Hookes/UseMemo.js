import React,{useMemo, useState,useCallback, Fragment} from 'react';
export default function UseMemo(){
    const [val,setVal] = useState(0);
    const [item,setItem] =useState(1);

    const memoHook = useMemo(function countMemo(){
        console.log("memo hook");
        return val+5;
    },[item]);

    const callbackHook = useCallback(function countMemo(){
        console.log("callback");
        return val;
    },[val]);

    return(
        <Fragment>
         <h1>UseMemo Hook</h1>
         <h2>Value: {val}</h2>
         <h2>Items: {item} </h2>
         <h3>{memoHook}</h3>
         <h3>{callbackHook}</h3>
         <button onClick={()=>setVal(val+1)}>Click Me</button>
         <button onClick={()=>setItem(item*2)}>Click Me</button>
        </Fragment>
    )
} 