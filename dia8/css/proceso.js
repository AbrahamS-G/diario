const $porcent = document.querySelector(".porcent");
const $circle = document.querySelector(".circle");
let load = 0;
let intervalId;

function update() {
    load = load < 100 ? load + 1 : 100; 
    $porcent.textContent = `${load}%`;
    $circle.style.background = `conic-gradient(from 0deg at 50% 50%, #67bf7 0%, #9bf8f4 ${load}%, #101012 ${load}%)`;

    if (load === 100) {
        clearInterval(intervalId);
    }
}

intervalId = setInterval(update, 150);
