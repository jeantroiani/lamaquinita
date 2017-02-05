/*eslint-disable no-console*/

const express = require('express');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const config = require('../webpack.config.dev');
const port = process.env.PORT || 8080;
const app = express();
const compiler = webpack(config);

process.env.NODE_ENV = 'development';

app.use(require('webpack-dev-middleware')(compiler, {
    // It serves the files emitted from webpack over a connect server.
    noInfo: true,
        // display no info to console (only warnings and errors)
    stats: {
        colors: true
    },
        // formating the statistics
    publicPath: config.output.publicPath
        // public path to bind the middleware to use the same as in webpack
  })
);

app.use(require('webpack-hot-middleware')(compiler, {
    //This allows you to add hot reloading into an existing server without webpack-dev-server.
}));

app.get('*', function (request, response) {
  response.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
    if(err) {
        return console.log(err);
    }
    return console.log(chalk.green(`server started on port: ${port}`))
});

