let screen = document.getElementById("screen");
firstNum = true;
thereIsOperation = false;
currentNum = '';
doted = false;
waitSecondNum = '';
waitResults = false;
resultParc = '';

function castingNum(num){
    return String(num);
}
function toNumber(num){
    return parseFloat(num);
}
function firstNumCall(num){
    currentNum = castingNum(num);

    if (doted){
        secNumCall(num);
    }else{
        screen.innerHTML = currentNum; //o innerHTML manda a variável pro hteml
        resultParc += currentNum;
    }
    firstNum = false;
    thereIsOperation = false;
  
}
function secNumCall(num){
    currentNum = castingNum(num);
    screen.innerHTML += currentNum;
    resultParc += currentNum;
    waitResults = true;
}
function numCall(num){
    if (firstNum){
        firstNumCall(num);
    }
    else{secNumCall(num);

    }

}
function dot(){
    if(!doted){
        castingNum(screen);
        screen.innerHTML += ".";
        doted = true;
        resultParc += ".";
    }
}
function operationPlus(){    
    castingNum(screen);
    lastChar = screen.innerHTML;
    if(!thereIsOperation){
        if(lastChar.slice(-1) == "."){
            
            screen.innerHTML += "0";
            resultParc += "0"
        }
    
        waitSecondNum = screen + "+";
        //a variável acima é string
        thereIsOperation = true;
        firstNum = true;
        waitResults = true;
        resultParc += "+";
    }

}

function resultsButton(){
    if(waitResults){
        resultParc = eval(resultParc);
        resultParc = castingNum(resultParc);
        screen.innerHTML = resultParc;

    }

 waitResults = false;

}