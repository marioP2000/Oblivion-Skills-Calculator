function minorEND() {
    
    // BLOCK
    const BLOCKvalue = document.getElementById("BLOCK-value");
    const BLOCKplus = document.getElementById("BLOCK-plus");
    const BLOCKminus = document.getElementById("BLOCK-minus");

    function increaseValueBLOCK() {
        BLOCKvalue.value ++;
    }

    function decreaseValueBLOCK() {
        BLOCKvalue.value --;
    }

    BLOCKplus.addEventListener("click", increaseValueBLOCK);
    BLOCKminus.addEventListener("click", decreaseValueBLOCK);

    // ARMORER
    const ARMORERvalue = document.getElementById("ARMORER-value");
    const ARMORERplus = document.getElementById("ARMORER-plus");
    const ARMORERminus = document.getElementById("ARMORER-minus");

    function increaseValueARMORER() {
        ARMORERvalue.value ++;
    }

    function decreaseValueARMORER() {
        ARMORERvalue.value --;
    }

    ARMORERplus.addEventListener("click", increaseValueARMORER);
    ARMORERminus.addEventListener("click", decreaseValueARMORER);

    // HEAVYARMOR
    const HEAVYARMORvalue = document.getElementById("HEAVYARMOR-value");
    const HEAVYARMORplus = document.getElementById("HEAVYARMOR-plus");
    const HEAVYARMORminus = document.getElementById("HEAVYARMOR-minus");

    function increaseValueHEAVYARMOR() {
        HEAVYARMORvalue.value ++;
    }

    function decreaseValueHEAVYARMOR() {
        HEAVYARMORvalue.value --;
    }

    HEAVYARMORplus.addEventListener("click", increaseValueHEAVYARMOR);
    HEAVYARMORminus.addEventListener("click", decreaseValueHEAVYARMOR);

    // Save minor and major stats
    const ENDvalue = document.getElementById("END-value");

    function saveStats() {
        localStorage.setItem("ENDvalue", ENDvalue.value);
        localStorage.setItem("BLOCKvalue", BLOCKvalue.value);
        localStorage.setItem("ARMORERvalue", ARMORERvalue.value);
        localStorage.setItem("HEAVYARMORvalue", HEAVYARMORvalue.value);

        if(isNaN(ENDvalue.value)) {
            ENDvalue.value = 0.5;
        };
    }

    BLOCKplus.addEventListener("click", saveStats);
    BLOCKminus.addEventListener("click", saveStats);
    ARMORERplus.addEventListener("click", saveStats);
    ARMORERminus.addEventListener("click", saveStats);
    HEAVYARMORplus.addEventListener("click", saveStats);
    HEAVYARMORminus.addEventListener("click", saveStats);

    function getStats() {
        ENDvalue.value = localStorage.getItem("ENDvalue");
        BLOCKvalue.value = localStorage.getItem("BLOCKvalue");
        ARMORERvalue.value = localStorage.getItem("ARMORERvalue");
        HEAVYARMORvalue.value = localStorage.getItem("HEAVYARMORvalue");
    }

    document.addEventListener("DOMContentLoaded", getStats);
}
        
export default minorEND;