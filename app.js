// variables
const minusBttn = document.getElementById("minus");
const plusBttn = document.getElementById("plus");
const num = document.getElementById("counterValue");
puffNum = JSON.parse(localStorage.getItem('puffNum')) || num.value;
window.onload = () => {
    num.value = puffNum;
}

function addOne() {
    num.value++;
    puffNum = num.value;
    localStorage.setItem("puffNum", puffNum);
}

function minusOne() {
    if (num.value >= 1) {
        num.value--;
        puffNum = num.value;
        localStorage.setItem("puffNum", puffNum);
    }
}