const shell = require('shelljs')

module.exports = {

  populateDB(req, res){
    if (shell.exec('yarn init-scripts').code !== 0) {
      shell.echo('Error: Yarn')
      shell.exit(1)

      return res.sendStatus(500)
    }

    res.sendStatus(200)
  }

}