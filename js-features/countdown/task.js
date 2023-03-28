const addText = function () {
    const output = document.getElementById("timer");
    output.textContent -= 1;
    if (output.textContent <= 0) {
        alert('Вы выйграли!');
        clearInterval(inervalID);
    }
}
const inervalID = setInterval(addText, 1000);