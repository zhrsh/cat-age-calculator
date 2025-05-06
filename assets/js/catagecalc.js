const inputElement = document.getElementById("catAge"); // input
const outputElement = document.getElementById("convertedAge"); // output

function liveInputHandler() {
    const userInput = inputElement.value;
    outputElement.innerHTML = `<span style="color: #ffff00;">${catToHumanAge(userInput)}</span> years old`;
}

function catToHumanAge(catAge) {
    // 0 <= x < 1
    if (catAge >= 0 && catAge < 1) {
        return "less than 15";
    } 
    else if (catAge == 1) {
        return 15;
    }
    else if (catAge == 2) {
        return 24;
    }
    else if (catAge >= 3) {
        return 16 + (4 * catAge);
    }
    else {
        return "unknown";
    }
}

inputElement.addEventListener("input", liveInputHandler);