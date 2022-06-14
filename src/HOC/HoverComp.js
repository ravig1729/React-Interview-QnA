import React, { Component } from 'react'
import UpdatedComp from './UpdatedComp'

export class HoverComp extends Component {
    
    render() {
        const { count, incrementCount } = this.props
        console.log(incrementCount);
        return (
            <h2 onMouseOver={incrementCount}> Hovered {count} Times </h2>
        )
    }
}

export default UpdatedComp( HoverComp )