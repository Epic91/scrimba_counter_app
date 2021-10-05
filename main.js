let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;



function add() {
    count += 1;
    countEl.innerText = count;
}

function subtract() {
    count -= 1;
    countEl.innerText = count;
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
}