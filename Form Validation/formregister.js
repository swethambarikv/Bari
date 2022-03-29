/*JavaScript Section*/

function formValidation(){
    let firstName=document.getElementById("firstname").value;
    let lastName=document.getElementById("lastname").value;
    let email=document.getElementById("email").value;
    let phoneNumber=document.getElementById("phoneNumber").value;
    let genderMale=document.getElementById("male").checked;
    let genderFemale=document.getElementById("female").checked;
    let genderOthers=document.getElementById("others").checked;
    let course=document.getElementById("course").value;
    let setDate=document.getElementById("date1").value;


    const nameregex=/^[a-zA-Z]{3,15}$/;
    const phoneRegex=/[6-9]\d{9}/;
    const emailregex=/[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-z]{2,3}/;

    if(firstName==""){
        document.getElementById("fnameError").innerHTML="Please fill the firstName"
    }
    else if(!nameregex.test(firstName)){
        document.getElementById("fnameError").innerHTML="Enter your name only with alphabets between 3 to 15 characters";
    
    }
    else{
        document.getElementById("fnameError").innerHTML="";
    }

    if(lastName==""){
        document.getElementById("lnameError").innerHTML="Please fill the lastName"
    }
    else if(!nameregex.test(lastName)){
        document.getElementById("lnameError").innerHTML="Enter your name only with alphabets between 3 to 15 characters";
    
    }
    else{
        document.getElementById("lnameError").innerHTML="";
    }

    if(phoneNumber==""){
        document.getElementById("phoneError").innerHTML="Please fill the phone number"
    }
    else if(!phoneRegex.test(phoneNumber)){
        document.getElementById("phoneError").innerHTML="The phone number should start with 6 or 7 or 8 or 9 and should contain only 10 digits";
    
    }
    else{
        document.getElementById("phoneError").innerHTML="";
    }

    if(email==""){
        document.getElementById("emailError").innerHTML="Please fill the Email Id "
    }
    else if(!emailregex.test(email)){
        document.getElementById("emailError").innerHTML="Enter valid email id"
    }
    else{
        document.getElementById("emailError").innerHTML=""
    }

    if(genderMale==false&&genderFemale==false&&genderOthers==false){
        document.getElementById("genderError").innerHTML="Please select one of the options"
    }
    else{
        document.getElementById("genderError").innerHTML=""
    }

    if(course=="Choose_the_course"){
        document.getElementById("courseError").innerHTML="Please select your course"
    }
    else{
        document.getElementById("courseError").innerHTML="";
    }

    if(setDate===""){
        document.getElementById("dateError").innerHTML="Please select the date"
    }
    else{
        document.getElementById("dateError").innerHTML=""
    }
    return false;
}
document.getElementsByClassName('form-container')[0].addEventListener('submit' , event => {
    event.preventDefault()
    formValidation()
});