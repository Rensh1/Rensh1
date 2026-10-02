/* =========================
   HELLO BUTTON
========================= */

const helloButton =
    document.getElementById("helloButton");

const helloMessage =
    document.getElementById("helloMessage");


helloButton.addEventListener("click", function () {

    helloMessage.textContent =
        "Hello!! Thanks for visiting my page ♡";

});


/* =========================
   DARK MODE
========================= */

const themeButton =
    document.getElementById("themeButton");


themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});
