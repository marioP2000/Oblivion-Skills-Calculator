function resetAbilities() {
    const levelupButton = document.getElementById("levelup-button");   
    const abilityValues = document.querySelectorAll("input");

    function resetAll() {
        for (let i = 0; i < abilityValues.length; i++) {
            abilityValues[i].value = null;
        }

        localStorage.clear();
    }

    levelupButton.addEventListener("click", resetAll);
}

export default resetAbilities;
