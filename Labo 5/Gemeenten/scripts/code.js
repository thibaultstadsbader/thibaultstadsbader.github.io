const setup = () => {

    let selectElement = document.getElementById("selectGemeente");
    let gemeenten = [];

    while(true) {
        let gemeente = prompt("geef een paar gemeentes op.");
        if (gemeente.toLowerCase() === "stop") {
            break;
        }
        gemeenten.push(gemeente);
    }

    //vergelijkingsfunctie voor de sortmethode
    const compare = (a, b) => {
        return a.localeCompare(b);
    }

    //gemeentes alfabetisch rangschikkken
    gemeenten.sort(compare);
    //voor elke optie (gemeente) een option element aanmaken, de value en text toevoegen en toevoegen aan het select element
    for (let i = 0; i < gemeenten.length; i++) {
        let optie = document.createElement("option")
        optie.text = gemeenten[i];
        optie.value = gemeenten [i];
        selectElement.add(optie);
    }
}
window.addEventListener("load", setup);