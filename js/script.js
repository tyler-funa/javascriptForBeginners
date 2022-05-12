/********************************CREATE/APPEND ELEMENTS************************/

const header = elementCreate('h1', 'Magic Eight Ball');
const userQuery = elementCreate('textArea', '',);
const askButton = elementCreate('button', 'Ask Me Anything');
let answers = elementCreate('div');
let imgs = elementCreate('img','', answers);
  imgs.src = './magic/magic8ball_start.png';
/*******************************ASSIGN CLASSES*************************************************/
header.classList.add('container', 'text-center');
userQuery.classList.add('container-fluid', 'col-12');
askButton.classList.add('container-fluid');
answers.classList.add('container');
imgs.classList.add('container');








/***********************************FUNCTIONS*****************************************************/
function elementCreate(tag, text = '', parent = document.body) {
  const eleName = document.createElement(tag);
  eleName.textContent = text;
  parent.appendChild(eleName);
  return eleName;
}
function get(selector) {
  return document.querySelectorAll(selector);
}
function yourAnswer() {
  imgs.remove();
  const number = genRando();
  console.log(number,number,number);
  if (number === 0) {
    imgs.src = './magic/magic8ball_1.png'
    answers.appendChild(imgs);
  } else if (number === 1) {
    imgs.src = './magic/magic8ball_2.png'
    answers.appendChild(imgs);
  } else if (number === 2) {
    imgs.src = './magic/magic8ball_3.png'
    answers.appendChild(imgs);
  } else if (number === 3) {
    imgs.src = './magic/magic8ball_4.png'
    answers.appendChild(imgs);
  } else if (number === 4) {
    imgs.src = './magic/magic8ball_5.png'
    answers.appendChild(imgs);
  } else if (number === 5) {
    imgs.src = './magic/magic8ball_6.png'
    answers.appendChild(imgs);
  } else if (number === 6) {
    imgs.src = './magic/magic8ball_7.png'
    answers.appendChild(imgs);
  } else if (number === 7) {
    imgs.src = './magic/magic8ball_8.png'
    answers.appendChild(imgs);
  } else if (number === 8) {
    imgs.src = './magic/magic8ball_9.png'
    answers.appendChild(imgs);
  } else if (number === 9) {
    imgs.src = './magic/magic8ball_10.png'
    answers.appendChild(imgs);
  } else if (number === 10) {
    imgs.src = './magic/magic8ball_11.png'
    answers.appendChild(imgs);
  } else if (number === 11) {
    imgs.src = './magic/magic8ball_12.png'
    answers.appendChild(imgs);
  } else if (number === 12) {
    imgs.src = './magic/magic8ball_13.png'
    answers.appendChild(imgs);
  } else if (number === 13) {
    imgs.src = './magic/magic8ball_14.png'
    answers.appendChild(imgs);
  } else if (number === 14) {
    imgs.src = './magic/magic8ball_15.png'
    answers.appendChild(imgs);
  } else if (number === 15) {
    imgs.src = './magic/magic8ball_16.png'
    answers.appendChild(imgs);
  } else if (number === 16) {
    imgs.src = './magic/magic8ball_17.png'
    answers.appendChild(imgs);
  } else if (number === 17) {
    imgs.src = './magic/magic8ball_18.png'
    answers.appendChild(imgs);
  } else if (number === 18) {
    imgs.src = './magic/magic8ball_19.png'
    answers.appendChild(imgs);
  } else if (number === 19) {
    imgs.src = './magic/magic8ball_20.png'
    answers.appendChild(imgs);
  } else {
    console.log('something else');
  }
}



function genRando() {
  return Math.round(Math.random()*19)
}
/************************ON CLICK******************************************/
get('button')[0].addEventListener('click', yourAnswer);





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
