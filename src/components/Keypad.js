import React from 'react';

class Keypad extends React.Component {


    eatDonut = () => console.log('Entering password...')

    render() {
        return (
            <input type="password" onKeyUp={this.eatDonut} />
        )
    }
}

export default Keypad;