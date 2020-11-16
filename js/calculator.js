function back(){
            var exp=document.calculator.nm.value;
            document.calculator.nm.value=exp.substring(0,exp.length-1);
        }
function fnsin(){
    calculator.nm.value=Math.sin(calculator.nm.value * Math.PI / 180);
}

function fncos(){
    calculator.nm.value=Math.cos(calculator.nm.value * Math.PI / 180);
}

function fntan(){
    calculator.nm.value=Math.tan(calculator.nm.value * Math.PI / 180);
}


function square(){
    calculator.nm.value=Math.pow(calculator.nm.value,2);
}

function squareroot(){
    calculator.nm.value=Math.sqrt(calculator.nm.value,2);
}
