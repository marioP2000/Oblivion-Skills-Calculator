function minorINT() {
    
    // ALCHEMY
    const ALCHEMYvalue = document.getElementById("ALCHEMY-value");
    const ALCHEMYplus = document.getElementById("ALCHEMY-plus");
    const ALCHEMYminus = document.getElementById("ALCHEMY-minus");

    function increaseValueALCHEMY() {
        ALCHEMYvalue.value ++;
    }

    function decreaseValueALCHEMY() {
        ALCHEMYvalue.value --;
    }

    ALCHEMYplus.addEventListener("click", increaseValueALCHEMY);
    ALCHEMYminus.addEventListener("click", decreaseValueALCHEMY);

    // CONJURATION
    const CONJURATIONvalue = document.getElementById("CONJURATION-value");
    const CONJURATIONplus = document.getElementById("CONJURATION-plus");
    const CONJURATIONminus = document.getElementById("CONJURATION-minus");

    function increaseValueCONJURATION() {
        CONJURATIONvalue.value ++;
    }

    function decreaseValueCONJURATION() {
        CONJURATIONvalue.value --;
    }

    CONJURATIONplus.addEventListener("click", increaseValueCONJURATION);
    CONJURATIONminus.addEventListener("click", decreaseValueCONJURATION);

    // MYSTICISM
    const MYSTICISMvalue = document.getElementById("MYSTICISM-value");
    const MYSTICISMplus = document.getElementById("MYSTICISM-plus");
    const MYSTICISMminus = document.getElementById("MYSTICISM-minus");

    function increaseValueMYSTICISM() {
        MYSTICISMvalue.value ++;
    }

    function decreaseValueMYSTICISM() {
        MYSTICISMvalue.value --;
    }

    MYSTICISMplus.addEventListener("click", increaseValueMYSTICISM);
    MYSTICISMminus.addEventListener("click", decreaseValueMYSTICISM);

    // Save minor and major stats
    const INTvalue = document.getElementById("INT-value");

    function saveStats() {
        localStorage.setItem("INTvalue", INTvalue.value);
        localStorage.setItem("ALCHEMYvalue", ALCHEMYvalue.value);
        localStorage.setItem("CONJURATIONvalue", CONJURATIONvalue.value);
        localStorage.setItem("MYSTICISMvalue", MYSTICISMvalue.value);

        if(isNaN(INTvalue.value)) {
            INTvalue.value = 0.5;
        };
    }

    ALCHEMYplus.addEventListener("click", saveStats);
    ALCHEMYminus.addEventListener("click", saveStats);
    CONJURATIONplus.addEventListener("click", saveStats);
    CONJURATIONminus.addEventListener("click", saveStats);
    MYSTICISMplus.addEventListener("click", saveStats);
    MYSTICISMminus.addEventListener("click", saveStats);

    function getStats() {
        INTvalue.value = localStorage.getItem("INTvalue");
        ALCHEMYvalue.value = localStorage.getItem("ALCHEMYvalue");
        CONJURATIONvalue.value = localStorage.getItem("CONJURATIONvalue");
        MYSTICISMvalue.value = localStorage.getItem("MYSTICISMvalue");
    }

    document.addEventListener("DOMContentLoaded", getStats);
}
        
export default minorINT;