const fs = require("fs");
const inquirer = require("inquirer");
const teamMembers = []
const Render = require("./lib/htmlRenderer")
const Employee = require("./lib/Employee")

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
    message: "What is the manager's email address?",
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
  ]).then(async function(employee){
    employee.role = "Manager"
    // const team = new Employee(employee)
    // const role = employee.getRole()
    // console.log(role)
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
    message: "What is the engineer's email address?",
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
  })
}

async function promptIntern(){
  await inquirer.prompt([{
    message: "What is the intern's name?",
    name: "name"
  },
  {
    message: "What is the intern's ID?",
    name: "id"
  },
  {
    message: "What is the intern's email address?",
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
  }]).then(async function(employee){
    employee.role = "Intern"
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
  })
}

async function teamMaker(){
  try{
    const manager = await userPrompt()
    // console.log(teamMembers)
    const finalTeam = await Render(teamMembers)
    fs.writeFile("team.html", Render,function(err){

    })
  }
  catch(err){
    console.log(err)
  }
}

teamMaker()

module.exports = teamMembers