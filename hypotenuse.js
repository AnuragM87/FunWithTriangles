const sides=document.querySelectorAll(".side-input");
const hypotenuseBtn=document.querySelector("#hypotenuse-btn");
const outputEl=document.querySelector("#output");

function calculateSumOfSquare(a,b){
    const sumOfSquares=a**2 + b**2;
    // console.log(sumOfSquares);
    return sumOfSquares;

}

function calculateHypotenuse(){
const sumOfSquares = calculateSumOfSquare(Number(sides[0].value) , Number(sides[1].value));
const lengthOfHypotenuse=Math.sqrt(sumOfSquares);
outputEl.innerText="The length of hypotenuse is : "+lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener('click',calculateHypotenuse);