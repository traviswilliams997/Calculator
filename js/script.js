function add(num1, num2){
    //console.log(num1 + num2);
    return num1 + num2;
}

function subtract(num1, num2){
    //console.log(num1 - num2);
    return num1 - num2;
}

function multiply(num1, num2){
    //console.log(num1 * num2);
    return num1 * num2;
}

function divide(num1, num2){
    //console.log(num1 / num2);
    return num1 / num2;
    
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


function calcDisplay(value, displayContent, display){
    let displayValue = value;
    displayContent.textContent = displayValue;
    display.appendChild(displayContent);

}

//button to display add"
const digits = document.querySelectorAll('.digits');
let lastValue = 0;
let addPush = 'no';


for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener('click', () => {
        calcDisplay(`${i}`, displayContent, display);
        lastValue = i;
     
        console.log('at digit: push equal  ' + addPush);
      
        
      });
    }
  

const addbtn = document.querySelector('#add');
let firstNum = 0;
let output = 0;



    addbtn.addEventListener('click', () => {
        if(addPush == 'yes'){
         output =  operate('+', firstNum, lastValue);
         calcDisplay(output, displayContent, display);
        
         firstNum = output;
        
        }else{
          
          firstNum = lastValue;
          addPush = 'yes';
        
          
        }
        console.log('at button: push equal ' + addPush);
      });
    




