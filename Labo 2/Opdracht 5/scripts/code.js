const setup = () => {
    const veranderTekst = () => {
        let pElement=document.getElementById("txtOutput");
        pElement.innerHTML="Welkom!";
    }

    let wijzigBtn  = document.getElementById("wijzigBtn");
    wijzigBtn.addEventListener("click", veranderTekst);

}
window.addEventListener("load", setup);