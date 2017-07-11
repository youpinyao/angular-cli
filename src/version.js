const package = require('../package.json');
const chalk = require('chalk');

module.exports = {
  print() {
    console.log(chalk.green(`version: ${package.version}`));
  },
  version: package.version,
};
