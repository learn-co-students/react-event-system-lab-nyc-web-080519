// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {
  render(){
    return (
      <button onFocus={this.printGood} onBlur={this.printEyes}></button>
    )
  }

  printGood(){
    console.log('Good!')
  }

  printEyes(){
    console.log('Hey! Eyes on me!')
  }
}