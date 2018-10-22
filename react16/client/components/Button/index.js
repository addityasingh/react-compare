import React from 'react';
import './Button.css';

const Button = (props) => (
    <button className={props.colorClass} >
        {props.text}
    </button>
);

Button.defaultProps = {
    text: 'click me!'
};

export default Button;