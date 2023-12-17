function minorSTR() {
    
    // Blade
    const BLADEvalue = document.getElementById("BLADE-value");
    const BLADEplus = document.getElementById("BLADE-plus");
    const BLADEminus = document.getElementById("BLADE-minus");

    function increaseValueBLADE() {
        BLADEvalue.value ++;
    }

    function decreaseValueBLADE() {
        BLADEvalue.value --;
    }

    BLADEplus.addEventListener("click", increaseValueBLADE);
    BLADEminus.addEventListener("click", decreaseValueBLADE);

    // Blunt
    const BLUNTvalue = document.getElementById("BLUNT-value");
    const BLUNTplus = document.getElementById("BLUNT-plus");
    const BLUNTminus = document.getElementById("BLUNT-minus");

    function increaseValueBLUNT() {
        BLUNTvalue.value ++;
    }

    function decreaseValueBLUNT() {
        BLUNTvalue.value --;
    }

    BLUNTplus.addEventListener("click", increaseValueBLUNT);
    BLUNTminus.addEventListener("click", decreaseValueBLUNT);

    // Hand to Hand
    const HANDTOHANDvalue = document.getElementById("HANDTOHAND-value");
    const HANDTOHANDplus = document.getElementById("HANDTOHAND-plus");
    const HANDTOHANDminus = document.getElementById("HANDTOHAND-minus");

    function increaseValueHANDTOHAND() {
        HANDTOHANDvalue.value ++;
    }

    function decreaseValueHANDTOHAND() {
        HANDTOHANDvalue.value --;
    }

    HANDTOHANDplus.addEventListener("click", increaseValueHANDTOHAND);
    HANDTOHANDminus.addEventListener("click", decreaseValueHANDTOHAND);

    // Save minor and major stats
    const STRvalue = document.getElementById("STR-value");

    function saveStats() {
        localStorage.setItem("STRvalue", STRvalue.value);
        localStorage.setItem("BLADEvalue", BLADEvalue.value);
        localStorage.setItem("BLUNTvalue", BLUNTvalue.value);
        localStorage.setItem("HANDTOHANDvalue", HANDTOHANDvalue.value);

        if(isNaN(STRvalue.value)) {
            STRvalue.value = 0.5;
        };
    }

    BLADEplus.addEventListener("click", saveStats);
    BLADEminus.addEventListener("click", saveStats);
    BLUNTplus.addEventListener("click", saveStats);
    BLUNTminus.addEventListener("click", saveStats);
    HANDTOHANDplus.addEventListener("click", saveStats);
    HANDTOHANDminus.addEventListener("click", saveStats);

    function getStats() {
        STRvalue.value = localStorage.getItem("STRvalue");
        BLADEvalue.value = localStorage.getItem("BLADEvalue");
        BLUNTvalue.value = localStorage.getItem("BLUNTvalue");
        HANDTOHANDvalue.value = localStorage.getItem("HANDTOHANDvalue");
    }

    document.addEventListener("DOMContentLoaded", getStats);
}
        
export default minorSTR;