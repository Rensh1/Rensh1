const helloButton = document.getElementById("helloButton");

helloButton.addEventListener("click", () => {
    helloButton.textContent = "Ayee 👋 Hello, you too!";
    setTimeout(() => {
        helloButton.textContent = "💬 Say Hello";
    }, 2000);
});

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀";
    } else {
        themeButton.textContent = "☾";
    }
});

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".interest-card");

filters.forEach(filter => {
    filter.addEventListener("click", () => {

        filters.forEach(button => {
            button.classList.remove("active");
        });

        filter.classList.add("active");

        const category = filter.dataset.filter;

        cards.forEach(card => {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });
    });
});

const statuses = [
    "Alive.",
    "Probably playing a game.",
    "Listening to music.",
    "Thinking about fictional characters.",
    "Wondering why I made this website.",
    "Doing absolutely nothing."
];

const statusButton = document.getElementById("changeStatus");
const currentStatus = document.getElementById("currentStatus");

let statusIndex = 0;

statusButton.addEventListener("click", () => {

    statusIndex++;

    if (statusIndex >= statuses.length) {
        statusIndex = 0;
    }

    currentStatus.textContent = statuses[statusIndex];
});

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percentage =
        (scrollTop / height) * 100;

    document.getElementById("scrollProgress").style.width =
        percentage + "%";
});
