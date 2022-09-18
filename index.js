const inquirer = require('inquirer');
const fs = require('fs');


const employees[];

function addEmployee(){
    inquirer.prompt([
        {
            type: "list",
            name: "employeeType",
            message: "What is they employee's role?",
            choices: ["Manager", "Engineer", "Intern", "finished" ]
        },
    ]).then(createEmployee =>{
        switch (createEmployee.employeeType){
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case "finished":
                createTeam();
                break;
        }
    })
}

