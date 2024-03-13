const setup = () => {

    let btnResultaat = document.getElementById("btnResultaat");
    btnResultaat.addEventListener("click", waardenOpConsole);
}

const waardenOpConsole = () => {
    let checkRoker = document.getElementById("checkRoker").checked;
    let talen = document.getElementsByName("moedertaal");
    let landen = document.getElementById("selectLand").options;
    let selectBestelling = document.getElementById("selectBestelling").options;

    if (checkRoker) {
        console.log("is een roker")
    } else {
        console.log("is geen roker");
    }

    let moedertaal = "";
    for (let i = 0; i < talen.length; i++) {
        if (talen[i].checked) {
            moedertaal = talen[i].value;
        }
        console.log("moedertaal is " + moedertaal);
    }

    let favoLand = "";
    for (let i = 0; i < landen.length; i++) {
        if (landen[i].selected) {
            favoLand = landen[i].value;
        }
        console.log("favoriete buurland is " + favoLand);
    }

    let bestelling = [];
    for (let i = 0; i < selectBestelling.length; i++) {
        if (selectBestelling[i].selected) {
            bestelling.push(selectBestelling[i].value);
        }
    }
    console.log("bestelling bestaat uit " + bestelling.join(" "));
}
window.addEventListener("load", setup);