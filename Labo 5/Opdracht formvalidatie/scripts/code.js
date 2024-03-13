const setup = () => {
    const valideer = () => {
        let voornaam = document.getElementById("voornaam").value.trim();
        let familienaam = document.getElementById("familienaam").value.trim();
        let geboortedatum = document.getElementById("geboortedatum").value.trim();
        let email = document.getElementById("email").value.trim();
        let aantalKinderen = document.getElementById("aantalKinderen").value.trim();

        let voornaamError = document.getElementById("voornaamError");
        let familienaamError = document.getElementById("familienaamError");
        let geboortedatumError = document.getElementById("geboortedatumError");
        let emailError = document.getElementById("emailError");
        let aantalKinderenError = document.getElementById("aantalKinderenError");

        voornaamError.textContent = "";
        familienaamError.textContent = "";
        geboortedatumError.textContent = "";
        emailError.textContent = "";
        aantalKinderenError.textContent = "";

        let isValid = true;

        if (voornaam.length > 30) {
            voornaamError.textContent = "Max. 30 karakters";
            isValid = false;
        }

        if (familienaam === "") {
            familienaamError.textContent = "Verplicht veld";
            isValid = false;
        } else if (familienaam.length > 50) {
            familienaamError.textContent = "Max. 50 karakters";
            isValid = false;
        }

        if (geboortedatum === "") {
            geboortedatumError.textContent = "Verplicht veld";
            isValid = false;
        } else if (!/^\d{4}-\d{2}-\d{2}$/.test(geboortedatum)) {
            geboortedatumError.textContent = "Formaat is niet jjjj-mm-dd";
            isValid = false;
        }

        if (email === "") {
            emailError.textContent = "Verplicht veld";
            isValid = false;
        } else if (!email.includes("@") || !email.includes(".")) {
            emailError.textContent = "Geen geldig email adres";
            isValid = false;
        }

        if (!isGetal(aantalKinderen) || parseInt(aantalKinderen) < 0) {
            aantalKinderenError.textContent = "Is geen positief getal";
            isValid = false;
        } else if (parseInt(aantalKinderen) >= 99) {
            aantalKinderenError.textContent = "Is te vruchtbaar";
            isValid = false;
        }

        if (isValid) {
            alert("Proficiat!");
        }
    }

    function isGetal(tekst) {
        return !isNaN(tekst);
    }

    let btnValideer = document.getElementById("btnvalideer");
    btnValideer.addEventListener("click", valideer);
}
window.addEventListener("load", setup);