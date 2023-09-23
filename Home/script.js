let text = document.getElementById('text');
let image = document.getElementById('image');

const bodyWidth = document.body.clientWidth;
const bodyHeight = document.body.clientHeight;


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    let maxMargin = bodyHeight; // Define your maximum margin value
    let minMargin = 0;   // Define your minimum margin value

    // Calculate the new margin value
    let newMargin = value * 2.5;

    // Check if the new margin is within the desired range
    if (newMargin >= minMargin && newMargin <= maxMargin) {
        text.style.marginTop = newMargin + 'px';
    }

});

let images = ['mall.png','qutub.jpg','lotus.jpg','indiagate.jpg','red.jpg','res.png','1.jpg','g.png','a.jpg','j.jpg']

setInterval(() => {
    let random = Math.floor(Math.random() * images.length);
    image.src= images[random];
},1500);

