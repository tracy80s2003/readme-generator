const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

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
        message: 'Installation instructions - What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. Otherwise, type N/A.',
        name: 'installation',
        validate: (value) => { if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        type: 'input',
        message: 'How do you use your app? Provide instructions and examples for use. Otherwise, type N/A.',
        name: 'usage',
        validate: (value) => { if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        // list of licenses
        type: 'list',
        message: 'Which license is the application covered under? This lets other developers know what they can and cannot do with your project.',
        name: 'license',
        choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'Other', 'N/A'],
        validate: (value) => { if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        type: 'input',
        message: 'Contribution Guidelines - If you created an application or package and would like other developers to contribute it, you should add guidelines here for how to do so. Otherwise, type N/A.',
        name: 'contribution',
        validate: (value) => { if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        type: 'input',
        message: 'Test instructions for your application - provide examples on how to run them. Otherwise, type N/A.',
        name: 'test',
        validate: (value) => { if(value){return true} else {return 'i need a value to continue'}},
    },
    {
        type: 'input',
        message: 'Questions? Otherwise, type N/A.',
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
    fs.writeFile("READMEgenerated.md", generateMarkdown(res), err => {
        if (err) throw err;
    })
    console.log('Your README has been generated!');
})
