class Employee{
  constructor(employee){
      this.name = employee.name;
      this.id = employee.id;
      this.role = employee.role;
      this.email = employee.email;
  }
  getName(){
      this.name = employee.name;
  }
  getID(){
      this.id = employee.id;
  }
  getEmail(){
      this.email = employee.email;
  }
  getRole(){
      this.role = employee.role;
  }
}

module.exports = Employee;