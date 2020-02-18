const Employee = require("./Employee")

class Manager extends Employee{
  constructor(employee){
  }
  getRole(){
    this.role = employee.role
  }
  getOfficeNumber(){
    this.officeNumber = employee.officeNumber
  }
}