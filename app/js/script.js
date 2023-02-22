let changeTheme = function () {
    let toggleBtn = document.getElementById("toggle-btn");
    let toggleBtnPos = window.getComputedStyle(toggleBtn).getPropertyValue("left");
    let body = document.getElementsByTagName("body")[0].dataset;

    switch (body.theme) {
        default:
            toggleBtn.style.animation = "toggle-middle .5s";
            setTimeout(() => toggleBtn.style.left = "22px", 400);
            body.theme = "2";
            break;
        case "2":
            toggleBtn.style.animation = "toggle-right .5s";
            setTimeout(() => toggleBtn.style.left = "44px", 400);
            body.theme = "3";
            break;
        case "3":
            toggleBtn.style.animation = "toggle-left .5s";
            setTimeout(() => toggleBtn.style.left = "0px", 400);
            body.theme = "1";
            break;
    }
}

let expression = document.getElementById("screen");

let typeChar = function(value) {
    expression.innerHTML += value;
}

let del = function() {
    expression.innerHTML = expression.innerHTML.slice(0,-1);
}

let equal = function() {
    expression.innerHTML = Function(`return ` + expression.innerHTML)();
}

let reset = function() {
    expression.innerHTML = "";
}