let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    // countEl.innerText = count ... this will not give the right spacing
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    // saveEl.innerText += countStr
    saveEl.textContent += countStr
}

// Google:
// innerText alternative mdn