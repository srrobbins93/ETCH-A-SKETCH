// Create application variables.
const canvasContainer = document.getElementById('canvasContainer');
const colorBox = document.getElementById('box');
const eraserButton = document.getElementById('eraser');
const clearButton = document.getElementById('clear');
const colorPickerButton = document.getElementById('colorPicker');
const scalar = document.getElementById('scalar');
let color = `rgb(${rRange.value},${gRange.value},${bRange.value})`;
let eraser = false;
let picker = false;
let clear = false;

//Assigns inital textcontent values of RGB textboxes.
document.getElementById('r').textContent = rRange.value;
document.getElementById('g').textContent = gRange.value;
document.getElementById('b').textContent = bRange.value;

// This initial function updates the colorBox in the left container with the current color selected.
colorUpdate();

// Generates the div elements that will permit the user to paint pixels on the canvas.
createCanvas();

/* This functions appends the main event listener to each div element generated
when the webpage is loaded. Essentially, this allows the color-picker and eraser buttons to
work as intended along with the pixel painter functionality. */
function createCanvas() {
    const canvas = {};
    for (let div = 0; div < 10000; div++) {
        canvas[div] = document.createElement('div');
        canvas[div].className ='canvas';
        canvasContainer.appendChild(canvas[div]);
        canvas[div].addEventListener('click', () =>
        {
            if (color) {
            canvas[div].style.backgroundColor = color;
        }
            else if (eraser) {
                canvas[div].style.backgroundColor = 'white';
        }
            else if (picker) {
                color = canvas[div].style.backgroundColor;
                colorBox.style.backgroundColor = color;
                colorPickerButton.style.backgroundColor = 'white';
                colorPickerButton.style.color = '#33a1fd';
                picker = false;
        }
        });
    }
};

// Clears canvasContainer by iterating over its childern and changing the background-color to white.
function clearContainer() {
    for (div = 0; div < canvasContainer.children.length; div++) {
        canvasContainer.children[div].style.backgroundColor = 'white';
        color = `rgb(${rRange.value},${gRange.value},${bRange.value})`; eraser = false; clear = false; picker = false;
        };
}

// On click, the clicking with cursor on canvasContainer's child element will turn its backgroundColor white.
eraserButton.addEventListener('click', () =>
{
    if (!eraser) {
        color = false; eraser = true; clear = false; picker = false;
        eraserButton.style.backgroundColor = '#33a1fd';
        eraserButton.style.color = 'white';
        }
    else {
        color = `rgb(${rRange.value},${gRange.value},${bRange.value})`; eraser = false; clear = false; picker = false;
        eraserButton.style.backgroundColor = 'white';
        eraserButton.style.color = '#33a1fd';
        }
}
);

// On click, function will iterate over HTML collection object by accessing the children property on container and turn each child element's background.
clearButton.addEventListener('click', () => clearContainer());

//Color Functionality. See above comment on line 18.
function colorUpdate() {
    color = `rgb(${rRange.value}, ${gRange.value}, ${bRange.value})`;
    colorBox.style.backgroundColor = color;
}

/* Allows user to choose a color that is already on the canvasContainer. This triggers the event listener attached
to the appropriate div child element of the canvasContainer via createCanvas(). */
colorPickerButton.addEventListener('click', () =>
{
    if (!picker) {
    color = false; eraser = false; clear = false; picker = true;
    colorPickerButton.style.backgroundColor = '#33a1fd';
    colorPicker.style.color = 'white';
    }
})

// The following functions updates the RGB textcontent boxes above the RGB input ranges based on each range's value.
rRange.addEventListener('input', () => {
    document.getElementById('r').textContent = `${rRange.value}`;
    colorUpdate();
});

gRange.addEventListener('input', () => {
    document.getElementById('g').textContent = `${gRange.value}`;
    colorUpdate();
});

bRange.addEventListener('input', () => {
    document.getElementById('b').textContent = `${bRange.value}`;
    colorUpdate();
});

r.addEventListener('change', () => {
    document.getElementById('rRange').value = r.value;
    colorUpdate();
})

g.addEventListener('change', () => {
    document.getElementById('gRange').value = g.value;
    colorUpdate();
})

b.addEventListener('change', () => {
    document.getElementById('bRange').value = b.value;
    colorUpdate();
})

//On click, a function is executed whereby the scalar input range will influence the size of all child elements of canvasContainer.
scalar.addEventListener('input', () =>
{
    clearContainer();
    for (let div = 0; div < 10000; div++) {
        canvasContainer.children[div].style.width = scalar.value.toString() + 'px';
        canvasContainer.children[div].style.height = scalar.value.toString() + 'px';
        }
});
