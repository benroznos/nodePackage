const chalk = require('chalk')
const inquirer = require('inquirer')

inquirer.prompt([
  {
    type: 'input',
    name: 'example',
    message: 'type anything'
  }
])
.then(data=>{
  console.log(chalk.blue(data.example))
})
.catch(err => console.log(err))