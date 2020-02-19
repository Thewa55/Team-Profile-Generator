const Employee = require("./Employee")

class Engineer extends Employee {
  constructor(github){
    this.github = github
    this.role = "Engineer"
  }
  getGithub(){
    return this.github
  }
}