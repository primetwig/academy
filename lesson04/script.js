
var btn = document.querySelector('.btn');

btn.addEventListener('click', e => console.log('click 1'));

btn.addEventListener('click', e => console.log('click 1'), true);

btn.onclick = e => console.log('click');


