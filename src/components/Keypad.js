import React from 'react'
// Code Keypad Component Here

class Keypad extends React.Component{
   
    onInput = () => console.log('Entering password...')

    render(){
        return(
            <div>
                <input type="password"
                    onKeyUp={this.onInput}
                />
            </div>
        )
    }
}

export default Keypad