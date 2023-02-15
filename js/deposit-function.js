document.getElementById('btn-deposit').addEventListener('click',function(){
    const enteredAmount = getInputValue('deposit-field');
    if (isNaN(enteredAmount)) {
        alert('Please provide a valid number');
        return;
    }
    const previousDepositValue = getValueFromText('deposit-total');
    const newDepositValue = enteredAmount + previousDepositValue;
    setValueAsText('deposit-total', newDepositValue);
    
    const previousBalanceValue = getValueFromText('balance-total');
    const newBalanceValue = enteredAmount + previousBalanceValue;
    setValueAsText('balance-total', newBalanceValue);
});