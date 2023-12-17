function strength() {
    const STRvalue = document.getElementById("STR-value");
    const plusStrengthButtons = document.querySelectorAll(".plus-minorSTR-button");
    const minusStrengthButtons = document.querySelectorAll(".minus-minorSTR-button");

    //Plus Major
    plusStrengthButtons.forEach (plusStrengthButton => {
        plusStrengthButton.addEventListener("click", increaseValueSTR);
    });

    function increaseValueSTR() {
        let value = parseFloat(STRvalue.value);
        STRvalue.value = value +0.5;
    }

    //Minus Major
    minusStrengthButtons.forEach (minusStrengthButton => {
        minusStrengthButton.addEventListener("click", decreaseValueSTR);
    });

    function decreaseValueSTR() {
        let value = parseFloat(STRvalue.value);
        STRvalue.value = value -0.5;
    }
}

export default strength;