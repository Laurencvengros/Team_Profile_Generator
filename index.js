const inquirer = require('inquirer');
const fs = require('fs');


const myTeam[];


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
                    console.log("You must enter an office number")
                }
            }
        },
    ]).then (data =>{
        const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.officeNumber);
        myTeam.push(manager);
    })
};

