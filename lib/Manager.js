const Employee = require("./Employee")

class Manager extends Employee {
  constructor(name, id, email, officeNumber){
    super(name, id, email)
    this.officeNumber = officeNumber
  }
  getRole(){
    return "Manager"
  }
  getOfficeNumber(){
    return this.officeNumber
  }
}


// const manager = new Manager ("bob", 23, "bo@bok", 234)
// // console.log(manager.getName())
// // console.log(manager.getId())
module.exports = Manager;