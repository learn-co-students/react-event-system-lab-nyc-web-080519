import React from 'react';

class EyesOnMe extends React.Component{
    whenFocus = () => console.log('Good!')
    whenBlur = () => console.log('Hey! Eyes on me!')
    render(){
        return(
            <button onFocus={this.whenFocus} onBlur={this.whenBlur}></button>
        );
    }
}

export default EyesOnMe;