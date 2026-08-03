/*
=========================================================
KYVERAN Website
Main JavaScript File
=========================================================
*/

"use strict";

/*
=========================================================
DOM Elements
=========================================================
*/

const languageButtons = document.querySelectorAll("[data-language]");
const germanElements = document.querySelectorAll('[data-lang="de"]');
const englishElements = document.querySelectorAll('[data-lang="en"]');

/*
=========================================================
Default Language
=========================================================
*/

let currentLanguage = "de";

/*
=========================================================
Language Functions
=========================================================
*/

function setLanguage(language) {

    currentLanguage = language;

    germanElements.forEach((element) => {

        element.style.display =
            language === "de" ? "" : "none";

    });

    englishElements.forEach((element) => {

        element.style.display =
            language === "en" ? "" : "none";

    });

    localStorage.setItem("language", language);

}

/*
=========================================================
Language Buttons
=========================================================
*/

languageButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const language = button.dataset.language;

        setLanguage(language);

    });

});

/*
=========================================================
Initialize Language
=========================================================
*/

const savedLanguage = localStorage.getItem("language");

if (savedLanguage) {

    setLanguage(savedLanguage);

} else {

    setLanguage(currentLanguage);

}

/*
=========================================================
Scroll Reveal
=========================================================
*/

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

/* =========================================================
   Hero Parallax
========================================================= */

const hero = document.querySelector("#hero");

if (hero) {

    hero.addEventListener("mousemove", (e) => {

        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        hero.style.backgroundPosition =
            `${50 + x * 0.3}% ${50 + y * 0.3}%`;

    });

    hero.addEventListener("mouseleave", () => {

        hero.style.backgroundPosition = "center";

    });

}