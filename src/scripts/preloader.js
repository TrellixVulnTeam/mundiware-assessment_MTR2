// Toggle the visibility of the preloader animation on page load.
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const body = document.querySelector("body");
    preloader.classList.toggle("hidden");
    body.classList.remove("stop-scrolling");
});
