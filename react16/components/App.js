import React, { Component } from 'react';

const range = Array.from({length: 100}, (val, key) => key + 1);

class App extends Component {
    constructor () {
        super();
    }

    render () {
        return <div>
        {
            range.map((k) => (<div key={k}>Index {k}</div>))
        }
        </div>
    }
}

export default App;
// module.exports = App;