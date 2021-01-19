// function to generate markdown for README
function generateMarkdown(readme) {
  return `# ${readme.title}

***

## Description
${readme.description}
## Table of Contents
${readme.toc}
## Installation
${readme.installation}
## Usage
${readme.usage}
## Licenses
${readme.licenses}
### Contribution
${readme.contribution}
### Testing
${readme.test}
### Questions?
${readme.questions}

# Contact
* GitHub :${git}
* E-mail :${email}
`;
}



module.exports = generateMarkdown;
