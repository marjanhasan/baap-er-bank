document.getElementById('btn-deposit').addEventListener('click',function(){
    const enteredAmount = getInputValue('deposit-field');
    const previousDepositValue = getValueFromText('deposit-total');
    const newDepositValue = enteredAmount + previousDepositValue;
    setValueAsText('deposit-total', newDepositValue);
    
    const previousBalanceValue = getValueFromText('balance-total');
    const newBalanceValue = enteredAmount + previousBalanceValue;
    setValueAsText('balance-total', newBalanceValue);
});