function willpower() {
    const WILvalue = document.getElementById("WIL-value");
    const plusWillpowerButtons = document.querySelectorAll(".plus-minorWIL-button");
    const minusWillpowerButtons = document.querySelectorAll(".minus-minorWIL-button");

    //Plus Major
    plusWillpowerButtons.forEach (plusWillpowerButton => {
        plusWillpowerButton.addEventListener("click", increaseValueWIL);
    });

    function increaseValueWIL() {
        let value = parseFloat(WILvalue.value);
        WILvalue.value = value +0.5;
    }

    //Minus Major
    minusWillpowerButtons.forEach (minusWillpowerButton => {
        minusWillpowerButton.addEventListener("click", decreaseValueWIL);
    });

    function decreaseValueWIL() {
        let value = parseFloat(WILvalue.value);
        WILvalue.value = value -0.5;
    }
}

export default willpower;