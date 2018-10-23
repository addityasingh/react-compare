import React from 'react';
import App from './components/App/App';
import ReactDOM from "react-dom";

const app = document.getElementById( "root" );
ReactDOM.hydrate( <App />, app );