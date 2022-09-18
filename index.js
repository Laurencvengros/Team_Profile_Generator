const inquirer = require('inquirer');
const fs = require('fs');


const myTeam = [];


function addManager(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Manager's name?",
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
            messgae: "What is your employee ID number?",
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
            message: "What is your email?",
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
            message: "What is your office number?",
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


function addEmployee(){
    inquirer.prompt([
        {
            type: "list",
            message: "What is the employees role?",
            name: "employeeRole",
            choices: ["Engineer","Intern"]
        }
    ]).then (function (answers){
        switch(answers.employeeRole){
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case "done":
                createTeam();
                break
        }
    })
}

function addEngineer(){
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the employee's name",
            name: "engineerName",
            validate: engineerName =>{
                if(engineerName){
                    return true;
                }else{
                    console.log("Employees name cannot be blank");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Please Enter the employee's ID number",
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
            message: "Please Enter the employee's email address",
            name: "engineerEmail",
            validate: engineerEmail =>{
                if(engineerEmail){
                    return true;
                }else{
                    console.log("Employee email cannot be blank");
                    return false;
                }
            }
        },
        {
            type: "input",
            mesasge: "Please enter the employees GitHub username",
            name: "engineerGithub",
            validate: engineerGithub =>{
                if(engineerGithub){
                    return true;
                }else{
                    console.log("Employee GitHub username required");
                    return false;
                }
            }
        }
    ]).then (data => {
        const engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGithub);
        myTeam.push(engineer);
        addEmployee();
    })
}
