import React, {useEffect, useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);
// Called after every render
    useEffect(() => {
        console.log('Hello from useEffect')
    });
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment
            </button>
        </div>
    );
}

export default Counter;