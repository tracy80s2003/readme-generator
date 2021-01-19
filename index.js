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
        message: 'If your README is very long, add a table of contents to make it easy for users to find what they need.',
        name: 'toc',
        validate: (value) => { if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        type: 'input',
        message: 'Installation instructions - What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation',
        validate: (value) => { if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        type: 'input',
        message: 'How do you use your app? Provide instructions and examples for use.',
        name: 'usage',
        validate: (value) => { if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        // list of licenses
        type: 'list',
        message: 'Which license is the application covered under? This lets other developers know what they can and cannot do with your project.',
        name: 'license',
        choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
        validate: (value) => { if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        type: 'input',
        message: 'Contribution Guidelines - If you created an application or package and would like other developers to contribute it, you should add guidelines here for how to do so.',
        name: 'contribution',
        validate: (value) => { if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        type: 'input',
        message: 'Test instructions - Go the extra mile and write tests for your application. Then provide examples on how to run them.',
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
    console.log('Your Readme has been generated!');
})
