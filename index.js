const fs = require("fs");
const inquirer = require("inquirer");
const teamMembers = []
const manager = require("./lib/Manager")
const engineer = require("./lib/Engineer")
const intern = require("./lib/Intern")
const employee = require("./lib/Employee")
const render = require("./lib/htmlRenderer")


async function userPrompt(){
  await inquirer.prompt([{
    message: "What is the manager's name?",
    name: "name"
  },
  {
    message: "What is the manager's ID?",
    name: "id"
  },
  {
    message: "What is the manager's email address",
    name: "email"
  },
  {
    message: "What's your office number?",
    name: "officeNumber"
  },
  {
    type: "list",
    message: "Any other members you would like to add?",
    choices: ["Engineer", "Intern", "No one else"],
    name: "member"
  }
  ]).then(function(employee){
    employee.role = "Manager"
    // const team = new Employee(employee)
    teamMembers.push(employee)
    // createManage()
    if(employee.member === "Engineer"){
      promptEngineer()
    }
    else if(employee.member === "Intern"){
      promptIntern()
    }
    else{
      return teamMembers
    }
    console.log(teamMembers)
  })
}


async function promptEngineer(){
  await inquirer.prompt([{
    message: "What is the engineer's name?",
    name: "name"
  },
  {
    message: "What is the engineer's ID?",
    name: "id"
  },
  {
    message: "What is the engineer's email address",
    name: "email"
  },
  {
    message: "What is your engineer's GitHub usernam?",
    name: "github"
  },
  {
    type: "list",
    message: "Any other members you would like to add?",
    choices: ["Engineer", "Intern", "No one else"],
    name: "member"
  }]).then(async function(employee){
    employee.role = "Engineer"
    teamMembers.push(employee)
    if(employee.member === "Engineer"){
      await promptEngineer()
    }
    else if(employee.member === "Intern"){
      await promptIntern()
    }
    else{
      return teamMembers
    }
    console.log(teamMembers)
  })
}

async function promptIntern(){
  await inquirer.prompt([{
    message: "What is the intern's name?",
    name: "name"
  },
  {
    message: "What is the intern's ID?",
    name: "ID"
  },
  {
    message: "What is the intern's email address",
    name: "email"
  },
  {
    message: "What school is the intern from?",
    name: "school"
  },
  {
    type: "list",
    message: "Any other members you would like to add?",
    choices: ["Engineer", "Intern", "No one else"],
    name: "member"
  }]).then(function(employee){
    employee.role = "Intern"
    teamMembers.push(employee)
    if(employee.member === "Engineer"){
      promptEngineer()
    }
    else if(employee.member === "Intern"){
      promptIntern()
    }
    else{
      return teamMembers
    }
    console.log(teamMembers)
  })
}

userPrompt()