// Code Keypad Component Here
import React from 'react'



function Keypad() {

    const enterPassword = () => {
        console.log('Entering password...')
    }
    
    return <input onKeyUp={enterPassword} type="password" />
}



export default Keypad;
