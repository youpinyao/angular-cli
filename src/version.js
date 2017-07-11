const package = require('../package.json');
const chalk = require('chalk');

function version(){
  console.log(chalk.green(`version: ${package.version}`));
}

module.exports = version;
