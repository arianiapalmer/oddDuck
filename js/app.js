'use strict'
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let randomObject1, randomObject2, randomObject3;

let imgSection = document.getElementById('imgSection')
const maxRounds = 25;
let userClicks = 0;
let resultsButton = document.getElementById('resultsButton');
let resultsDisplay = document.getElementById('resultsDisplay');
let totalVotes = [];

let images = [
    'bag',
    'banana',
    'bathroom',
    'boots',
    'breakfast',
    'bubblegum',
    'chair',
    'cthulhu',
    'dog-duck',
    'dragon',
    'pen',
    'pet-sweep',
    'scissors',
    'shark',
    'tauntaun',
    'unicorn',
    'water-can',
    'wine-glass',
]
let allProducts = [];

let Product = function (name, extension = '.jpg') {
    this.name = name;
    this.path = `img/${name}${extension}`;
    this.timeShown = 0;
    this.timesClicked = 0;
    allProducts.push(this);
}

for(let i = 0; i < images.length; i++){
    new Product(images[i]);
}
new Product('sweep', '.png');

let getRandomIndex = function (){
    return Math.floor(Math.random()* allProducts.length);
}
let genRandomImg = function (){
    let randomImg1, randomImg2, randomImg3;
    randomImg1 = getRandomIndex();
    randomImg2 = getRandomIndex();
    randomImg3 = getRandomIndex();

    while (randomImg1 === randomImg2) {
        randomImg2 = getRandomIndex();
    }
    while (randomImg2 === randomImg3 || randomImg1 === randomImg3){
        randomImg3 = getRandomIndex();
    }

    randomObject1 = allProducts[randomImg1];
    randomObject2 = allProducts[randomImg2];
    randomObject3 = allProducts[randomImg3];
    
    img1.src = randomObject1.path;
    img1.id = randomObject1.name;
    img2.src = randomObject2.path;
    img2.id = randomObject2.name;
    img3.src = randomObject3.path;
    img3.id = randomObject3.name;

    randomObject1.timeShown += 1;
    randomObject2.timeShown += 1;
    randomObject3.timeShown += 1;
}
genRandomImg();

function handleVote(event){
    let name = event.target.id;
    if (name === randomObject1.name){
        randomObject1.timesClicked+= 1;
        timesClicked.push(totalVotes);
    } else if (name === randomObject2.name){
        randomObject2.timesClicked+= 1;
    } else if (name === randomObject3.name){
        randomObject3.timesClicked+= 1;
    }
    
    userClicks++
    if(userClicks === maxRounds){
        imgSection.removeEventListener('click', handleVote);
        imgSection.hidden = true;
        resultsButton.hidden = false;

    }
    genRandomImg();
    allProducts[i].this.timesClicked.push(totalVotes);
    
}
function handleResults(event){
    let resultsList = document.createElement('ul');
    resultsDisplay.appendChild(resultsList);
    for (let i = 0; i < allProducts.length; i++){
        let resultItem = document.createElement('li');
        resultItem.textContent = `${allProducts[i].name} had ${allProducts[i].timesClicked} votes, and was seen ${allProducts[i].timeShown} times.`
        resultsList.appendChild(resultItem);
    }

}


imgSection.addEventListener('click', handleVote)
resultsButton.addEventListener('click', handleResults)


