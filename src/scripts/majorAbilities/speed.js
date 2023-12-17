function speed() {
    const SPEvalue = document.getElementById("SPE-value");
    const plusSpeedButtons = document.querySelectorAll(".plus-minorSPE-button");
    const minusSpeedButtons = document.querySelectorAll(".minus-minorSPE-button");

    //Plus Major
    plusSpeedButtons.forEach (plusSpeedButton => {
        plusSpeedButton.addEventListener("click", increaseValueSPE);
    });

    function increaseValueSPE() {
        let value = parseFloat(SPEvalue.value);
        SPEvalue.value = value +0.5;
    }

    //Minus Major
    minusSpeedButtons.forEach (minusSpeedButton => {
        minusSpeedButton.addEventListener("click", decreaseValueSPE);
    });

    function decreaseValueSPE() {
        let value = parseFloat(SPEvalue.value);
        SPEvalue.value = value -0.5;
    }
}

export default speed;