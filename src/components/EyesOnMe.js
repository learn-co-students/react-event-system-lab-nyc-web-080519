import React from 'react'

class EyesOnMe extends React.Component {
  // constructor() {
  //   super()
  // }

  logFocus = () => console.log('Good!');
  logBlur = () => console.log('Hey! Eyes on me!');
    
  render() {
    return (
      <button onFocus={this.logFocus}  onBlur={this.logBlur} ></button>
    )
  }

}
export default EyesOnMe