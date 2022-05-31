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
let firstNum = 0;
let output = 0;
let operateStore = "";
let addPush = 'no';
let subPush = 'no';
let mulPush ='no';
let divPush = 'no';
let equalPush = 'no';



for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener('click', () => {
        calcDisplay(`${i}`, displayContent, display);
        lastValue = i;
     
        console.log('at digit: push equal  ' + addPush);
        console.log('at digit: push equal  ' + subPush);
      
        
      });
    }
  

const addbtn = document.querySelector('#add');
addbtn.addEventListener('click', () => {
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
        if(subPush == 'yes'){
            output =  operate('-', firstNum, lastValue);
            console.log('sub push at add ' + output);
            calcDisplay(output, displayContent, display);
           
            firstNum = output;
            subPush = 'no';
           }
           if(mulPush == 'yes'){
           
            output =  operate('*', firstNum, lastValue);
            console.log('mul push at add' + output);
            calcDisplay(output, displayContent, display);
           
            firstNum = output;
            mulPush ='no';
           
           }
           if(divPush == 'yes'){
           
            output =  operate('/', firstNum, lastValue);
            console.log('div  push at add' + output);
            calcDisplay(output, displayContent, display);
           
            firstNum = output;
            divPush ='no';
           
           }
        
        console.log('at add button: push equal ' + addPush);
      });

const subbtn = document.querySelector('#subtract');
subbtn.addEventListener('click', () => {
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
        if(addPush == 'yes'){
           
         output =  operate('+', firstNum, lastValue);
         console.log('add push at sub' + output);
         calcDisplay(output, displayContent, display);
        
         firstNum = output;
         addPush ='no';
        
        }
        if(mulPush == 'yes'){
           
            output =  operate('*', firstNum, lastValue);
            console.log('mul push at sub' + output);
            calcDisplay(output, displayContent, display);
           
            firstNum = output;
            mulPush ='no';
           
           }
           if(divPush == 'yes'){
           
            output =  operate('/', firstNum, lastValue);
            console.log('div  push at sub' + output);
            calcDisplay(output, displayContent, display);
           
            firstNum = output;
            divPush ='no';
           
           }
       
        console.log('at sub button: push equal ' + subPush);
      });
    

const mulbtn = document.querySelector('#multiply');
mulbtn.addEventListener('click', () => {
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
        if(addPush == 'yes'){
           
         output =  operate('+', firstNum, lastValue);
         console.log('add push at mul' + output);
         calcDisplay(output, displayContent, display);
        
         firstNum = output;
         addPush ='no';
        
        }
        if(subPush == 'yes'){
           
            output =  operate('-', firstNum, lastValue);
            console.log('sub  push at mul' + output);
            calcDisplay(output, displayContent, display);
           
            firstNum = output;
            subPush ='no';
           
           }
           if(divPush == 'yes'){
           
            output =  operate('/', firstNum, lastValue);
            console.log('div  push at mul' + output);
            calcDisplay(output, displayContent, display);
           
            firstNum = output;
            divPush ='no';
           
           }
       
        console.log('at mul button: push equal ' + mulPush);
      });

const divbtn = document.querySelector('#divide');
divbtn.addEventListener('click', () => {
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
        if(addPush == 'yes'){
           
         output =  operate('+', firstNum, lastValue);
         console.log('add push at div' + output);
         calcDisplay(output, displayContent, display);
        
         firstNum = output;
         addPush ='no';
        
        }
        if(subPush == 'yes'){
           
            output =  operate('-', firstNum, lastValue);
            console.log('sub  push at div' + output);
            calcDisplay(output, displayContent, display);
           
            firstNum = output;
            subPush ='no';
           
           }
           if(mulPush == 'yes'){
           
            output =  operate('*', firstNum, lastValue);
            console.log('mul  push at div' + output);
            calcDisplay(output, displayContent, display);
           
            firstNum = output;
            mulPush ='no';
           
           }
         
       
        console.log('at div button: push equal ' + divPush);
      });

const equalbtn = document.querySelector('#equal');
equalbtn.addEventListener('click', () => {
        if(addPush == 'yes'){
            output =  operate('+', firstNum, lastValue);
            console.log('add push at equal ' + output);
            calcDisplay(output, displayContent, display);     
            firstNum = output;
            addPush = 'no';
        
        }
        if(subPush == 'yes'){
            output =  operate('-', firstNum, lastValue);
            console.log('sub push at equal ' + output);
            calcDisplay(output, displayContent, display);
           
            firstNum = output;
            subPush = 'no';
           }
           if(mulPush == 'yes'){
           
            output =  operate('*', firstNum, lastValue);
            console.log('mul push at equal' + output);
            calcDisplay(output, displayContent, display);
           
            firstNum = output;
            mulPush ='no';
           
           }
           if(divPush == 'yes'){
           
            output =  operate('/', firstNum, lastValue);
            console.log('div  push at equal' + output);
            calcDisplay(output, displayContent, display);
           
            firstNum = output;
            divPush ='no';
           
           }

           equalPush =  'yes';
        
        console.log('at add button: push equal ' + equalPush);
      });




