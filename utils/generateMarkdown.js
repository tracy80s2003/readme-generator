// function to generate markdown for README
function generateMarkdown(readme) {
  return `
  
# ${readme.title}

***

## Description
${readme.description}

## Table of Contents
${readme.toc}
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
