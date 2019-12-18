// Helper function
const swapArrayItems = (i, j, array) => [ array[i], array[j] ] = [ array[j], array[i] ];

const sleep = ms => {
    const now = Date.now();
    while(now + ms > Date.now());
};

// create function for storing values to localStorage
// Lets do javascript visualisation for both all of the algorithms

// My sorting
// for (let i = 0; i < arr.length; i++) {
//     let a = arr[i];
//     let b = arr[i + 1];
    
//     if(a > b) {
//         arr[i] = b;
//         arr[i + 1] = a;
//         i -= 2;
//     }
//     counter++;
// }

// Selection sort
// let minIndex = 0,
//     minValue = arr[minIndex],
//     startIndex = 0;

// for (let i = 1; i < arr.length; i++) {

//     if (minValue > arr[i]) {
//         minValue = arr[i];
//         minIndex = i;
//     }

//     if (i === arr.length - 1) {
//         arr[minIndex] = arr[startIndex];
//         arr[startIndex] = minValue;

//         minIndex = ++startIndex;
//         minValue = arr[minIndex];
//         i = startIndex;
//     }
//     counter++;
// }

// Bubble sort
// Takes an array to sort and returns new sorted array if 1 or 2 arguments passed
// Second argument is optional and if set to true - orders array in descending order
// Third argument determines whether or not to include in the output count of iterations.
// The output will be like follows then: { sortedArray: [], iterations: X }
const bubbleSortArray = (arr, descending = false, includeIterationCount = false) => {
    let aCopy = [...arr],
        edge = aCopy.length - 1,
        finished = true,
        iterations = 0;

    for (let i = 0; i < edge; i++) {
        iterations++;
        if (descending) {
            if (aCopy[i] < aCopy[i + 1]) {
                swapArrayItems(i, i + 1, aCopy);
                finished = false;
            }
        }
        else {
            if (aCopy[i] > aCopy[i + 1]) {
                swapArrayItems(i, i + 1, aCopy);
                finished = false;
            }
        }
        sleep(30);
        postMessage(aCopy);

        if (i + 1 === edge) {
            if (finished) break;
            edge--;
            i = - 1;
            finished = true;
        }
    }

    return includeIterationCount ? { sortedArray: aCopy, iterations } : aCopy;
};

this.onmessage = e => {
    console.log(e);
    bubbleSortArray(e.data);
}