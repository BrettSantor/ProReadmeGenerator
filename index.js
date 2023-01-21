const inquirer = require('inquirer')
const fs = require('fs')

inquirer
.prompt([
    {
        message: 'What is the title of your Project?',
        name: 'title',
        validate: function(input) {
            return input !== ""
        }
    },
    {
        message:'Please describe your project',
        name: 'description',
        validate: function(input) {
            return input !== ""
        }
    },
    {
        message: 'Please give installation instructions if any',
        name: 'installation',
        validate: function(input) {
            return input !== ""
        }
    },
    {
        message: 'Please give instructions on how to use your project',
        name: 'usage',
        validate: function(input) {
            return input !== ""
        }
    },
    {
        message: 'Please give guidelines on how others can contribute to your project if applicable',
        name: 'contribution',
        validate: function(input) {
            return input !== ""
        }
    },
    {
        type: 'checkbox',
        message: "Select a license",
        name: "license",
        choices: ['None', 'Apache', 'GNU', 'MIT', 'BSD 2-Clause "Simplified"', 'BSD 3-Clause', 'Boost Software', 'Creative Commons Zero v1.0', 'Eclipse Public 2.0', 'GNU Affero General Public v3.0', 'GNU General Public', 'GNU Lesser General Public v2.1', 'Mozilla Public 2.0', 'The Unlicense']
    },
    {
        message: 'Please give instructions on how to test your project if applicable',
        name: 'test',
        validate: function(input) {
            return input !== ""
        }
    },
    {
        message: 'Please enter your github username',
        name: 'github',
        validate: function(input) {
            return input !== ""
        }
    },
    {
        message: 'Please enter your email address',
        name: 'email',
        validate: function(input) {
            return input !== ""
        }
    }
])
 .then((response) => {
//     console.log(response.title + response.title + response.description + response.installation + response.usage + response.test + response.contribution + response.license + response.github + response.email)
    //todo create md file
    let projTitle = '# '+`${response.title}`
    fs.writeFile('testREADME.md', projTitle, (err) => {
        if (err)
        console.log(err);
        else {
            console.log("it's alive!")
        }
    })
    //todo append user input to file
    //todo create thinks to github and email
    //todo make table of contents clickable links to parts of the readme
    //todo make liscense a drop down list
    //! when liscense is selected create a badge of that option near the top of the readme
})