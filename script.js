// https://jsonplaceholder.typicode.com/users
let users = document.querySelector(".users");
let searchInput = document.querySelector("input");
let searchBtn = document.querySelector(".search-btn");
let searchAllCountries = document.querySelector(".all-btn");
let up = document.querySelector(".up");
up.addEventListener('click', () => {
    window.scroll(0, 0)
})

// getCountries();
// function getCountries() {
//   fetch("https://restcountries.com/v3.1/all")
//     .then((user) => user.json())
//     .then((res) => {
//       console.log(res);
//       res.map((el) => {
//         let userImg = document.createElement("img");
//         let countrieName = document.createElement("h3");
//         let countriePopulation = document.createElement("span");
//         let countrieArea = document.createElement("span");
//         let div = document.createElement("div");
//         userImg.src = el.flags.png;
//         countrieName.innerText = el.name.common;
//         countriePopulation.innerText = `population: ${el.population}`;
//         countrieArea.innerText = `area: ${el.area} km²`;
//         div.append(userImg);
//         div.append(countrieName);
//         div.append(countriePopulation);
//         div.append(countrieArea);
//         users.append(div);
//       });
//     });
// }

// function getSearchCountries() {
//   fetch(`https://restcountries.com/v3.1/name/${searchInput.value}`)
//   .then((user) => user.json())
//     .then((res) => {
//       console.log(res);
//       res.map((el) => {
//         let userImg = document.createElement("img");
//         let countrieName = document.createElement("h3");
//         let countriePopulation = document.createElement("span");
//         let countrieArea = document.createElement("span");
//         let div = document.createElement("div");
//         userImg.src = el.flags.png;
//         countrieName.innerText = el.name.common;
//         countriePopulation.innerText = `population: ${el.population};`
//         countrieArea.innerText = `area: ${el.area} km²;`
//         div.append(userImg);
//         div.append(countrieName);
//         div.append(countriePopulation);
//         div.append(countrieArea);
//         users.append(div);
//       });
//     });
//   searchInput.value = "";
}
// searchAllCountries.addEventListener("click", () => {
//   users.innerHTML = "";
//   getCountries();
// });
// searchBtn.addEventListener("click", () => {
//   users.innerHTML = "";
//   getSearchCountries();
// });