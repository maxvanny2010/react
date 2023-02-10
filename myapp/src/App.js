import React, {useRef} from 'react';
import './App.css';

function App() {
    const inputRef = useRef(null);
    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={() => inputRef.current.focus()}>
                Focus input
            </button>
        </div>
    );
}

export default App;