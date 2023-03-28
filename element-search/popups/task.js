(() => {
    const windowOne = document.getElementById("modal_main");
    windowOne.classList.add("modal_active");
})();

(() => {
    const windowOne = document.getElementsByClassName("modal__close");
    for (let i = 0; i < windowOne.length; i++) {
        windowOne[i].addEventListener("click", function() {
            this.parentElement.parentElement.classList.remove("modal_active");
        });
    }
})();

(() => {
    const windowOne = document.getElementsByClassName("show-success");
    for (let i = 0; i < windowOne.length; i++) {
        windowOne[i].addEventListener("click", function() {
            const windowTwo = document.getElementById("modal_success");
            windowTwo.classList.add("modal_active");
        });
    }
})();