// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")


// array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter any installation instructions',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter any directions for usage',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Please provide the license selection for your project',
    choices: ['MIT', 'APACHE 2.0','None'],
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Enter any contribution guidelines',
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`README.md file successfully generated as ${fileName}`);
    }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
  });
}

// Function call to initialize app
init();
