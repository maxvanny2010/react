import React, {useState} from 'react';

function MyFormPressButton() {
    const [text, setText] = useState('');
// Save input element value to state when it has been changed
    const inputChanged = (event) => {
        setText(event.target.value);
    }
    const handleSubmit = (event) => {
        alert(`You typed: ${text}`);
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={inputChanged} value={text}/>
            <input type="submit" value="Press me"/>
        </form>
    );
}

export default MyFormPressButton;