const setup = () => {

    let familieleden = ['Ella', 'Thibault', 'Paulien', 'Marie', 'Andres'];

    console.log(familieleden.length);

    console.log(familieleden[0]);
    console.log(familieleden[2]);
    console.log(familieleden[4]);

    const VoegNaamToe = (familieleden) => {
        let nieuweNaam = prompt("Voer een nieuwe naam in:");
        familieleden.push(nieuweNaam);
        console.log(nieuweNaam);
    }

    VoegNaamToe(familieleden);

    console.log(familieleden.join(" - "));
}
window.addEventListener("load", setup);