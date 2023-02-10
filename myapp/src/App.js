import React, {useEffect, useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);
// Runs when count value is changed and component is  re-rendered
    useEffect(() => {
        console.log('Counter value is now ' + count);
    }, [count])
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment
            </button>
        </div>
    );
}

export default Counter;