class Employee{
  constructor(name,id,email,role){
    this.name = name;
    this.id = parseInt(id)
    this.email = email;
    // this.role = "Employee";
    this.role = role
  }
  getName(){
    return this.name
  }
  getId(){
    return this.id
  }
  getEmail(){
    return this.email;
  }
  getRole(){
    return this.role;
  }
}

module.exports = Employee;