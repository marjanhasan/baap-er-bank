document.getElementById('btn-withdraw').addEventListener('click', function () {
    const previousBalanceValue = getValueFromText('balance-total');

    const enteredAmount = getInputValue('withdraw-field');
    if (isNaN(enteredAmount)) {
        alert('Please provide a valid number');
        return;
    }
    if (enteredAmount > previousBalanceValue) {
        alert('Baap er bank e ato tk nai!');
        return;
    }

    const previousDepositValue = getValueFromText('withdraw-total');
    const newDepositValue = enteredAmount + previousDepositValue;
    setValueAsText('withdraw-total', newDepositValue);



    const newBalanceValue = previousBalanceValue - enteredAmount;
    setValueAsText('balance-total', newBalanceValue);
});