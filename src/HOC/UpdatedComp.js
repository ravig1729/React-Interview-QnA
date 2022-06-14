import React,{Component} from "react";

const UpdatedComp = (OriginalComponent) => {

    class NewComponent extends Component    {
        constructor(props) {
            super(props)
          
            this.state = {
               count : 0
            }
          }
          incrementCount = () => {
              this.setState( {
                  count: this.state.count+1
              } )
          }

        render() {
            return <OriginalComponent
                        count={this.state.count}
                        incrementCount={this.incrementCount}
                        />
        }
    }

    return NewComponent
} 

export default UpdatedComp


// Class HUMAN {

//     state = {
//         hand: '2',
//         legs: '2',
//         ears: '3',
//         steps: '0'
//     }
//     walk = () => {
//         steps: steps+1
//     }
// }
// HUMAN prajwal;                  2 2 3 6,fun
// HUMAN Brahmaraj;                2 2 3 1,fun 