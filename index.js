const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const output_dir = path.resolve(__dirname, 'dist');
const outputPath = path.join(output_dir, 'index.html');
const generateTeam = require('./src/htmlBuild');

// initialize the array to store responses
theTeam = [];

// This is the main function, it handles the questions for the employees through the use of Inquirer to ask questions to the user
function teamApp () {
    function createTeam () {
        inquirer.prompt([{
            type: 'list',
            name: 'addEmployeePrompt',
            message: 'What employee type would you like to add to the team?',
            choices: ['Manager', 'Engineer', 'Intern', 'I am done adding']
        }]).then(function (userInput) {
            // based on user choice we need a way to call the right next step based on that selection
            switch(userInput.addEmployeePrompt) {
                case 'Manager':
                    addManager();
                    break;
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                    htmlFileCreate();
            }
        })
    }

    // if Manager type is selected ask these questions and store them
    function addManager() {
        inquirer.prompt([{
            type: 'input',
            name: 'managerName',
            message: 'What is the managers name?'
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'What is the managers ID number?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the managers email?',
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is the managers office number?'
        }    
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
        theTeam.push(manager);
        createTeam();
    });
    }

    // if Engineer type is selected ask these questions and store them
    function addEngineer() {
        inquirer.prompt([{
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineers name?'
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'What is the engineers ID number?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineers email?'
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the engineers Github username?'
        }    
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
        theTeam.push(engineer);
        createTeam();
    });
    }

    // if Intern type is selected ask these questions and store them
    function addIntern() {
        inquirer.prompt([{
            type: 'input',
            name: 'internName',
            message: 'What is the interns name?'
        },
        {
            type: 'input',
            name: 'internID',
            message: 'What is the interns ID number?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the interns email?'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school does the intern attend?'
        }    
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
        theTeam.push(intern);
        createTeam();
    });
    }

    function htmlFileCreate() {
        console.log('Your team page is created! Location: ./src/team.html');
        fs.writeFileSync(outputPath, generateTeam(theTeam), 'UTF-8')
    }

    createTeam();

}

teamApp();

