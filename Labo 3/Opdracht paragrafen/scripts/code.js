const setup = () => {

    let belangrijk = document.getElementsByClassName("belangrijk");

    for(i=0; i<belangrijk.length; i++) {
        belangrijk[i].classList.add("opvallend");
    }
}
window.addEventListener("load", setup);