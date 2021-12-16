const container = document.getElementById('middleContainer');
const canvas = document.getElementById('box');
const button = document.getElementById('buttons');
let color = 'rgb(0,0,0)';
let eraser = false;

function draw (color) {
    canvas.style.backgroundColor = color;
}

function canvasControl () {
    if (color) {
        draw(color)
    }
    else if (eraser == true) {
        canvas.style.backgroundColor = 'white';
    }
}

function createCanvas() {
    const canvas = {};
    for (let div = 0; div < 10000; div++) {
        canvas[div] = document.createElement('div');
        canvas[div].className ='canvas';
        canvas[div].idName =`canvas{div}`;
        container.appendChild(canvas[div]);
        console.log(`canvas{div}`);
    }
};
console.log(button);
createCanvas();
canvas.addEventListener('click', () => canvasControl());
button.addEventListener('click', () => {black = false; eraser = true;});
