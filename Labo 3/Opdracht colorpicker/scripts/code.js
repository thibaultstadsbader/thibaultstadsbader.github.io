const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", update)
    }

    update()
}

const update = () => {
    let colorbox = document.querySelector(".colorBoxRond")
    let sliders = document.querySelectorAll(".slider");
    let labels = document.querySelectorAll(".label");

    for (let i = 0; i < sliders.length; i++) {
        labels[i].textContent = (sliders[i].value * 2.55).toFixed(0);
    }

    colorbox.style.backgroundColor = "rgb(" + (sliders[0].value * 2.55) + ", " + (sliders[1].value * 2.55) + ", " + (sliders[2].value * 2.55) + ")";
}
window.addEventListener("load", setup);