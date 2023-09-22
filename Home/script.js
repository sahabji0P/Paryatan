let text = document.getElementById('text');
let image = document.getElementById('image');


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';

});

let images = ['mall.png','qutub.jpg','lotus.jpg','indiagate.jpg','red.png','res.png','1.jpg']

setInterval(() => {
    let random = Math.floor(Math.random() * images.length);
    image.src= images[random];
},1000);