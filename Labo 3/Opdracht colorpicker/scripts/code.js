
const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", update)
    }

    update()
}

const update = () => {
    let colorbox = document.getElementById("blokje");
    let sliders = document.getElementsByClassName("slider");
    let labels = document.getElementsByClassName("label");

    for (let i = 0; i < sliders.length; i++) {
        labels[i].innerHTML = (sliders[i].value * 2.55).toFixed(0);
    }

    colorbox.style.backgroundColor = "rgb(" + (sliders[0].value * 2.55) + ", " + (sliders[1].value * 2.55) + ", " + (sliders[2].value * 2.55) + ")";
}
window.addEventListener("load", setup);