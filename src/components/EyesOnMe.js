import React from 'react';

// Code EyesOnMe Component Here
class EyesOnMe extends React.Component {

    focusHandler = () => console.log("Good!")
    blurHandler = () => console.log("Hey! Eyes on me!")

    render() {
        return (
            <div>
                <button onFocus={this.focusHandler} onBlur={this.blurHandler}></button>
            </div>
        )
    }
}

export default EyesOnMe