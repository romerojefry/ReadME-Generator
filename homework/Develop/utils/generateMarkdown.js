function generateMarkdown(data) {
  return `
  
# ${info.title}

## Description 

## Table of contents 

-[Description](#Description)
-[license](#license)

## license 
${info.license}



# ${info.email}
# ${info.username}
`;
}

module.exports = generateMarkdown;
