import React from 'react';

// Code Keypad Component Here
class Keypad extends React.Component {

    logPassword = () => console.log("Entering password...")

    render() {
        return (
            <div>
                <input type="password" onKeyUp={this.logPassword} />
            </div>
        )
    }
}

export default Keypad


