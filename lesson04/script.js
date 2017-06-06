var d = document;
var btn = document.querySelector('.btn');

btn.addEventListener('click', e => console.log('click 1'));

btn.addEventListener('click', e => console.log('click 2'), true);

btn.onclick = e => console.log('click 3');


