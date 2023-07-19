document.getElementsByClassName('login')[0].addEventListener('click',function(){
    var emailInput = document.getElementById('email').value;
    var passwordInput = document.getElementById('password').value;

    if(emailInput == ''){
        alert("Email is null");
    } else if( /\S+@\S+\.\S+/.test(emailInput) == false){
        alert("It's not an email type");
    } else if(passwordInput ==''){
        alert("Password is null");
    } else if(passwordInput.length < 12){
        alert("Include at least 12 letters");
    } else if(/[A-Z]/.test(passwordInput) == false){
        alert("Include at least 1 uppercase");
    } else {
        alert("Thank you! Success to log in!");
    }


});