function getInputValue(id){
    const inputField = document.getElementById(id);
    const inputFieldStringValue = inputField.value;
    const inputFieldValue = parseFloat(inputFieldStringValue);
    inputField.value = '';
    if(isNaN(inputFieldValue)){
        alert('Please provide a valid number');
        return;
    }
    return inputFieldValue;
}

function getValueFromText(id){
    const valueFromText = parseFloat(document.getElementById(id).innerText);
    return valueFromText;
}

function setValueAsText(id, value){
    const valueFromText = document.getElementById(id);
    const finalValue = valueFromText.innerHTML = value;
}