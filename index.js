// Your application should prompt the user for information like
// their name, location, bio, LinkedIn URL, and GitHub URL. Feel free to add any additional prompts you think of.

// An HTML document containing the information collected from the prompts
// should be constructed and written to the file system. Be sure to add some CSS styling to the document

const fs = require("fs");
const inquirer = require("inquirer");
// const generateHtml = require("./generateHtml.js");

const userPrompt = () => 
  inquirer.prompt([
    {
      type: "input",
      name: "userName",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "location",
      message: "What is your location?",
    },
    {
      type: "input",
      name: "bio",
      message: "Describe yourself in two statements",
    },
    {
      type: "input",
      name: "linkedIn",
      message: "What is your linkedIn address?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your Github address?",
    },
  ]);


const generateHtml = (answers) => {
  console.log("test1");
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.userName}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedIn}</li>
    </ul>
  </div>
</div>
</body>
</html
  
  `;
};

const writeFile = () => {
  console.log("test");
  userPrompt().then((answers) => {
    try {
      const html = generateHtml(answers);
      fs.writeFileSync("index.html", html);
      console.log("success");
    } catch (err) {
      console.log(err);
    }
  });
};

writeFile();
