
let requestURL = 'https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json';

let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


let submit = document.querySelector('input[type="submit"]');

submit.addEventListener('click', function(e) {
    e.preventDefault();
    alert("test");
  let stuff = request.response;
  console.log(stuff);
  objects(stuff);
});

function objects(jsonObj) {

  let cats = jsonObj.cats;

  for(let i = 0; i < cats.length; i++) {

    let article = document.createElement('article');
    let name = document.createElement('h2');
    let species = document.createElement('p');
    let favFoods = document.createElement('ul');
    let age = document.createElement('p');
    let foods = document.createElement('li');

    let body = document.querySelector('body');
    name.textContent = cats[i].name;
    species.textContent = 'species: ' + cats[i].species;
    for(let i = 0; i< cats.favFoods.length; i++){
      foods.textContent = cats.favFoods[i];
      favFoods.appendChild(foods);
    }
    age.textContent = 'Age: ' + cats[i].age

    article.appendChild(name);
    article.appendChild(species);
    article.appendChild(favFoods);
    article.appendChild(age);
    body.appendChild(article);


  }

}
