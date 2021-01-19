const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");
const fs = require("fs")

// array of questions for user
inquirer.prompt(
[
    {
        type: 'input',
        message: "What is the title of your project?",
        name: "title",
        // validate property to check that the user provided a value
        validate: (value) => { if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        type: 'input',
        message: "Provide a brief description of your project.",
        name:"description",
        validate: (value) => { if(value){return true} else {return 'i need a value to continue'}},        
    },
    {
        type: 'input',
        message: 'What should be included in the Table of Contents?',
        name: 'toc',
        validate: (value) => { if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        type: 'input',
        message: 'Installation instructions',
        name: 'installation',
        validate: (value) => { if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        type: 'input',
        message: 'How do you use your app?',
        name: 'usage',
        validate: (value) => { if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        // list of licenses
        type: 'list',
        message: 'Which license is the application covered under?',
        name: 'license',
        choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
        validate: (value) => { if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        type: 'input',
        message: 'Contribution guidelines',
        name: 'contribution',
        validate: (value) => { if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        type: 'input',
        message: 'Test instructions',
        name: 'test',
        validate: (value) => { if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        type: 'input',
        message: 'Questions?',
        name: 'questions',
        validate: (value) => { if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        type: 'input',
        message: 'GitHub username:',
        name: 'git',
        validate: (value) => { if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        type: 'input',
        message: 'E-mail:',
        name: 'email',
        validate: (value) => { if(value){return true} else {return 'i need a value to continue'}},
    },
]).then(res => {
    console.log(res)
    fs.writeFile("README.md", markdown(res), err => {
        if (err) throw err;
    })
})
