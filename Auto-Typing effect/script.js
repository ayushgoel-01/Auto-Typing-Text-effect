const span = document.querySelector('.text');
const wordsList = ['Student','Developer','Problem Solver','Coder'];

autoType(wordsList,span);

function autoType(arr,element){
    let s = "";
    let charIndex = 1;
    let arrayIndex = 0;
    let reverseType = false;
    let roundCnt = 0;

    setInterval(()=>{
        let word = arr[arrayIndex];
        if(charIndex == word.length || charIndex == 0){
            reverseType = !reverseType;
            roundCnt++;
        }

        element.innerText = word.slice(0,charIndex);
        if(!reverseType) charIndex++;
        else charIndex--;

        if(roundCnt == 2){
            roundCnt = 0;
            arrayIndex++;
            arrayIndex = arrayIndex % arr.length;
        }
    },200);
}

