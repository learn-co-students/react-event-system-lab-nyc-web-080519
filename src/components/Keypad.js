// Code Keypad Component Here

import React from 'react'

class Keypad extends React.Component {
  // constructor() {
  //   super()
  // }

  consoleLog = () => console.log(`Entering password...`);

  render() {
    return (
      <input type="password" onKeyUp={this.consoleLog} />
    )
  }

}
export default Keypad