import React from 'react';
import Toolbar from '../Toolbar';
import TodoList from '../TodoList';

const App = ({variant}) => (<React.Fragment>
    <Toolbar variant={variant}></Toolbar>
    <TodoList/>
</React.Fragment>);

export default App;