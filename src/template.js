const generateTeam = team => {

    // create manager card(s)
    const generateManager = manager => {
        return `
        <div class="card employee card">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${manger.getName()}</h2>
                <h3 class="card-title"><i class="fa-solid fa-mug-saucer" mr-2></i>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    // create engineer card(s)
    const generateEngineer = engineer => {
        return `
        <div class="card employee card">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title"><i class="fa-solid fa-glasses mr-2></i>${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
        `;
    };

    // create intern card(s)
    const generateIntern = intern => {
        return `
        <div class="card employee card">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title"><i class="fa-solid fa-graduation-cap mr-2></i>${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filer(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
        .join('')
    );
    html.push(team
        .filer(employee => employee.getRole() === 'Intern')
        .map(intern => generateEngineer(intern))
        .join('')
    );

    return html.join('');
}

const htmlHead = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>The Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>`

const bodyTop = `
    <body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-success">
                <h1 class="text-center text-light">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">`

const bodyBottom = `
            </div>
        </div>
    </div>
    </body>
</html>`

// Complete built of HTML page
module.exports = team => {
    return `${htmlHead}\n
            ${bodyTop}\n
            ${generateTeam(team)}\n
            ${bodyBottom}`
}