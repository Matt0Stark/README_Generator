// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
   } else if (license === "Apache"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
   } else {
    return "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)"
   }
}

//    redundant (badge contains link)
// function renderLicenseLink(license) {
//    if (license === "MIT"){
//     return "https://opensource.org/licenses/MIT"
//    } else if (license === "Apache"){
//     return "https://opensource.org/licenses/Apache-2.0"
//    } else {
//     return "https://firstdonoharm.dev"
//    }
// }
 


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}

## Description:
  ${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)

## Installation
  ${data.installation}

## Usage
  ${data.usage}

## Credits
  ${data.credits}

## License
*  this project is under the ${data.license} license.
*  ${renderLicenseBadge(data.license)}


## Tests
  ${data.tests}

## Questions
  ${data.questions}

`;
}

module.exports = generateMarkdown;
