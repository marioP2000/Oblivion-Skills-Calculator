function minorWIL() {
    
    // ALTERATION
    const ALTERATIONvalue = document.getElementById("ALTERATION-value");
    const ALTERATIONplus = document.getElementById("ALTERATION-plus");
    const ALTERATIONminus = document.getElementById("ALTERATION-minus");

    function increaseValueALTERATION() {
        ALTERATIONvalue.value ++;
    }

    function decreaseValueALTERATION() {
        ALTERATIONvalue.value --;
    }

    ALTERATIONplus.addEventListener("click", increaseValueALTERATION);
    ALTERATIONminus.addEventListener("click", decreaseValueALTERATION);

    // DESTRUCTION
    const DESTRUCTIONvalue = document.getElementById("DESTRUCTION-value");
    const DESTRUCTIONplus = document.getElementById("DESTRUCTION-plus");
    const DESTRUCTIONminus = document.getElementById("DESTRUCTION-minus");

    function increaseValueDESTRUCTION() {
        DESTRUCTIONvalue.value ++;
    }

    function decreaseValueDESTRUCTION() {
        DESTRUCTIONvalue.value --;
    }

    DESTRUCTIONplus.addEventListener("click", increaseValueDESTRUCTION);
    DESTRUCTIONminus.addEventListener("click", decreaseValueDESTRUCTION);

    // RESTORATION
    const RESTORATIONvalue = document.getElementById("RESTORATION-value");
    const RESTORATIONplus = document.getElementById("RESTORATION-plus");
    const RESTORATIONminus = document.getElementById("RESTORATION-minus");

    function increaseValueRESTORATION() {
        RESTORATIONvalue.value ++;
    }

    function decreaseValueRESTORATION() {
        RESTORATIONvalue.value --;
    }

    RESTORATIONplus.addEventListener("click", increaseValueRESTORATION);
    RESTORATIONminus.addEventListener("click", decreaseValueRESTORATION);

    // Save minor and major stats
    const WILvalue = document.getElementById("WIL-value");

    function saveStats() {
        localStorage.setItem("WILvalue", WILvalue.value);
        localStorage.setItem("ALTERATIONvalue", ALTERATIONvalue.value);
        localStorage.setItem("DESTRUCTIONvalue", DESTRUCTIONvalue.value);
        localStorage.setItem("RESTORATIONvalue", RESTORATIONvalue.value);

        if(isNaN(WILvalue.value)) {
            WILvalue.value = 0.5;
        };
    }

    ALTERATIONplus.addEventListener("click", saveStats);
    ALTERATIONminus.addEventListener("click", saveStats);
    DESTRUCTIONplus.addEventListener("click", saveStats);
    DESTRUCTIONminus.addEventListener("click", saveStats);
    RESTORATIONplus.addEventListener("click", saveStats);
    RESTORATIONminus.addEventListener("click", saveStats);

    function getStats() {
        WILvalue.value = localStorage.getItem("WILvalue");
        ALTERATIONvalue.value = localStorage.getItem("ALTERATIONvalue");
        DESTRUCTIONvalue.value = localStorage.getItem("DESTRUCTIONvalue");
        RESTORATIONvalue.value = localStorage.getItem("RESTORATIONvalue");
    }

    document.addEventListener("DOMContentLoaded", getStats);
}
        
export default minorWIL;