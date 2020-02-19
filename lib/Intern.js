const Employee = require("./Employee")

class Intern extends Employee {
    constructor(employee){
      super(employee)
    }
    getRole(){
        return this.role
    }
    getSchool(){
        return this.school
    }
}