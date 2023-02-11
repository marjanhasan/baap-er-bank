//step-1: added a event handler on submit button
document.getElementById('btn-submit').addEventListener('click',function(event){
    //step-2: get the value added from input field
    //always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step-3: get password
    //step-3.a: set id on the password input tag
    //set-3.b: get the element
    //set-3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    //Danger: do not verify user email & password on the client side
    //verify email and password
    if( email === 'sontan@baap.com' && password === 'secret'){
        console.log('Valid user');
    }else{
        console.log('invalid user');
    }
})