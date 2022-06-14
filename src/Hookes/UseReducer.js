import React, { Fragment} from 'react'


function reducer(state, dispatch) {
    switch(action.type) {
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        default:
            throw new Error();
    }
}

function UseReducer() {
    // state is the state we want to show in the UI.
    const [state, dispatch] = React.useReducer(reducer, 0);

    return (
        <Fragment>
        
        Count : {state}
        <br></br>
        <button onClick={() => dispatch({type:'decrement'})}>-/Decrement</button><br></br>
        <button onClick={() => dispatch({type:'increment'})}>+/Increment</button>
        </Fragment>
    )
}

export default UseReducer;