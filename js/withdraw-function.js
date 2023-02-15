document.getElementById('btn-withdraw').addEventListener('click',function(){
    const enteredAmount = getInputValue('withdraw-field');
    const previousDepositValue = getValueFromText('withdraw-total');
    const newDepositValue = enteredAmount + previousDepositValue;
    setValueAsText('withdraw-total', newDepositValue);
    
    const previousBalanceValue = getValueFromText('balance-total');
    const newBalanceValue =previousBalanceValue - enteredAmount;
    setValueAsText('balance-total', newBalanceValue);
});