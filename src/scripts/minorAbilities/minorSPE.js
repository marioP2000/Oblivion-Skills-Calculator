function minorSPE() {
    
    // ATHLETICS
    const ATHLETICSvalue = document.getElementById("ATHLETICS-value");
    const ATHLETICSplus = document.getElementById("ATHLETICS-plus");
    const ATHLETICSminus = document.getElementById("ATHLETICS-minus");

    function increaseValueATHLETICS() {
        ATHLETICSvalue.value ++;
    }

    function decreaseValueATHLETICS() {
        ATHLETICSvalue.value --;
    }

    ATHLETICSplus.addEventListener("click", increaseValueATHLETICS);
    ATHLETICSminus.addEventListener("click", decreaseValueATHLETICS);

    // ACROBATICS
    const ACROBATICSvalue = document.getElementById("ACROBATICS-value");
    const ACROBATICSplus = document.getElementById("ACROBATICS-plus");
    const ACROBATICSminus = document.getElementById("ACROBATICS-minus");

    function increaseValueACROBATICS() {
        ACROBATICSvalue.value ++;
    }

    function decreaseValueACROBATICS() {
        ACROBATICSvalue.value --;
    }

    ACROBATICSplus.addEventListener("click", increaseValueACROBATICS);
    ACROBATICSminus.addEventListener("click", decreaseValueACROBATICS);

    // LIGHTARMOR
    const LIGHTARMORvalue = document.getElementById("LIGHTARMOR-value");
    const LIGHTARMORplus = document.getElementById("LIGHTARMOR-plus");
    const LIGHTARMORminus = document.getElementById("LIGHTARMOR-minus");

    function increaseValueLIGHTARMOR() {
        LIGHTARMORvalue.value ++;
    }

    function decreaseValueLIGHTARMOR() {
        LIGHTARMORvalue.value --;
    }

    LIGHTARMORplus.addEventListener("click", increaseValueLIGHTARMOR);
    LIGHTARMORminus.addEventListener("click", decreaseValueLIGHTARMOR);

    // Save minor and major stats
    const SPEvalue = document.getElementById("SPE-value");

    function saveStats() {
        localStorage.setItem("SPEvalue", SPEvalue.value);
        localStorage.setItem("ATHLETICSvalue", ATHLETICSvalue.value);
        localStorage.setItem("ACROBATICSvalue", ACROBATICSvalue.value);
        localStorage.setItem("LIGHTARMORvalue", LIGHTARMORvalue.value);

        if(isNaN(SPEvalue.value)) {
            SPEvalue.value = 0.5;
        };
    }

    ATHLETICSplus.addEventListener("click", saveStats);
    ATHLETICSminus.addEventListener("click", saveStats);
    ACROBATICSplus.addEventListener("click", saveStats);
    ACROBATICSminus.addEventListener("click", saveStats);
    LIGHTARMORplus.addEventListener("click", saveStats);
    LIGHTARMORminus.addEventListener("click", saveStats);

    function getStats() {
        SPEvalue.value = localStorage.getItem("SPEvalue");
        ATHLETICSvalue.value = localStorage.getItem("ATHLETICSvalue");
        ACROBATICSvalue.value = localStorage.getItem("ACROBATICSvalue");
        LIGHTARMORvalue.value = localStorage.getItem("LIGHTARMORvalue");
    }

    document.addEventListener("DOMContentLoaded", getStats);
}
        
export default minorSPE;