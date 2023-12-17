function personality() {
    const PERvalue = document.getElementById("PER-value");
    const plusPersonalityButtons = document.querySelectorAll(".plus-minorPER-button");
    const minusPersonalityButtons = document.querySelectorAll(".minus-minorPER-button");

    //Plus Major
    plusPersonalityButtons.forEach (plusPersonalityButton => {
        plusPersonalityButton.addEventListener("click", increaseValuePER);
    });

    function increaseValuePER() {
        let value = parseFloat(PERvalue.value);
        PERvalue.value = value +0.5;
    }

    //Minus Major
    minusPersonalityButtons.forEach (minusPersonalityButton => {
        minusPersonalityButton.addEventListener("click", decreaseValuePER);
    });

    function decreaseValuePER() {
        let value = parseFloat(PERvalue.value);
        PERvalue.value = value -0.5;
    }
}

export default personality;