const container = document.getElementById('middleContainer');
const canvas = document.getElementById('box');
const eraserButton = document.getElementById('eraser');
const clearButton = document.getElementById('clear');
const scalar = document.getElementById('scalar');
let color = 'rgb(0,0,0)';
let eraser = false;

function createCanvas() {
    const canvas = {};
    for (let div = 0; div < 10000; div++) {
        canvas[div] = document.createElement('div');
        canvas[div].className ='canvas';
        container.appendChild(canvas[div]);
        canvas[div].addEventListener('click', () =>
        {
            if (color){
            canvas[div].style.backgroundColor = color;
        }
            else if (eraser) {
                canvas[div].style.backgroundColor = 'white';
        }
        });
    }
};

function pixelScalar() {

}

createCanvas();
canvas.addEventListener('click', () => canvasControl());
eraserButton.addEventListener('click', () => {color = false; eraser = true});
clearButton.addEventListener('click', () => container.style.backgroundColor = 'white');
scalar.addEventListener('input', () => {container.div.width = scalar.value; container.div.height = scalar.value});
