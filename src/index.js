import "./index.scss";

import home from "./home";
import work from "./work";

const rootContent = document.getElementById("root-content");
const menubarElement = document.getElementById("menubar");
const navBarElement = document.getElementById("nav-bar");
const overlayElement = document.getElementById("overlay");
const routes = ["home", "work"];

const updateNav = to => {
    const page = to.replace("#", "");

    let navElement = document.getElementById(`nav-${page}`);

    if (!navElement) {
        navElement = document.getElementById(`nav-home`);
    }

    routes.forEach(route => document.getElementById(`nav-${route}`).classList.remove("active"));

    if (navElement) {
        navElement.classList.add("active");
    }
};

const resetNavBar = () => {
    navBarElement.classList.remove("show");
    overlayElement.classList.add("hide");
};

const navigate = to => {
    let dom = "";

    if (to === "#work") {
        dom = work;
    } else {
        dom = home;
    }

    rootContent.innerHTML = dom;

    updateNav(to);
    resetNavBar();
}

window.addEventListener("hashchange", () => {
    navigate(location.hash);
}, false);

menubarElement.addEventListener("click", () => {
    navBarElement.classList.add("show");
    overlayElement.classList.remove("hide");
});

navigate(location.hash);
