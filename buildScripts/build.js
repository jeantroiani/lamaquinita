/*eslint-disable no-console */

const webpack =  require('webpack');
const chalk = require('chalk');
const webpackProdConfig = require('../webpack.config.prod');

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating bundle...'));

webpack(webpackProdConfig).run((err, stats) => {
    if (err) {
        console.log(chalk.red(err));
        return 1;
    }
    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => {
            console.log(chalk.red(error))
        });
    }

    if (jsonStats.hasWarnings) {
        jsonStats.warnings.map(warning => {
            console.log( chalk.yelow(warning))
        });
    }

    console.log(chalk.green('Bundle has been created and saved on dist '))
    return 0;
})
