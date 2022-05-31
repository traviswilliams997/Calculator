function add(num1, num2){
    //console.log(num1 + num2);
    return num1 + num2;
}

function subtract(num1, num2){
    //console.log(num1 - num2);
    return num1  - num2;
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
let displayValue = "";


function calcDisplay(value, displayContent, display){
    displayContent.textContent = value; 
    display.appendChild(displayContent);

}

//To display multiple digit numbers
function play(i){

    displayValue += i;
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






const addbtn = document.querySelector('#add');
    addbtn.addEventListener('click', () => {
        displayValue = "";

      
        if(addPush == 'yes'){
            output =  operate('+', firstNum, lastValue);
            console.log('add push at add ' + output);
            calcDisplay(output, displayContent, display);     
            firstNum = output;
        
        }else{
          
            if(subPush == 'no' && mulPush == 'no' && divPush == 'no' && equalPush == 'no'){
                firstNum = lastValue;
               }
                addPush = 'yes';
        }

        
        whichPushed(0, subPush, mulPush, divPush);
       
             
        console.log('at add button: push equal ' + addPush);
      });

const subbtn = document.querySelector('#subtract');
subbtn.addEventListener('click', () => {
    displayValue = "";
    
        if(subPush == 'yes' ){
            output =  operate('-', firstNum, lastValue);
            console.log('sub push at sub' + output);
            calcDisplay(output, displayContent, display);
           
            firstNum = output;
           
           }else{
               if(addPush == 'no' && mulPush == 'no' && divPush == 'no' && equalPush == 'no'){
             firstNum = lastValue;
            }
             subPush = 'yes';
           }
           whichPushed(addPush, 0, mulPush, divPush);
       
        console.log('at sub button: push equal ' + subPush);
      });
    

const mulbtn = document.querySelector('#multiply');
mulbtn.addEventListener('click', () => {
    displayValue = "";
        if(mulPush == 'yes' ){
            output =  operate('*', firstNum, lastValue);
            console.log('mul push at mul' + output);
            calcDisplay(output, displayContent, display);
           
            firstNum = output;
           
           }else{
               if(addPush == 'no' && subPush == 'no' && divPush == 'no' && equalPush == 'no'){
             firstNum = lastValue;
            }
             mulPush = 'yes';
           }
           whichPushed(addPush, subPush, 0, divPush);
       
        console.log('at mul button: push equal ' + mulPush);
      });

const divbtn = document.querySelector('#divide');
divbtn.addEventListener('click', () => {
    displayValue = "";
        if(divPush == 'yes' ){
            output =  operate('/', firstNum, lastValue);
            console.log('div push at div ' + output);
            calcDisplay(output, displayContent, display);
           
            firstNum = output;
           
           }else{
               if(addPush == 'no' && subPush == 'no' && mulPush == 'no' && equalPush == 'no'){
             firstNum = lastValue;
            }
             divPush = 'yes';
           }
           whichPushed(addPush, subPush, mulPush, 0);
         
       
        console.log('at div button: push equal ' + divPush);
      });

const equalbtn = document.querySelector('#equal');
equalbtn.addEventListener('click', () => {
    displayValue = "";

    whichPushed(addPush, subPush, mulPush, divPush);

           equalPush =  'yes';
        
        console.log('at add button: push equal ' + equalPush);
      });


function whichPushed(addP, subP, mulP, divP){
    
    if(addP == 'yes'){
       
     output =  operate('+', firstNum, lastValue);
     console.log('add push at which' + output);
     calcDisplay(output, displayContent, display);
    
     firstNum = output;
     addPush ='no';
    
    }
    if(subP == 'yes'){
       
        output =  operate('-', firstNum, lastValue);
        console.log('sub  push at which' + output);
        calcDisplay(output, displayContent, display);
       
        firstNum = output;
        subPush ='no';
       
       }
       if(mulP == 'yes'){
       
        output =  operate('*', firstNum, lastValue);
        console.log('mul  push at which' + output);
        calcDisplay(output, displayContent, display);
       
        firstNum = output;
        mulPush ='no';
       
       }
       if(divP == 'yes'){
           
        output =  operate('/', firstNum, lastValue);
        console.log('div  push at which' + output);
        calcDisplay(output, displayContent, display);
       
        firstNum = output;
        divPush ='no';
       
       }
     
   
    console.log('which pressed' + firstNum);
    
}

