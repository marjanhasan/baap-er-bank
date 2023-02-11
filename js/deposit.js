// step-1: add event handler to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2: get the deposit amount from input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;

    // step-3: get the current value of deposit
    // for non-input use innerText to get the value
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;

})
