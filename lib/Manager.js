const Employee = require("./Employee")

class Manager extends Employee{
  constructor(employee){
    super(employee);
  }
  getRole(){
    return this.role
  }
  getOfficeNumber(){
    return this.officeNumber
  }
}