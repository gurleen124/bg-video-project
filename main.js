let btn = document.getElementById("toggle-btn");
let slide = btn.querySelector("span");
let video = document.querySelector("video");
let videoSection = document.querySelector("section");
let preloader = document.querySelector(".preloader");

window.onload = setTimeout(() => {
    preloader.classList.add("hidden");
}, 500);

btn.addEventListener('click', function () {
    if (!slide.classList.contains("left-1/2")) {
        slide.classList.add("left-1/2");
        slide.classList.remove("left-0");
        video.pause();
    } else {
        slide.classList.remove("left-1/2");
        slide.classList.add("left-0");
        video.play();
    }
})
videoSection.addEventListener('click', function () {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
})