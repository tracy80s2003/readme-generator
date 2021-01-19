// function to generate markdown for README
function generateMarkdown(apples) {
  return `# ${apples.title}
## Description

${apples.description}
`;
}

module.exports = generateMarkdown;
