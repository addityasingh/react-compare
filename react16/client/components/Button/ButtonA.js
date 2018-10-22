import React from 'react';
import './ButtonA.css';

const Button = (props) => (
    <button className={props.colorClass} >
        {props.text}
    </button>
);

Button.defaultProps = {
    text: 'click me!',
    colorClass: 'green',
};

export default Button;