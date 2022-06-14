import React from 'react'

class Message extends React.Component {

    render() {
        console.log(this.props);

        return (
            <div>  {this.props.name}</div>       
        )
    }
}

export default Message