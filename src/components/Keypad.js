import React from 'react';

const Keypad = () => {
    const input = () => console.log("Entering password...");

    return(
        <div>
            <input type="password" onKeyUp={input}/>
        </div>
    )
}

export default Keypad;