/*eslint-disable no-console*/

const express = require('express');
const path = require('path');
const chalk = require('chalk');
const port = process.env.PORT || 8080;
const app = express();
const compression = require('compression');

app.use(compression());
app.use(express.static('dist'));

app.get('*', function (request, response) {
  response.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, (err) => {
    if(err) {
        return console.log(err);
    }
    return console.log(chalk.green(`server started on port: ${port}`))
});

