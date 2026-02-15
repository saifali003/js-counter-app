let count = 0;
const countDisplay = document.querySelector("#count");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");

increaseBtn.addEventListener("click",function(){
    count++;
    countDisplay.textContent = count;
});

decreaseBtn.addEventListener("click",function(){
    if(count>0){
        count--;
    }
    countDisplay.textContent = count;
});

resetBtn.addEventListener("click",function(){
    count = 0;
    countDisplay.textContent = count;
});