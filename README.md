# react-compare
Compare React SSR performance improvements in React version 16. This considers the below metrics for comparing:

- Latency (ms)
- Request served
- Response Size
- Bytes/sec

# Parameters
The parameters used in this test are:
- React version (15.6.0 vs 16.0.0)
- Node version (7.8 vs 8.4)
- a basic component which renders a list of 100 items with SSR
- `autocannon` to check the response

## Component being rendered
```javascript
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
```

## Tool used
```javascript
~ % autocannon -c 100 -d 5 localhost:3001
```

## Results
The results of the benchmark for some iterations are mentioned [here](https://github.com/addityasingh/react-compare/blob/master/perf/results.md)
