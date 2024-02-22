let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let zero = document.getElementById("0");
let twozero = document.getElementById("00");
let equalElement = document.getElementById("=");
let adding = document.getElementById("+");
let subracting = document.getElementById("-");
let multiplication = document.getElementById("*");
let division = document.getElementById("/");
let dot = document.getElementById(".");
let off = document.getElementById("AE");
let deleteElement = document.getElementById("DE");
let displayElement = document.getElementById("display");

function result(value) {
    let finalResult = eval(value);
    return finalResult;
}

one.addEventListener("click", () => displayElement.value += "1");
off.addEventListener("click", () => displayElement.value = " ");
deleteElement.addEventListener("click", () => displayElement.value = displayElement.value.toString().slice(0, -1));
two.addEventListener("click", () => displayElement.value += "2");
three.addEventListener("click", () => displayElement.value += "3");
four.addEventListener("click", () => displayElement.value += "4");
five.addEventListener("click", () => displayElement.value += "5");
six.addEventListener("click", () => displayElement.value += "6");
seven.addEventListener("click", () => displayElement.value += "7");
eight.addEventListener("click", () => displayElement.value += "8");
nine.addEventListener("click", () => displayElement.value += "9");
dot.addEventListener("click", () => displayElement.value += ".");
division.addEventListener("click", () => displayElement.value += "/");
multiplication.addEventListener("click", () => displayElement.value += "*");
adding.addEventListener("click", () => displayElement.value += "+");
subracting.addEventListener("click", () => displayElement.value += "-");
equalElement.addEventListener("click", () => displayElement.value = result(displayElement.value));
zero.addEventListener("click", () => displayElement.value += "0");
twozero.addEventListener("click", () => displayElement.value += "00");