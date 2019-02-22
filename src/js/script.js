// document.getElementById('hp');
const cookie = document.getElementById('cookie');
cookie.onmousedown = function () {
    cookie.style.width = '200px'
};

cookie.onmouseup = function () {
    cookie.style.width = '300px'
};

let button = document.getElementById("clickme"),
    count = 0;
button.onclick = function () {
    count += 1;
    button.innerHTML = "Click me: " + count;
};