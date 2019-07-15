const chalk = require('chalk');
const logError = (...messages) => console.log(chalk.bgRed.black.bold(...messages));
const logSuccess = (...messages) => console.log(chalk.bgGreen.black.bold(...messages));
const logInfo = (...messages) => console.log(chalk.blue.bold(...messages));

module.exports = {
    logError,
    logSuccess,
    logInfo
};