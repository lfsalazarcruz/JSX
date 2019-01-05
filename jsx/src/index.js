import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    
    const textButton = { text: 'GET TIME!'};
    const style = { backgroundColor: "blue", border: "1px solid red", color: "white", cursor: "pointer" }
    function getTime() {
        return (new Date()).toLocaleTimeString()
    }

    // let currentTime = getTime();

    return (
        <div>
            <label className="label">
                Enter name:
            </label>
            <input id="name" type="text"/>
            <h1>{ getTime() }</h1>
            <button style={style}>
                {textButton.text}
            </button>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));
