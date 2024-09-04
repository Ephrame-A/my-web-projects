let bg=document.querySelector('p');
let bgr =document.querySelector('.bodyo');
let btn=document.querySelector('#btn');
btn.addEventListener('click', function () {
    bg.innerText = 'what are you doing when i am changing this html';
    bgr.removeAttribute('background-image');
    btn.style.backgroundImage = 'yellow';
})

