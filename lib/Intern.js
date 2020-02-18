const Employee = require("./Employee")

class Intern extends Employee {
    constructor(employee){
    }
    getRole(){
        this.role = employee.role
    }
    getSchool(){
        this.school = employee.school
    }
}