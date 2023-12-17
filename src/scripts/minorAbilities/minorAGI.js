function minorAGI() {
    
    // MARKSMAN
    const MARKSMANvalue = document.getElementById("MARKSMAN-value");
    const MARKSMANplus = document.getElementById("MARKSMAN-plus");
    const MARKSMANminus = document.getElementById("MARKSMAN-minus");

    function increaseValueMARKSMAN() {
        MARKSMANvalue.value ++;
    }

    function decreaseValueMARKSMAN() {
        MARKSMANvalue.value --;
    }

    MARKSMANplus.addEventListener("click", increaseValueMARKSMAN);
    MARKSMANminus.addEventListener("click", decreaseValueMARKSMAN);

    // SECURITY
    const SECURITYvalue = document.getElementById("SECURITY-value");
    const SECURITYplus = document.getElementById("SECURITY-plus");
    const SECURITYminus = document.getElementById("SECURITY-minus");

    function increaseValueSECURITY() {
        SECURITYvalue.value ++;
    }

    function decreaseValueSECURITY() {
        SECURITYvalue.value --;
    }

    SECURITYplus.addEventListener("click", increaseValueSECURITY);
    SECURITYminus.addEventListener("click", decreaseValueSECURITY);

    // SNEAK
    const SNEAKvalue = document.getElementById("SNEAK-value");
    const SNEAKplus = document.getElementById("SNEAK-plus");
    const SNEAKminus = document.getElementById("SNEAK-minus");

    function increaseValueSNEAK() {
        SNEAKvalue.value ++;
    }

    function decreaseValueSNEAK() {
        SNEAKvalue.value --;
    }

    SNEAKplus.addEventListener("click", increaseValueSNEAK);
    SNEAKminus.addEventListener("click", decreaseValueSNEAK);

    // Save minor and major stats
    const AGIvalue = document.getElementById("AGI-value");

    function saveStats() {
        localStorage.setItem("AGIvalue", AGIvalue.value);
        localStorage.setItem("MARKSMANvalue", MARKSMANvalue.value);
        localStorage.setItem("SECURITYvalue", SECURITYvalue.value);
        localStorage.setItem("SNEAKvalue", SNEAKvalue.value);

        if(isNaN(AGIvalue.value)) {
            AGIvalue.value = 0.5;
        };
    }

    MARKSMANplus.addEventListener("click", saveStats);
    MARKSMANminus.addEventListener("click", saveStats);
    SECURITYplus.addEventListener("click", saveStats);
    SECURITYminus.addEventListener("click", saveStats);
    SNEAKplus.addEventListener("click", saveStats);
    SNEAKminus.addEventListener("click", saveStats);

    function getStats() {
        AGIvalue.value = localStorage.getItem("AGIvalue");
        MARKSMANvalue.value = localStorage.getItem("MARKSMANvalue");
        SECURITYvalue.value = localStorage.getItem("SECURITYvalue");
        SNEAKvalue.value = localStorage.getItem("SNEAKvalue");
    }

    document.addEventListener("DOMContentLoaded", getStats);
}
        
export default minorAGI;