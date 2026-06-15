function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function operate(a, operator, b) {
    if(operator === "+") {
        return addition(a,b);
    } else if (operator === "-") {
        return subtraction(a, b);
    } else if (operator === "*") {
        return multiplication(a, b);
    } else {
        return division(a, b);
    }
}

const buttons = document.querySelector(".buttons")
const display = document.getElementById("display")

buttons.addEventListener("click", (event) => {
    if(event.target.tagName === "BUTTON") {
        display.append(event.target.innerText)
        console.log(event.target.value)
    }
})