import React, { Component } from 'react';
import Toolbar from '../Toolbar';

const range = Array.from({length: 10}, (val, key) => key + 1);

class App extends Component {
    render () {
        return <React.Fragment>
        <Toolbar></Toolbar>
        {
            range.map((k) => (<div key={k}>Index {k}</div>))
        }
        </React.Fragment>
    }
}

export default App;
// module.exports = App;