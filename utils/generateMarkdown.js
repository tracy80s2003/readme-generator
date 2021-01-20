// function to generate markdown for README
function generateMarkdown(response) {
  return `
  
# ${response.title}

***

## Description
${response.description}

## Table of Contents
${response.toc}
*[Description]{#description}
*[Table of Contents]{#toc}
*[Installation]{#installation}
*[Usage]{#usage}
*[Licenses]{#licenses}
*[Contribution]{#contribution}
*[Testing]{#test}
*[Questions]{#questions}
*[Contact]{#contact}

***

## Installation
${response.installation}

## Usage
${response.usage}

## License
${response.license}

### Contribution
${response.contribution}

### Testing
${response.test}

### Questions?
${response.questions}

# Contact
* GitHub :${response.git}
* E-mail :${response.email}
`;
}



module.exports = generateMarkdown;
