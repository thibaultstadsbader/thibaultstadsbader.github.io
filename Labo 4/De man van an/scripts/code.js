const setup = () => {
    console.log(hoeveelKeerAnIndexOf("de man van an"));
    console.log(hoeveelKeerAnLastIndexOf("de man van an"));
}

const hoeveelKeerAnIndexOf = (tekst) => {
    let counter = 0;
    let i = 0;

    while(tekst.indexOf("an", i) > -1) {
        i = tekst.indexOf("an", i) + 1;
        counter++;
    }
    return counter;
}

const hoeveelKeerAnLastIndexOf = (tekst) => {
    let counter = 0;
    let i = tekst.length -1;

    while(tekst.lastIndexOf("an", i) > -1) {
        i = tekst.lastIndexOf("an", i) - 1;
        counter++;
    }
    return counter;
}
window.addEventListener("load", setup);