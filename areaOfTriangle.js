const sides=document.querySelectorAll(".side-input");
const areaBtn=document.querySelector("#area-btn");
const outputEl=document.querySelector("#output");

function calculateArea(a,b,c){
    const semiParameter=(a+b+b)/2;
    // return sumOfSquares;
    const dotOfdiff=semiParameter*(semiParameter-a)*(semiParameter-b)*(semiParameter-c);
    return dotOfdiff;

}

function areaOfTriangle(){
const dotArea = calculateArea(Number(sides[0].value) , Number(sides[1].value),Number(sides[2].value));
const area=Math.sqrt(dotArea);
outputEl.innerText="Area of Triangle is : "+area;
}

areaBtn.addEventListener('click',areaOfTriangle);