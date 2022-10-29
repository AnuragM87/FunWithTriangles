const inputs=document.querySelectorAll(".angle-input");
// console.log(inputs[0]);
const isTriangleBtn=document.querySelector("#is-triangle-btn")
const outputEl=document.querySelector("#output");

function calculateSumOfAngles(angle1,angle2,angle3){
const sumOfAngles=angle1+angle2+angle3;
return sumOfAngles;
}
function isTriangle(){
    const sumOfAngles=calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sumOfAngles===180){
        outputEl.innerText="Triangle";
    }
    else{
        outputEl.innerText=" NOT Triangle";
    }
    
}

isTriangleBtn.addEventListener('click',isTriangle);