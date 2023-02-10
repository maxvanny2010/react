import React, {useEffect, useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Hello from useEffect');
        return () => {
            console.log('Clean up function');
        }
    }, [count]);
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment
            </button>
        </div>
    );
}

export default Counter;