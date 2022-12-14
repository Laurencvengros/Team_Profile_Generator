//need to add to generateHTML.js for createTeam function to work

const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require('./lib/Employee');

const createHTML = require("./dist/generateHTML");



const myTeam = [];


function addManager(){
    console.log("Welcome to the Team Builder! To create your team, follow the prompts as they appear on the screen.")
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?:",
            name: "managerName",
            validate: managerName => {
                if(managerName){
                    return true;
                }else{
                    console.log("Name cannot be blank");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is your employee ID number?:",
            name: "managerID",
            validate: managerID => {
                if(managerID){
                    return true;
                }else{
                    console.log("You must enter an ID number");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is your email?:",
            name: "managerEmail",
            validate: managerEmail =>{
                if(managerEmail){
                    return true;
                }else{
                    console.log("You must enter an email address");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is your office number?:",
            name: "officeNumber",
            validate: officeNumber =>{
                if(officeNumber){
                    return true;
                }else{
                    console.log("You must enter an office number");
                    return false
                }
            }
        },
     ]).then (data =>{
         const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.officeNumber);
         myTeam.push(manager);

    addEmployee();
    })
    
    
 };


function menu(){
    return inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add another an employee?:",
            name: "addEmployee",
            choices: ["Yes","No"]
        }
    ]).then (function(answers){
            switch(answers.addEmployee){
                case "Yes":
                    addEmployee();
                    break;
                case "No":
                    createTeam();
                    break;
            }
    });
};

function addEmployee(){
    return inquirer.prompt([
        {
        type: "list",
        message: "What is the employee's position?:",
        name: "employeeRole",
        choices: ["Engineer", "Intern"]
        }
    ]).then (function(answers){
        switch(answers.employeeRole){
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
        }
    });
};

function addEngineer(){
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the engineer's name:",
            name: "engineerName",
            validate: engineerName =>{
                if(engineerName){
                    return true;
                }else{
                    console.log("Name cannot be blank");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Please Enter the engineer's ID number:",
            name: "engineerID",
            validate: engineerID =>{
                if(engineerID){
                    return true;
                }else{
                    console.log("Employee ID number required");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Please Enter the engineer's email address:",
            name: "engineerEmail",
            validate: engineerEmail =>{
                if(engineerEmail){
                    return true;
                }else{
                    console.log("Email cannot be blank");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Please enter the engineer's GitHub username:",
            name: "engineerGithub",
            validate: engineerGithub =>{
                if(engineerGithub){
                    return true;
                }else{
                    console.log(" GitHub username required");
                    return false;
                }
            }
        }
    ]).then (data => {
        const engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGithub);
        myTeam.push(engineer);
        menu();
    });
};

function addIntern(){
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the Intern's name:",
            name: "internName",
            validate: internName =>{
                if(internName){
                    return true;
                }else{
                    console.log("Name cannot be blank");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Please Enter the Intern's ID number:",
            name: "internID",
            validate: internID =>{
                if(internID){
                    return true;
                }else{
                    console.log("Employee ID number required:");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Please Enter the Intern's email address:",
            name: "internEmail",
            validate: internEmail =>{
                if(internEmail){
                    return true;
                }else{
                    console.log("Email cannot be blank");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Please enter the Intern's current school:",
            name: "internSchool",
            validate: internSchool =>{
                if(internSchool){
                    return true;
                }else{
                    console.log("School cannot be blank");
                    return false;
                }
            }
        }
    ]).then(data =>{
        const intern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool);
        myTeam.push(intern);
        menu()
    });
};



function createTeam(){

    const renderHTML = createHTML(myTeam)

    fs.writeFile('./index.html', renderHTML, err =>{
        if(err){
            console.log(err);
            return;
        }else{
            console.log("Success! Your team has been created in the index.html file")
        }
    })

}

addManager()

