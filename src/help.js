const chalk = require('chalk');

function help() {
  console.log(chalk.green(`
  Commands:

    create <projectName> <version>  创建项目
    build                           编译项目
    upgrade                         升级版本
    -v --version                    打印版本
`));
}

module.exports = help;
