/* 
 * Copyright (c) 2025. Zahra A. S., All rights reserved. 
 * This design is the intellectual property of Zahra A. S. 
 * Unauthorized use, reproduction, or distribution of this design is prohibited. 
 * For permissions, contact 182934048+zhrsh@users.noreply.github.com
 */

const inputElement = document.getElementById("catAge"); // input
const outputElement = document.getElementById("convertedAge"); // output

function liveInputHandler() {
    const userInput = inputElement.value;
    outputElement.innerHTML = catToHumanAge(userInput);
}

function catToHumanAge(catAge) {
    pre = '<span style="color:var(--acc-fg);">'
    post = '</span>'
    // 0 <= x < 1
    if (catAge >= 0 && catAge < 1) {
        return `${pre}less than 15${post}`;
    } 
    else if (catAge == 1) {
        return `${pre}15${post} years old`;
    }
    else if (catAge == 2) {
        return `${pre}24${post} years old`;
    }
    else if (catAge >= 3) {
        return `${pre}${16 + (4 * catAge)}${post} years old`;
    }
    else {
        return "unknown";
    }
}

inputElement.addEventListener("input", liveInputHandler);