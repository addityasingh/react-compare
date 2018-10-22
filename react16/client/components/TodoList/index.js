import React from 'react';
import Todo from '../Todo';

import './TodoList.css';

const range = Array.from({length: 10}, (val, key) => key + 1);

const TodoList = (props) => (
    <div className={'todolist'}>
        {
            range.map((k) => (
                <Todo key={k} text={`Task ${k}`}/>
            ))
        }
    </div>
);

export default TodoList;