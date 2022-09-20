const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const employeeCards = data => {
    var employeeInfo = '';
    for( i = 0; < data.length; i ++);{
        console.log(data[i])
        if(data[i].getRole() === 'Manager'){
            employeeInfo += managerInfo(data[i]);

        }else if(data[i].getRole() === "Intern"){
                employeeInfo += internInfo(data[i]);

        }else if(data[i].getRole() === "Engineer"){
            employeeInfo += engineerInfo(data[i]);
        }
    }
}