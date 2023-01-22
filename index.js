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
        message: 'Please list any collaborators',
        name: 'credits',
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
    let licenseString = response.license[0]
    let liBadge = licenseString.replaceAll(' ', '%20')
    let projTitle = '# '+`${response.title}\n`+'![badmath](https://img.shields.io/badge/license-'+liBadge+'-blue)\n'
    fs.writeFileSync('createReadme.md', projTitle, (err) => {
        if (err)
        console.log('oops '+err);
        else {
            console.log("it's alive!")
        }
    })

    fs.appendFileSync('createReadme.md', '## description\n'+`${response.description}`, (err) => {
        if (err)
        console.log('oops '+err)})
        
    fs.appendFileSync('createReadme.md', '\n## Table of Contents \n * [Installation](#installation)\n* [Usage](#usage)\n* [Credits](#credits)\n* [Contributions](#contribution)\n* [License](#license)\n* [Testing](#Testing)\n* [Questions](#questions)\n', (err) => {
        if (err)
        console.log('oops '+err)})

    fs.appendFileSync('createReadme.md', '\n## Installation \n '+`${response.installation}`, (err) => {
        if (err)
        console.log('oops '+err)})

    fs.appendFileSync('createReadme.md', '\n## Usage \n '+`${response.usage}`, (err) => {
        if (err)
        console.log('oops '+err)})

    fs.appendFileSync('createReadme.md', '\n## Credits \n '+`${response.credits}`, (err) => {
        if (err)
        console.log('oops '+err)})

    fs.appendFileSync('createReadme.md', '\n## Contributions \n '+`${response.contribution}`, (err) => {
        if (err)
        console.log('oops '+err)})

    fs.appendFileSync('createReadme.md', '\n## License \n '+`${response.license}`, (err) => {
        if (err)
        console.log('oops '+err)})

    fs.appendFileSync('createReadme.md', '\n## Testing \n '+`${response.test}`, (err) => {
        if (err)
        console.log('oops '+err)})

    fs.appendFileSync('createReadme.md', '\n## Questions \n '+'If you have any questions you can refer to my github at this link or email me! \n'+" * [Github](github.com/"+`${response.github}`+') \n'+"* "+`${response.email}`, (err) => {
        if (err)
        console.log('oops '+err)})
})