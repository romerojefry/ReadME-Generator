function generateMarkdown(info) {
  return `
  
# ${info.title}

## Description 

${info.description}

## Table of contents 

* [Description](#Description)
* [license](#license)

## license 
${info.license}



# ${info.email}
# ${info.username}
`;
}

module.exports = generateMarkdown;
