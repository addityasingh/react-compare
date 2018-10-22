import React from 'react';
import './Todo.css';

const Todo = (props) => (
    <div className={'todo'}>
        <input type={'checkbox'} />
        {props.text}
    </div>
);

export default Todo;