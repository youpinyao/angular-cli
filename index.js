#!/usr/bin/env node

const chalk = require('chalk');
const help = require('./help.js');
const version = require('./version.js');
const create = require('./create.js');

const command = process.argv[2];
const args = process.argv.slice(3, process.argv.length);

console.log(chalk.green(`command ${command}`));
console.log(chalk.green(`args    ${args}`));

switch (command) {
  case 'create':
    create(args[0], args[1]);
    break;
  case '-v':
  case '--version':
    version.log();
  break;
  case '-h':
  case '--help':
  default:
    help.log();
    break;
}
