function disablenewarraybtn(){// disables new array button during sorting....
    document.querySelector("#newarray").disabled=true;
}
function enablenewarraybtn(){// enables newarray button after sorting is done....
    document.querySelector("#newarray").disabled=false;
}
function disableSizeSlider(){// disables sizeslider during sorting....
    document.querySelector("#arrsize").disabled = true;
}
function enableSizeSlider(){// enables sideslider after sorting is done....
    document.querySelector("#arrsize").disabled = false;
}
// disables the different sorting buttons during sorting.....
function disableSortingBtn(){
    document.querySelector("#selsort").disabled = true;
    document.querySelector("#bubsort").disabled = true;
    document.querySelector("#inssort").disabled = true;
    document.querySelector("#quicksort").disabled = true;
    document.querySelector("#heapsort").disabled = true;
}
// enables the different sorting buttons after sorting.....
function enableSortingBtn(){
    document.querySelector("#selsort").disabled = false;
    document.querySelector("#bubsort").disabled = false;
    document.querySelector("#inssort").disabled = false;
    document.querySelector("#quicksort").disabled = false;
    document.querySelector("#heapsort").disabled = false;
}
// Used in async function so that we can see animations of sorting, takes input time in ms (1000 = 1s)
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}
// Selecting size slider from DOM
let arraySize = document.querySelector('#arrsize');

// Event listener to update the bars on the UI
arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});
// Default input for waitforme function (260ms)
let delay = 260;
// Selecting speed slider from DOM
let delayElement = document.querySelector("#speed");

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

// Creating array to store randomly generated numbers
let array = [];

// Call to display bars right when you visit the site
createNewArray();

// To create new array input size of array
function createNewArray(noOfBars = 60) {
    // calling helper function to delete old bars from dom
    deleteChild();

    // creating an array of random numbers 
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);

    // select the div #bars element
    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;// converting a number into a string..
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

// Selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector("#newarray");
newArray.addEventListener("click", function(){
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});
function swap(el1,el2)// swap fucntion used in sorting algos....
{
    console.log('in swap func');
    let temp=el1.style.height;
    el1.style.height=el2.style.height;
    el2.style.height=temp;
}
