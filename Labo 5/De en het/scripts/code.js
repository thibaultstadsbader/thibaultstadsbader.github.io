const setup = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";

    let woorden = tekst.split(' ');

    for (i = 0; i < woorden.length; i++) {
        if(woorden[i].trim() === "de") {
            woorden[i] = "het";
        }
    }
    let nieuweZin = woorden.join(' ');
    console.log(nieuweZin);
}
window.addEventListener("load", setup);