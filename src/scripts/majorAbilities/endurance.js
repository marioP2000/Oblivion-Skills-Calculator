function endurance() {
    const ENDvalue = document.getElementById("END-value");
    const plusEnduranceButtons = document.querySelectorAll(".plus-minorEND-button");
    const minusEnduranceButtons = document.querySelectorAll(".minus-minorEND-button");

    //Plus Major
    plusEnduranceButtons.forEach (plusEnduranceButton => {
        plusEnduranceButton.addEventListener("click", increaseValueEND);
    });

    function increaseValueEND() {
        let value = parseFloat(ENDvalue.value);
        ENDvalue.value = value +0.5;
    }

    //Minus Major
    minusEnduranceButtons.forEach (minusEnduranceButton => {
        minusEnduranceButton.addEventListener("click", decreaseValueEND);
    });

    function decreaseValueEND() {
        let value = parseFloat(ENDvalue.value);
        ENDvalue.value = value -0.5;
    }
}

export default endurance;