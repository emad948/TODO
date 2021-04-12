import React from 'react';
import Application from './Application';
import './index.css';

const App=() => {
    return (
        <div className="todo-app">
            <h1 className="title" >What's the Plan for Today?</h1>
            <br></br>
            <Application />
        </div>
    )
}

export default App
