const setup = () => {

    window.alert("Dit is een mededeling.");

    let antwoord = window.confirm("Weet u het zeker?");
    console.log("antwoord: " + antwoord);

    let naam = window.prompt("Wat is uw naam?", "onbekend");
    console.log("naam: " + naam);
}
window.addEventListener("load", setup);