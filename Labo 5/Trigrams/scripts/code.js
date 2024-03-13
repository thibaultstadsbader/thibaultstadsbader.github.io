const setup = () => {
    let woord = "onoorbaar";
    let trigram = "";
    for (let i = 0; i < woord.length; i++) {
        trigram = woord.slice(i, i+3);
        if (trigram.length >= 3) {
            console.log(trigram);
        }
    }
}
window.addEventListener("load", setup);