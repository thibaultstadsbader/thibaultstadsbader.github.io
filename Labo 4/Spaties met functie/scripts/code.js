const setup = () => {
    let btnUitvoeren = document.getElementById("btnUitvoeren");
    btnUitvoeren.addEventListener("click", uitvoeren);
}

const uitvoeren = () => {
    let txtInput = document.getElementById("txtInput").value;
    let resultaat = maakMetSpaties(txtInput);
    console.log(resultaat);
}

const maakMetSpaties = (inputTekst) => {
    let resultaat = "";
    for(let i = 0; i < inputTekst.length; i++) {
        resultaat += inputTekst.charAt(i) + " ";
    }
    return resultaat;
}

window.addEventListener("load", setup);