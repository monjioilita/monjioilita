/* script.js */

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    let index = 0;

    function slideImages() {
        index++;
        if (index >= slider.children.length) {
            index = 0;
        }
        slider.style.transform = `translateX(${-index * 100}%)`;
    }

    setInterval(slideImages, 3000);
});
