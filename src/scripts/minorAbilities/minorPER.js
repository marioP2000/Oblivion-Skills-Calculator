function minorPER() {
    
    // MERCANTILE
    const MERCANTILEvalue = document.getElementById("MERCANTILE-value");
    const MERCANTILEplus = document.getElementById("MERCANTILE-plus");
    const MERCANTILEminus = document.getElementById("MERCANTILE-minus");

    function increaseValueMERCANTILE() {
        MERCANTILEvalue.value ++;
    }

    function decreaseValueMERCANTILE() {
        MERCANTILEvalue.value --;
    }

    MERCANTILEplus.addEventListener("click", increaseValueMERCANTILE);
    MERCANTILEminus.addEventListener("click", decreaseValueMERCANTILE);

    // SPEECHCRAFT
    const SPEECHCRAFTvalue = document.getElementById("SPEECHCRAFT-value");
    const SPEECHCRAFTplus = document.getElementById("SPEECHCRAFT-plus");
    const SPEECHCRAFTminus = document.getElementById("SPEECHCRAFT-minus");

    function increaseValueSPEECHCRAFT() {
        SPEECHCRAFTvalue.value ++;
    }

    function decreaseValueSPEECHCRAFT() {
        SPEECHCRAFTvalue.value --;
    }

    SPEECHCRAFTplus.addEventListener("click", increaseValueSPEECHCRAFT);
    SPEECHCRAFTminus.addEventListener("click", decreaseValueSPEECHCRAFT);

    // ILLUSION
    const ILLUSIONvalue = document.getElementById("ILLUSION-value");
    const ILLUSIONplus = document.getElementById("ILLUSION-plus");
    const ILLUSIONminus = document.getElementById("ILLUSION-minus");

    function increaseValueILLUSION() {
        ILLUSIONvalue.value ++;
    }

    function decreaseValueILLUSION() {
        ILLUSIONvalue.value --;
    }

    ILLUSIONplus.addEventListener("click", increaseValueILLUSION);
    ILLUSIONminus.addEventListener("click", decreaseValueILLUSION);

    // Save minor and major stats
    const PERvalue = document.getElementById("PER-value");

    function saveStats() {
        localStorage.setItem("PERvalue", PERvalue.value);
        localStorage.setItem("MERCANTILEvalue", MERCANTILEvalue.value);
        localStorage.setItem("SPEECHCRAFTvalue", SPEECHCRAFTvalue.value);
        localStorage.setItem("ILLUSIONvalue", ILLUSIONvalue.value);

        if(isNaN(PERvalue.value)) {
            PERvalue.value = 0.5;
        };
    }

    MERCANTILEplus.addEventListener("click", saveStats);
    MERCANTILEminus.addEventListener("click", saveStats);
    SPEECHCRAFTplus.addEventListener("click", saveStats);
    SPEECHCRAFTminus.addEventListener("click", saveStats);
    ILLUSIONplus.addEventListener("click", saveStats);
    ILLUSIONminus.addEventListener("click", saveStats);

    function getStats() {
        PERvalue.value = localStorage.getItem("PERvalue");
        MERCANTILEvalue.value = localStorage.getItem("MERCANTILEvalue");
        SPEECHCRAFTvalue.value = localStorage.getItem("SPEECHCRAFTvalue");
        ILLUSIONvalue.value = localStorage.getItem("ILLUSIONvalue");
    }

    document.addEventListener("DOMContentLoaded", getStats);
}
        
export default minorPER;