function intelligence() {
    const INTvalue = document.getElementById("INT-value");
    const plusIntelligenceButtons = document.querySelectorAll(".plus-minorINT-button");
    const minusIntelligenceButtons = document.querySelectorAll(".minus-minorINT-button");

    //Plus Major
    plusIntelligenceButtons.forEach (plusIntelligenceButton => {
        plusIntelligenceButton.addEventListener("click", increaseValueINT);
    });

    function increaseValueINT() {
        let value = parseFloat(INTvalue.value);
        INTvalue.value = value +0.5;
    }

    //Minus Major
    minusIntelligenceButtons.forEach (minusIntelligenceButton => {
        minusIntelligenceButton.addEventListener("click", decreaseValueINT);
    });

    function decreaseValueINT() {
        let value = parseFloat(INTvalue.value);
        INTvalue.value = value -0.5;
    }
}

export default intelligence;