import React from 'react';

function MyComponent() {
// This is called when the button is pressed
    const buttonPressed = () => {
        alert('Button pressed');
    }
    return (
        <div>
            <button onClick={buttonPressed}>Press Me</button>
        </div>
    );
}

export default MyComponent;