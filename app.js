/*
Public API Repo
https://github.com/public-apis/public-apis
*/

// let cat = document.querySelector(".cat");
// let fox = document.querySelector(".fox");
// let dog = document.querySelector(".dog ");

// const catBtn = document.querySelector(".get-cat");
// const foxBtn = document.querySelector(".get-fox");
// const dogBtn = document.querySelector(".get-dog");

// catBtn.addEventListener("click", getRandomCat);
// foxBtn.addEventListener("click", getRandomFox);
// dogBtn.addEventListener("click", getRandomDog);

// // ----------------------------------------------------Get Random Cat Images
// function getRandomCat() {
//   fetch("https://aws.random.cat/meow")
//     .then((response) => response.json())
//     .then((responseData) => {
//       cat.innerHTML = `<img src="${responseData.file}" />`;
//     });
// }

// // ----------------------------------------------------Get Random Fox Images
// function getRandomFox() {
//   fetch("https://randomfox.ca/floof/")
//     .then((response) => response.json())
//     .then((responseData) => {
//       fox.innerHTML = `<img src="${responseData.image}" />`;
//     });
// }

// // ----------------------------------------------------Get Random Dog Images
// function getRandomDog() {
//   fetch("https://random.dog/woof.json")
//     .then((response) => response.json())
//     .then((responseData) => {
//       dog.innerHTML = `<img src="${responseData.url}" />`;
//     });
// }

// give it all you got and reach for the top

/*
my code below
*/

let cat = document.querySelector(".cat");
let fox = document.querySelector(".fox");
let dog = document.querySelector(".dog");

const catBtn = document.querySelector(".get-cat");
const foxBtn = document.querySelector(".get-fox");
const dogBtn = document.querySelector(".get-dog");

catBtn.addEventListener("click", getRandomCat);
foxBtn.addEventListener("click", getRandomFox);
dogBtn.addEventListener("click", getRandomDog);

// kitty cat images function

function getRandomCat() {
  fetch("https://aws.random.cat/meow")
    .then((response) => response.json())
    .then((responseData) => {
      cat.innerHTML = `<img src="${responseData.file}" />`;
    });
}

// fleet foxes

function getRandomFox() {
  fetch("https://randomfox.ca/floof")
    .then((response) => response.json())
    .then((responseData) => {
      // console.log(responseData);
      fox.innerHTML = `<img src="${responseData.image}" />`;
    });
}

// puppydogs

function getRandomDog() {
  fetch("https://random.dog/woof.json")
    .then((response) => response.json())
    .then((responseData) => {
      dog.innerHTML = `<img src='${responseData.url}' />`;
    });
}
