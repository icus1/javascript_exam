// JavaScript Document

let main = document.querySelector('main');//query selecter all
let submitButton = document.querySelector('input[type="submit"]');
let body = document.querySelector('body');//documant

submitButton.addEventListener('click', function(e) {//clickity click
  e.preventDefault();//prevent default
  let input = document.querySelector('input[type="text"]');//added
  let personName = input.value;
  let para = document.createElement('p');
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>';
  main.appendChild(para);//para instead of paragraph
  body.setAttribute('class', 'meow');
  console.log('=^..^=');
});
