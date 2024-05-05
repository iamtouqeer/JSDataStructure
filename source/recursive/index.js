// Psuedo code

// function openGiftBox() {
//     if(isBall) return ball;
//     openGiftBox()
// }



// Call Stack

function funcThree() {
    console.log('Three');
}

function funcTwo() {
    funcThree()
    console.log('Two');
}

function funcOne() {
    funcTwo()
    console.log('one');
}

funcOne()


// Factorial
function factorial(n) {
    if(n === 1) return 1;
    return n * factorial(n-1);
}

console.log(factorial(5));
