const cookie = document.getElementById('cookie');
const progress = document.getElementById('progressBar');
const bar = document.getElementById('bar');
const currentHp = document.getElementById('currentHp');
const level = document.getElementById('level');

let cookieHp = (window.localStorage.getItem('cookiehp')) ? parseInt(window.localStorage.getItem('cookiehp')) : 10;
level.innerText =  `Level ${(window.localStorage.getItem('level')) ? parseInt(window.localStorage.getItem('level')) : 1}`

currentHp.innerText = `${cookieHp}hp`;


console.log(window.localStorage.getItem('cookiehp'));

// function click(currentHp) {

// }

function levelUp() {

    level.innerText = `Level ${+level.innerText.split(' ')[1] + 1}`;
    cookieHp = parseInt( cookieHp * 1.2);
    console.log(cookieHp);
    bar.style.width = '';
    document.getElementById('currentHp').innerText = `${cookieHp}hp`;
    window.localStorage.setItem('cookiehp',cookieHp);
    window.localStorage.setItem('level', level.innerText.split(' ')[1]);
}

cookie.onmousedown = function() {
    cookie.style.transform = 'scale(0.9)';
    let currentHp = parseInt(document.getElementById('currentHp').innerText) - 1;
    if (currentHp == 0) {
        levelUp();
    } else {
        const progress = (currentHp/cookieHp)*100;
        bar.style.width = `${progress}%`;
        document.getElementById('currentHp').innerText = `${currentHp}hp`;
    }


}
cookie.onmouseup = function() {
    cookie.style.transform = '';
}