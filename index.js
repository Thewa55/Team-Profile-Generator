const fs = require("fs");
const inquirer = require("inquirer");
const teamMembers = []
const Render = require("./lib/htmlRenderer")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")


async function userPrompt(){
  await inquirer.prompt([{
    message: "What is the manager's name?",
    name: "name",
    validate: function(value){
      if (value !==""){
        return true
      }
      return 'Please enter a valid name'  
      
    }},
  {
    message: "What is the manager's ID?",
    name: "id",
    validate: function(value){
      if (parseInt(value) > 0){
        return true
      }
      return 'Please enter a valid ID (Any number 1 or greater)'  
  }},
  {
    message: "What is the manager's email address?",
    name: "email",
    validate: function(value){
      var pass = value.match(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
      );
      if (pass) {
        return true;
      }
      return 'Please enter a valid email "username@example.com"'    
  }},
  {
    message: "What's your office number?",
    name: "officeNumber",
    validate: function(value){
      if (parseInt(value) > 0){
        return true
      }
      return 'Please enter a number greater then 0'
    }},
  {
    type: "list",
    message: "Any other members you would like to add?",
    choices: ["Engineer", "Intern", "No one else"],
    name: "member"
  }
  ]).then(async function(employee){
    const manager = new Manager(employee.name, employee.id, employee.email, employee.officeNumber)
    // employee.role = "Manager"
    // console.log(role)
    teamMembers.push(manager)
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
    name: "name",
    validate: function(value){
      if (value !==""){
        return true
      }
      return 'Please enter a valid name'  
    }},
  {
    message: "What is the engineer's ID?",
    name: "id",
    validate: function(value){
      if (parseInt(value) > 0){
        return true
      }
      return 'Please enter a valid ID (Any number 1 or greater)'  
    }},
  {
    message: "What is the engineer's email address?",
    name: "email",
    validate: function(value){
      var pass = value.match(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
      );
      if (pass) {
        return true;
      }
      return 'Please enter a valid email "username@example.com"'    
  }},
  {
    message: "What is your engineer's GitHub username?",
    name: "github",
    validate: function(value){
      if (value !==""){
        return true
      }
      return 'Please enter a valid GitHut username'  
  }},
  {
    type: "list",
    message: "Any other members you would like to add?",
    choices: ["Engineer", "Intern", "No one else"],
    name: "member"
  }]).then(async function(employee){
    const engineer = new Engineer(employee.name, employee.id, employee.email, employee.github)
    // employee.role = "Engineer"
    teamMembers.push(engineer)
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
    name: "name",
    validate: function(value){
      if (value !==""){
        return true
      }
      return 'Please enter a valid name'  
  }},
  {
    message: "What is the intern's ID?",
    name: "id",
    validate: function(value){
      if (parseInt(value) > 0){
        return true
      }
      return 'Please enter a valid ID (Any number 1 or greater)'  
  }},
  {
    message: "What is the intern's email address?",
    name: "email",
    validate: function(value){
      var pass = value.match(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
      );
      if (pass) {
        return true;
      }
      return 'Please enter a valid email "username@example.com"'    
  }},
  {
    message: "What school is the intern from?",
    name: "school",
    validate: function(value){
      if (value !==""){
        return true
      }
      return 'Please enter a school name'  
  }},
  {
    type: "list",
    message: "Any other members you would like to add?",
    choices: ["Engineer", "Intern", "No one else"],
    name: "member"
  }]).then(async function(employee){
    const intern = new Intern(employee.name, employee.id, employee.email, employee.school)
    // employee.role = "Intern"
    teamMembers.push(intern)
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
    fs.writeFile("team.html", finalTeam,function(err){
    })
  }
  catch(err){
    console.log(err)
  }
}

teamMaker()

module.exports = teamMembers