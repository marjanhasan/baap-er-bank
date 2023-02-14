document.getElementById('btn-deposit').addEventListener('click',function(){
    const enteredAmount = getInputValue('deposit-field');
    const previousDepositValue = getValueFromText('deposit-total');
    const newDepositValue = enteredAmount + previousDepositValue;
    setValueAsText('deposit-total', newDepositValue);
    
});