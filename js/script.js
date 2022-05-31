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
        add(num1, num2);
    }
    if(operator == '-'){
        subtract(num1, num2);
    }
    if(operator == '*'){
        multiply(num1, num2);
    }
    if(operator == '/'){
        divide(num1, num2);
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

//button to display
const digits = document.querySelectorAll('#digits');

for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener('click', () => {
        calcDisplay(`${i}`, displayContent, display);
      });
    }




