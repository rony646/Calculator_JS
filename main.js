
var button = document.querySelectorAll('button')
var terms = [undefined, undefined, undefined]; // Terms of the operation like: "2 + 2"
let num = ''; // Starts the calculator with no value;


// This function gets the typed number and stores it in the "num" variable

function pressNum(button) {
    num += button.value
    showDisplay(num)
}

/* This function stores the first number in the first position of the "terms" array and stores
   the operator in the second postion and show it to the user, also it resets the "num" value */

function pressOperator(op) {
    terms[0] = num;
    terms[1] = op.value;
    showDisplay(op.value)
    num = '';
}


function clearDisplay() {
    num=''
    showDisplay(num)
}


/* This function is used to show what we want on calculator's screen */

function showDisplay(conteudo) {
    var displayScreen = document.getElementById('calcScreen');
    displayScreen.innerHTML = conteudo;
    
}

/* Here in this function we store the second typed number in the last positon of the array and we make
   the calc acording to the operator and show the result and stores it as our "num"(the first number) */

function pressEqual() {
    var result;
    terms[2] = num;
    switch(terms[1]) {
        case '+':
            result = Number(terms[0]) + Number(terms[2]);
            if(result === NaN | result === Infinity) {
                showDisplay('Invalid Operation');
            }else {
                showDisplay(result)
            }
            break;
        
        case '-':
            result = Number(terms[0]) - Number(terms[2]);
            if(result === NaN | result === Infinity) {
                showDisplay('Invalid Operation')
            } else {
                showDisplay(result);
            }
            break;
        
        case '*':
            result = Number(terms[0]) * Number(terms[2]);
            if(result === NaN | result === Infinity) {
                showDisplay('Invalid Operation')
            } else {
                showDisplay(result);
            }
            break;
        
        case '/':
            result = Number(terms[0]) / Number(terms[2]);
            if(result === NaN | result === Infinity) {
                showDisplay('Invalid Operation')
            } else {
                showDisplay(result);
            }
            break;

    }

    return num = result;
}

