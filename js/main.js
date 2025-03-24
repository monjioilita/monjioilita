/* script.js */

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    let index = 0;

    const info_important_information = document.querySelector("#important-information");
    const btn_connect = document.telegetElementById("connect-us");

    function slideImages() {
        index++;
        if (index >= slider.children.length) {
            index = 0;
        }
        slider.style.transform = `translateX(${-index * 100}%)`;
    }

    important_information.textContent = "CEO of Re-build Company";

    btn_connect.addEventListener("click", (e) => {
        event.preventDefault();

    alert("Loading the connection");
    });

    setInterval(slideImages, 3000);
});
