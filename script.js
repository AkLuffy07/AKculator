let calculatorObj = {
    firstNumber: '',
    secondNumber: '',
    operator: '',
    inputResult: '',
    finalResult: 0,
}
numberBtnClicked = (num) =>{
    calculatorObj.inputResult += num;
    const result = document.getElementById('result');
    result.value = calculatorObj.inputResult;
    result.style.color = '#ffffff';
    document.getElementById('calculation_text_id').innerHTML = `${calculatorObj.firstNumber} ${calculatorObj?.operator} ${calculatorObj?.inputResult}`;
}

operatorSelected = (operator) => {
    if(calculatorObj.inputResult === '') return;
    calculatorObj.firstNumber = calculatorObj.finalResult > 0 ? calculatorObj.finalResult : calculatorObj.inputResult;
    calculatorObj.operator = operator;
    calculatorObj.inputResult = '';
    document.getElementById('result').value = calculatorObj.inputResult;
    document.getElementById('calculation_text_id').innerHTML = calculatorObj.firstNumber + ' ' + calculatorObj.operator;
}


const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
    document.getElementById('result').value = '';
    document.getElementById('calculation_text_id').innerHTML = '';
    calculatorObj = {
        firstNumber: '',
        secondNumber: '',
        operator: '',
        inputResult: '',
    }
});

onBackSpaceClicked = () => {
    calculatorObj.inputResult = calculatorObj.inputResult.slice(0, -1);
    document.getElementById('result').value = calculatorObj.inputResult;
    document.getElementById('calculation_text_id').innerHTML = `${calculatorObj.firstNumber} ${calculatorObj?.operator} ${calculatorObj?.inputResult}`;
}

calculationError = (errorMsg) => {
    const result = document.getElementById('result');
    result.value = errorMsg;
    result.style.color = '#ff4c4cd6';
    document.getElementById('calculation_text_id').innerHTML = '';
    calculatorObj = {
        firstNumber: '',
        secondNumber: '',
        operator: '',
        inputResult: '',
        finalResult: 0,
    }
}

calculateResult = () => {
    if (calculatorObj.inputResult === '' || calculatorObj.firstNumber === '') return;
    calculatorObj.secondNumber = calculatorObj?.inputResult;
    const firstNumber = parseFloat(calculatorObj?.firstNumber);
    const secondNumber = parseFloat(calculatorObj?.secondNumber);
    console.log(firstNumber, secondNumber);
    
    if(isNaN(firstNumber) || isNaN(secondNumber)) {
        calculationError('Format Error');
        return;
    };
    switch(calculatorObj.operator){
        case '+':
            calculatorObj.finalResult = firstNumber + secondNumber;
            break;
        case '-':
            calculatorObj.finalResult = firstNumber - secondNumber;
            break;
        case '*':
            calculatorObj.finalResult = firstNumber * secondNumber;
            break;
        case '/':
            if(secondNumber === 0) {
                calculationError(`Can't divide by 0`);
                return;
            };
            calculatorObj.finalResult = firstNumber / secondNumber;
            break;
        default:
            calculatorObj.finalResult = firstNumber;
            break;
    }
    document.getElementById('result').value = calculatorObj.finalResult;
}
