function log() {
  console.log(`
  Commands:

    create <projectName> <version>  创建项目
    build                           编译项目
    upgrade                         升级meetyou-angular版本
`);
}

module.exports = {
  log,
}
