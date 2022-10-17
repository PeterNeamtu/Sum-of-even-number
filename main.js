let firstNumberInput = document.querySelector('#user-first-number');
let secondNumberInput = document.querySelector('#user-second-number');

let firstNumberError = document.querySelector('#first-number-error');
let secondNumberError = document.querySelector('#second-number-error');


function getUserValues(){
    let m = getNumber(firstNumberInput.value, firstNumberError);
    let n = getNumber(secondNumberInput.value, secondNumberError);
    
    return [m, n];
}


function getNumber(userValue, userError){
    let nr = userValue;
    nr = checkInteger(nr);
    if (nr === false){
        userError.innerText = 'The input is not an integer!';
     }
     
    return nr;
}


function orderInput(){
    let userValues = getUserValues();
    let m = userValues[0];
    let n = userValues[1];

    if (m > n){
        let aux = m;
        m = n;
        n = aux;
    }
        
    return [m,n];
}


function resultOp(){
    debugger;
    let userValues = orderInput();
    let m = userValues[0];
    let n = userValues[1];
    
    if(m === false || n === false){
        alert('Please input a valid integer!');
    }
    else{
        let sum = 0;
        let i = m
        while(i <= n){
            if(i % 2 == 0){
                sum = sum +i;
            }
            i++;
        }
        
        alert(sum);
    }
}


function clearForm(){
    firstNumberInput.value = null;
    secondNumberInput.value = null;
    firstNumberError.innerText = null;
    secondNumberError.innerText = null;
}