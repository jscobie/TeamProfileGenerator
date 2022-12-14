const generateTeam = team => {

    // create manager card(s)
    const generateManager = manager => {
        return `
        <div class="card employee-card">
            <div class="card-header bg-danger text-white">
                <h2 class="card-title">${manager.name}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    // create engineer card(s)
    const generateEngineer = engineer => {
        return `
    <div class="card employee-card">
        <div class="card-header bg-success text-white">
                <h2 class="card-title">${engineer.name}</h2>
                <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
        `;
    };

    // create intern card(s)
    const generateIntern = intern => {
        return `
    <div class="card employee-card">
        <div class="card-header bg-info text-white">
            <h2 class="card-title">${intern.name}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
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
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
        .join('')
    );
    html.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateIntern(intern))
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
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Nabla&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
    <body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-primary">
                <h1 class="text-center text-light font-type">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">`

const htmlBottom = `
            </div>
        </div>
    </div>
    </body>
</html>`

// Complete build of HTML page for html output
module.exports = team => {
    return `${htmlHead}
            ${generateTeam(team)}
            ${htmlBottom}`
}