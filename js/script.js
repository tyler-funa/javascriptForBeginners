/********************************CREATE/APPEND ELEMENTS************************/

const header = elementCreate('h1', 'Magic Eight Ball');
const userQuery = elementCreate('textArea', '',);
const askButton = elementCreate('button', 'Ask Me Anything');






/***********************************FUNCTIONS***************************/
function elementCreate(tag, text = '', parent = document.body) {
  const eleName = document.createElement(tag);
  eleName.textContent = text;
  parent.appendChild(eleName);
  return eleName;
}
function get(selector) {
  return document.querySelectorAll(selector);
}
/************************ON CLICK******************************************/




/********************************FINAL PROJECT**********************************/
/*
Begin your final project:
Your final project will be to build a magic 8 ball app
Create a new repository named: magic8ball
Clone your repository
Add your index file, stylesheet, script file and the provided 8ball images
Main objectives:
Create an input field for users to ask a question
Create a label for your input field telling your user to "Ask me anything!"
Create an "ask" button (this will run the function that outputs a random magic 8 ball image)
Create a div with an id of "answers" that you will insert the images into using js
Create an "ask" function that when clicked, will choose a random 8ball image and insert it into your "answers" div
Replace the input field with the user's question when displaying the answer
Style your page any way you like
Activate Github Pages for your project
*/
