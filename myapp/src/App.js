import React, {useState} from 'react';

function App() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const increment = () => {
        setCount(count + 1); // No re-rendering yet
        setCount2(count2 + 1);// Component re-renders after all state updates
    }
    return (
        <div>
            <p>Counters: {count} {count2}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default App;