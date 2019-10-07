import React from 'react';

const EyesOnMe = () => {

    const onFocus = () => console.log("Good!");
    const onBlur = () => console.log("Hey! Eyes on me!");

    return(
        <button onFocus={onFocus} onBlur={onBlur}></button>
    )
}


export default EyesOnMe;