const express = require('express');
const { renderToString } = require('react-dom');
const React = require('react');

const App = require('../../components/App');
const app = express();

export default () => {
    app.get('/', (request, response) => {
			response.write(`<!DOCTYPE html><html>
				<head>
					<title>My Page</title>
					<link href='./styles.css' rel="stylesheet">
				</head>
			<body>`);
			response.write('<div id="root">');
			response.write(renderToString(App));
			response.write(`</div>
				</body>
			</html>`);
			response.end();
    });

    app.listen(3000, function (err) {
			if (err) throw err;
			console.log(`server listening on ${3000}`)
    });
};

// module.exports = server;