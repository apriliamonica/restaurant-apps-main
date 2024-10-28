import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";

import "./components/footer-bar.js";
import "./components/header-bar.js";

const renderAllResto = (restaurants) => {
  const listRestoElement = document.querySelector(".restoran");
  listRestoElement.innerHTML = "";

  restaurants.forEach((resto) => {
    listRestoElement.innerHTML += `
        <div class="list">
                <div class="con-img">
                  <img src="${resto.pictureId}" alt="Gambar ${resto.nama}" />
                </div>
                <div class="ratting">
                  <i class="bx bx-star"></i>
                  <i>${resto.rating}</i>
                </div>
                <div class="list-info">
                  <h3 tabindex="0">${resto.name}</h3>
                  <h2>${resto.city}</h2>
                  <p>${resto.description}</p>
                </div>
              </div>
      `;
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  const resto = await fetch("./data/DATA.json");
  const restaurants = await resto.json();
  renderAllResto(restaurants.restaurants);
});

const navDaftar = document.querySelector(".nav-daftar");

const menu = document.querySelector("#nav-toggle");
console.log(menu);
menu.addEventListener("click", () => {
  console.log("navDaftar");
  console.log("menu clicked");
  navDaftar.classList.toggle("active");
});

const navItem = document.querySelectorAll(".nav-item");
navItem.forEach((n) =>
  n.addEventListener("click", navDaftar.classList.remove("active"))
);
