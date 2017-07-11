const execSeries = require('exec-series');
const chalk = require('chalk');
const cliSpinners = require('cli-spinners');
const ora = require('ora');

const loading = ora({
  spinner: cliSpinners.dost
});


function upgrade() {

  loading.start(chalk.green('更新中'));

  execSeries(['npm update -g meetyou-angular-cli'], (err, stdouts, stderrs) => {
    if (err) {
      throw err;
    }

    loading.stop();

    if (!stdouts[0] && !stderrs[0]) {
      console.log(chalk.red('无更新'));
    } else {
      console.log(chalk.green(stdouts[0])); // yields: ['foo\n', 'bar\n']
      console.log(chalk.green(stderrs[0])); // yields: ['', '']}
    };

  })
}
module.exports = upgrade;
