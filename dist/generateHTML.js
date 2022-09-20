

const generateCards = data => {
    var employeeInfo = '';
    for( var i = 0; i < data.length; i ++){
        console.log(data[i])
        if(data[i].getRole() === 'Manager'){
            employeeInfo += managerInfo(data[i]);

        }else if(data[i].getRole() === 'Intern'){
                employeeInfo += internInfo(data[i]);

        }else if(data[i].getRole() === 'Engineer'){
            employeeInfo += engineerInfo(data[i]);
        }
    }
    return employeeInfo;
}

const generateHTML = (data) => {
    console.log(data)

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Generator</title>
        
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
        <link rel="stylesheet" href="./dist/style.css">
    </head>
    
    <body>
    
        <header>
            <div class="jumbotron jumbotron-fluid">
                <div class="container text-center">
                    <h1 class="display-4">My Team</h1>
                </div>
            </div>
            
        </header>

<main class = "row justify-content-center">
${generateCards(data)}
</main>






</body>
</html>
    `;
};

const managerInfo = (data) => {
    return `
    <div class="col-4-sm-12 justify-content-center">
    <div class="card" style="width: 18rem;">
        <div class = "card-header text-white">
            <h5 class="card-title text-white">${data.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-white"><i class="fas fa-mug-hot"></i> Manager</h6>
            
        </div>
    
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">Employee ID: ${data.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">Office Number: ${data.officeNumber}</li>
            </ul>
        </div>
    </div>
</div>
    `
}

const internInfo = (data) => {
    return `
    <div class="col-4-sm-12 justify-content-center">
    <div class="card" style="width: 18rem;">
        <div class = "card-header text-white">
            <h5 class="card-title text-white">${data.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-whited"><i class="fas fa-graduation-cap"></i> Intern</h6>
            
        </div>
    
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">Employee ID: ${data.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">School: ${data.school}</li>
            </ul>
        </div>
    </div>
</div>
    `
}

const engineerInfo = (data) => {
    return `
    <div class="col-4-sm-12 justify-content-center">
    <div class="card" style="width: 18rem;">
        <div class = "card-header text-white">
            <h5 class="card-title text-white">${data.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-white"><i class="fas fa-glasses"></i> Engineer</h6>
            
        </div>
    
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">Employee ID: ${data.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${data.github}" target="_blank">${data.github}</a></li>
            </ul>
        </div>
    </div>
</div>
    `
}

module.exports = generateHTML;