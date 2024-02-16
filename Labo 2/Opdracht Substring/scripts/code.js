const setup = () => {

    const substring = () => {

        let getal1 = document.getElementById("getal1").value;
        let getal2 = document.getElementById("getal2").value;
        let tekst = txtInput.value;
        txtOutput.innerHTML = tekst.substring(getal1, getal2);
    }

    let btnSubstring = document.getElementById("btnSubstring");
    let txtInput = document.getElementById("txtInput");
    let txtOutput = document.getElementById("txtOutput");
    btnSubstring.addEventListener("click", substring);

}
window.addEventListener("load", setup);