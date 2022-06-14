import React, { Component } from 'react'
import UpdatedComp from './UpdatedComp'

class ClickCounter extends Component {
       
    render() {
        const { count, incrementCount } = this.props
        console.log(incrementCount);
        return (
            <button onClick={incrementCount}> Class {count} Times </button>
        )
    }
}

export default UpdatedComp(ClickCounter)



// Why HOC ? 
// To share common functionality between components

// const NewComponent = higherOrderComponent( originalComonent )
// const Chitti = Programmed( Rajinikanth )
// Taks originalCompoent , add additional data and functionality to originalCompoent, then
// return an enhanced component





// function sum(a) {
//     return a+1;
// }

// print( sum(5) )
// export default UpdatedComponent(Original)