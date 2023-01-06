var result = 0;

//#region UI elements declaration

var resultLabel = document.getElementById("resultLabel");
var allclearButton = document.getElementById("acButton");
var percentageButton = document.getElementById("percentButton");
var divideButton = document.getElementById("divideButton");
var multiplyButton = document.getElementById("multiplyButton");
var addButton = document.getElementById("addButton");
var subtractButton = document.getElementById("subtractButton");
var dotButton = document.getElementById("dotButton");
var equalToButton = document.getElementById("equalToButton");


var oneButton = document.getElementById("oneButton");
var twoButton = document.getElementById("twoButton");
var threeButton = document.getElementById("threeButton");
var fourButton = document.getElementById("fourButton");
var fiveButton = document.getElementById("fiveButton");
var sixButton = document.getElementById("sixButton");
var sevenButton = document.getElementById("sevenButton");
var eightButton = document.getElementById("eightButton");
var nineButton = document.getElementById("nineButton");
var zeroButton = document.getElementById("zeroButton");


//#endregion //#region UI elements declaration

resultLabel.innerHTML = result;

function allClear() {
    resultLabel.innerHTML = 0;
}

function insertDigits(number) {
    result = 0; resultLabel.innerHTML.allClear();
    resultLabel.innerHTML = number;
}