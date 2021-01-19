// function to generate markdown for README
function generateMarkdown(readme) {
  return `# ${readme.title}

***

*[Description]{#description}
*[Table of Contents]{#toc}
*[Installation]{#installation}
*[Usage]{#usage}
*[Licenses]{#licenses}
*[Contribution]{#contribution}
*[Testing]{#test}
*[Questions]{#questions}
*[Contact]{#contact}
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
