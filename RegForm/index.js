/*function validate() {  
    var fname = document.reg_form.fname;  
    var lname = document.reg_form.lname;  
    if (fname.value.length <= 0) {  
        alert("Name is required");  
        fname.focus();  
        return false;  
    }  
    if (lname.value.length <= 0) {  
        alert("Last Name is required");  
        lname.focus();  
        return false;  
    } 
} */


class Details {
    constructor(userInputs,regex,errMessage){
        this.userInputs = userInputs;
        this.regex = regex;
        this.errMessage = errMessage;
    }
}

class Validator{
    validation(details,errorMsg){
        if(!details.regex.test(details.userInputs.value)){
              errorMsg.innerHTML = details.errMessage;
              //add error border
              details.userInputs.classList.add('error');
          }
          else{
              errorMsg.innerHTML = '';
              //remove error border
              details.userInputs.classList.remove('error');
          }
    }
}

//event listner for First Name
document.getElementById('firstName').addEventListener('blur', function(e){
    //get value from html page
    const userInputs = document.getElementById('firstName'),
          regex = /^[a-zA-Z]{2,15}$/,
          errMessage = 'First name contains only character between 2 to 15 characters';
          
    const errorMsg = document.getElementById('firstNameError');

    //Instantiate details
    const details = new Details(userInputs,regex,errMessage);

    //Instantiate validator
    const validator = new Validator();

    let len = userInputs.value.length;
    
    if(len > 0){
        validator.validation(details,errorMsg);
    }
    else{
        const emptyError = 'First Name could not be empty';
              errorMsg.innerHTML = emptyError;
              //add error border
              userInputs.classList.add('error');
        
    }
});

//event listner for Last Name
document.getElementById('lastName').addEventListener('blur', function(e){
    //get value from html page
    const userInputs = document.getElementById('lastName'),
          regex = /^[a-zA-Z]{1,15}$/,
          errMessage = 'Last name contains only character between 1 to 15 characters';
          
    const errorMsg = document.getElementById('lastNameError');
    //Instantiate details
    const details = new Details(userInputs,regex,errMessage);

    //Instantiate validator
    const validator = new Validator();

    let len = userInputs.value.length;
    
    if(len > 0){
        validator.validation(details,errorMsg);
    }
    else{
        const emptyError = 'Last Name could not be empty';
              errorMsg.innerHTML = emptyError;
              //add error border
              userInputs.classList.add('error');
    }
});

//event listner for Email
document.getElementById('email').addEventListener('blur', function(e){
    //get value from html page
    const userInputs = document.getElementById('email'),
          regex = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$/,
          errMessage = 'Enter a valid email address';
          
    const errorMsg = document.getElementById('emailError');

    //Instantiate details
    const details = new Details(userInputs,regex,errMessage);

    //Instantiate validator
    const validator = new Validator();

    let len = userInputs.value.length;
    
    if(len > 0){
        validator.validation(details,errorMsg);
    }
    else{
        const emptyError = 'Email cannot be empty';
              errorMsg.innerHTML = emptyError;
              //add error border
              userInputs.classList.add('error');
        
    }
});

//event listner for Company Name
/*document.getElementById('companyName').addEventListener('blur', function(e){
    //get value from html page
    const userInputs = document.getElementById('companyName');
    const errorMsg = document.getElementById('companyError');

    let len = userInputs.value.length;
    
    if(len > 0){
        errorMsg.innerHTML = '';
        //remove error border
        userInputs.classList.remove('error');
    }
    else{
        errorMsg.innerHTML = 'Company Name cannot be empty';
        //add error border
        userInputs.classList.add('error');  
    }
});*/

//event listner for Phone
document.getElementById('phone').addEventListener('blur', function(e){
    //get value from html page
    const userInputs = document.getElementById('phone'),
          regex = /^[6-9]{1}[0-9]{9}$/,
          errMessage = 'Enter valid Phone number Start with (6-9) with 10 numbers only!!';
          
    const errorMsg = document.getElementById('phoneError');

    //Instantiate details
    const details = new Details(userInputs,regex,errMessage);

    //Instantiate validator
    const validator = new Validator();

    let len = userInputs.value.length;
    
    if(len > 0){
        validator.validation(details,errorMsg);
    }
    else{
        const emptyError = 'Phone cannot be empty';
              errorMsg.innerHTML = emptyError;
              //add error border
              userInputs.classList.add('error');
        
    }
});

//event listner for Check Box
/*document.addEventListener('submit', function(e){
    let check = document.getElementById('checkBox').checked;
    
    if(check == false){
        const errorMsg = document.getElementById('checkBoxError');
         errorMsg.innerHTML = 'Please tick the Checkbox';
        e.preventDefault();
    }
    else{
        const errorMsg = document.getElementById('checkBoxError');
         errorMsg.innerHTML = '';
    }
});*/
