import React from 'react';
import './ClickButton.css';

const ClickButton = (props) => {
    return (
        <div>
            <button onClick={props.handleClick}>{props.label}</button>
        </div>
    );
}

export default ClickButton;