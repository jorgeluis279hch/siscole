import { getHTML } from "./includer.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  // el nombre se u,sa como selector no debemos modificar sino fallara
  let pages = ["inicio", "level", "log", "stat", "operation"];
  pages.forEach((page) => getHTML(page + ".html"));

  // adding listener
});

d.addEventListener("click", (e) => {
  const menu = d.querySelector(".barra");

  if (e.target.matches(".menu-item")) {
    const includeDivs = d.querySelectorAll(".includes > .include");
    includeDivs.forEach((elem) => elem.classList.remove("active"));
    let idName = e.target.href.split("#")[1];
    const includeForView = d.getElementById(idName);
    includeForView.classList.add("active");
    if (d.documentElement.clientWidth < 640) {
      menu.classList.add("min");
    }
  }

  if (e.target.matches(".control")) {
    menu.classList.toggle("min");
  }
});

d.addEventListener("change", (e) => {
  if (e.target.matches(".level-grade")) {
    d.querySelector("#output-grade").textContent = e.target.value;
  }
});
// const outputGrade = d.getElementById("output-grade");

// function gradeHandler(e) {
//   outputGrade.textContent = e.target.value;
// }

// grade.addEventListener("change", gradeHandler);
