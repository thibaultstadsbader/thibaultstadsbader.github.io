
const setup = () => {
    let btnHerbereken = document.getElementById("btnHerbereken");
    btnHerbereken.addEventListener("click", herbereken);

    herbereken();
}

const herbereken = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btws = document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("subtotaal");
    let txtTotaal = document.getElementById("totaal");
    let totaal = 0;

    for (let i = 0; i < btws.length; i++) {
        let aantal = parseFloat(aantallen[i].value, 10);
        let btw = parseFloat(btws[i].innerHTML, 10);
        let prijs = parseFloat(prijzen[i].innerHTML, 10);
        let subtotaal = aantal * prijs * (1+(btw/100));
        totaal += subtotaal;

        subtotalen[i].textContent = subtotaal.toFixed(2) + " EUR";

        txtTotaal.textContent = totaal.toFixed(2) + " EUR";
    }
}
window.addEventListener("load", setup);