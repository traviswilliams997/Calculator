function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1  - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    if(num2 !== 0 ){
    return num1 / num2;
    }else{
        return 0;
    }
}

function operate(operator, num1, num2){
    if(operator == '+'){
        return add(num1, num2);
    }
    if(operator == '-'){
        return subtract(num1, num2);
    }
    if(operator == '*'){
        return multiply(num1, num2);
    }
    if(operator == '/'){
        return divide(num1, num2);
    }
    
}

//display
const display = document.querySelector('#display');
const displayContent = document.createElement('div');
displayContent.classList.add('displayContent');
let displayValue = "";

function calcDisplay(value, displayContent, display){
    displayContent.textContent = value; 
    display.appendChild(displayContent);

}

//To display multiple digit numbers
function play(i){
    if(i === 0){
        displayValue += 7;
    }
    if(i === 1){
        displayValue += 8;
    }
    if(i === 2){
        displayValue += 9;
    }
    if(i === 3){
        displayValue += 4;
    }
    if(i === 4){
        displayValue += 5;
    }
    if(i === 5){
        displayValue += 6;
    }
    if(i === 6){
        displayValue += 1;
    }
    if(i === 7){
        displayValue += 2;
    }
    if(i === 8){
        displayValue += 3;
    }
    if(i === 9){
        displayValue += 0;
    }
    //displayValue += i;
    calcDisplay(displayValue, displayContent, display);
    lastValue = parseInt(displayValue);
}

const digits = document.querySelectorAll('.digits');
for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener('click', function(){play(i)});
    }

let lastValue = 0;
let firstNum = 0;
let output = 0 ;
let addPush = 'no';
let subPush = 'no';
let mulPush ='no';
let divPush = 'no';
let equalPush = 'no';

//Addition button
const addbtn = document.querySelector('#add');
addbtn.addEventListener('click', () => {
    displayValue = "";
    if(addPush == 'yes'){
        output =  operate('+', firstNum, lastValue);
        calcDisplay(output, displayContent, display);     
        firstNum = output;
    }else{
        if(subPush == 'no' && mulPush == 'no' && divPush == 'no' && equalPush == 'no'){
            firstNum = lastValue;
        }
        addPush = 'yes';
    }   
        whichPushed(0, subPush, mulPush, divPush);        
      });

//Subtraction button
const subbtn = document.querySelector('#subtract');
subbtn.addEventListener('click', () => {
    displayValue = "";
    if(subPush == 'yes' ){
        output =  operate('-', firstNum, lastValue);
        calcDisplay(output, displayContent, display);
        firstNum = output;
    }else{
        if(addPush == 'no' && mulPush == 'no' && divPush == 'no' && equalPush == 'no'){
             firstNum = lastValue;
        }
        subPush = 'yes';
    }
    whichPushed(addPush, 0, mulPush, divPush);       
      });
    
//Multiply button
const mulbtn = document.querySelector('#multiply');
mulbtn.addEventListener('click', () => {
    displayValue = "";
    if(mulPush == 'yes' ){
        output =  operate('*', firstNum, lastValue);
        calcDisplay(output, displayContent, display);   
        firstNum = output;   
    }else{
        if(addPush == 'no' && subPush == 'no' && divPush == 'no' && equalPush == 'no'){
             firstNum = lastValue;
            }
        mulPush = 'yes';
    }
    whichPushed(addPush, subPush, 0, divPush);       
      });

//Division button
const divbtn = document.querySelector('#divide');
divbtn.addEventListener('click', () => {
    displayValue = "";
    if(divPush == 'yes' ){
        if(lastValue !== 0){
        output =  operate('/', firstNum, lastValue);
        calcDisplay(output, displayContent, display);
        firstNum = output;
        }else{
            calcDisplay('ERROR',displayContent, display );
            lastValue = 0;
            firstNum =0;
        }   
    }else{
        if(addPush == 'no' && subPush == 'no' && mulPush == 'no' && equalPush == 'no'){
        firstNum = lastValue;
        }
        divPush = 'yes';
     }
    whichPushed(addPush, subPush, mulPush, 0);       
      });

//Equals button
const equalbtn = document.querySelector('#equal');
equalbtn.addEventListener('click', () => {
    displayValue = "";
    whichPushed(addPush, subPush, mulPush, divPush);
    equalPush = 'yes';
        
      });

const clearbtn = document.querySelector('#clear');
clearbtn.addEventListener('click', () => {
    displayValue = "";
    lastValue = 0;
    firstNum = 0;
    output = 0;
    addPush = 'no';
    subPush = 'no';
    mulPush = 'no';
    divPush = 'no';
    equalPush =  'no';
    calcDisplay(displayValue, displayContent, display);
            });
      
//Repeated calculations
function whichPushed(addP, subP, mulP, divP){
    if(addP == 'yes'){    
     output =  operate('+', firstNum, lastValue);
     calcDisplay(output, displayContent, display);
     firstNum = output;
     addPush ='no';
    }
    if(subP == 'yes'){
        output =  operate('-', firstNum, lastValue);
        calcDisplay(output, displayContent, display);
        firstNum = output;
        subPush ='no';
    }
    if(mulP == 'yes'){
        output =  operate('*', firstNum, lastValue);
        calcDisplay(output, displayContent, display);
        firstNum = output;
        mulPush ='no';
    }
    if(divP == 'yes'){
        if(lastValue !== 0){
            output =  operate('/', firstNum, lastValue);
            calcDisplay(output, displayContent, display);
            firstNum = output;
            }else{
                calcDisplay('ERROR',displayContent, display );
                lastValue = 0;
                firstNum =0;
            }
        divPush ='no';
       
    }
}

