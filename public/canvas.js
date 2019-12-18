let canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

let visualisationArray = shakeArray(getRandomArray(50));


const itemsGap = 3,
    singleItemWidth = (canvas.width - (visualisationArray.length - 1) * itemsGap) / visualisationArray.length,
    maxValue = Math.max.apply(null, visualisationArray),
    ratio = canvas.height / maxValue;

ctx.fillStyle = 'green';

function drawArray() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < visualisationArray.length; i++) {
        ctx.fillRect((singleItemWidth + itemsGap) * i, canvas.height - visualisationArray[i] * ratio, singleItemWidth, visualisationArray[i] * ratio);
    }
}

drawArray();

let sortingWorker = new Worker('./sorting-worker.js');

sortingWorker.onmessage = e => {
    visualisationArray = e.data;
    drawArray();
};

sortingWorker.postMessage(visualisationArray);