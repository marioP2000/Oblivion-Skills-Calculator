function agility() {
    const AGIvalue = document.getElementById("AGI-value");
    const plusAgilityButtons = document.querySelectorAll(".plus-minorAGI-button");
    const minusAgilityButtons = document.querySelectorAll(".minus-minorAGI-button");

    //Plus Major
    plusAgilityButtons.forEach (plusAgilityButton => {
        plusAgilityButton.addEventListener("click", increaseValueAGI);
    });

    function increaseValueAGI() {
        let value = parseFloat(AGIvalue.value);
        AGIvalue.value = value +0.5;
    }

    //Minus Major
    minusAgilityButtons.forEach (minusAgilityButton => {
        minusAgilityButton.addEventListener("click", decreaseValueAGI);
    });

    function decreaseValueAGI() {
        let value = parseFloat(AGIvalue.value);
        AGIvalue.value = value -0.5;
    }
}

export default agility;