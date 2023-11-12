import React from 'react';

function Greeting(props) {
    return (
        <div className="Greeting">
        <h1>Hello {props.name}!</h1>
        {props.children}
        </div>
    )
}

Greeting.defaultProps = {
    name: 'World'
}

export default Greeting;