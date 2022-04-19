var step1 = document.getElementById("form1");
var step2 = document.getElementById("form2");
var step3 = document.getElementById("form3");
var step4 = document.getElementById("form4");
var step5 = document.getElementById("form5");

var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var next3 = document.getElementById("next3");
var next4 = document.getElementById("next4");

var back1 = document.getElementById("back1");
var back2 = document.getElementById("back2");
var back3 = document.getElementById("back3");
var back4 = document.getElementById("back4");

var progress = document.getElementById("progress");


function pageChange()
{
    if(pageOneCheck1==1 && pageOneCheck2==1 && pageOneCheck3==1 && pageOneCheck4==1 && pageOneCheck5==1 ){
        next1.onclick=function(){
    
            form1.style.left="-450px";
            form2.style.left="-40px";
            progress.style.width="40px";
        }
    }
    // else{
    //     alert("Enter the details correctly!!");
    // }
}

var email = document.getElementById("email");
var pass = document.getElementById("pass1");
var cPass = document.getElementById("pass2");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");

var alphaNumericFormat = "/([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})(\.[a-zA-Z]{2,5})?$/";
var alphaFormat = "/^[a-zA-Z ]+$/";

var pageOneCheck1 = 0;
var pageOneCheck2 = 0;
var pageOneCheck3 = 0;
var pageOneCheck4 = 0;
var pageOneCheck5 = 0;

/*back1.onclick = function () {
    form1.style.left = "40px";
    form2.style.left = "450px";
    progress.style.width = "72px";

}*/

// back2.onclick = function () {
//     form2.style.left = "40px";
//     form3.style.left = "450px";
//     progress.style.width = "144px";
// }

// back3.onclick = function () {
//     form3.style.left = "40px";
//     form4.style.left = "450px";
//     progress.style.width = "216px";
// }
// next3.onclick = function () {
//     form3.style.left = "-450px";
//     form4.style.left = "40px";
//     progress.style.width = "288px";

// }

// back4.onclick = function () {
//     form4.style.left = "40px";
//     form5.style.left = "450px";
//     progress.style.width = "288px";
// }

/* EMAIL*/    
function validateEmail()
{
    // var emails = document.getElementById('email');
    var filter ="/^([a-zA-Z0-9_\.\-]){5,25}+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/";
if(email==""){
    alert("Email required");
    pageOneCheck1=0;
    return false;
}
    else if (!filter.match(email.value)) {
        alert('Please provide a valid email address');
        // emails.focus;
        pageOneCheck1=0;
        return false;
    }
    else{
        pageOneCheck1=1;
    }
}
/* NAME*/
function validateName() {
    var regName = "/^[A-Za-z]+$/";
    // var name = document.getElementById('fname').value;
    // if (regName.test(fname.value)==true) {
    //     alert('Please enter your full name (first & last name).');
    //     // document.getElementById('fname').focus();
    //     return false;
    // } else {
    //     alert('Valid name given.');
    //     return true;
    // }
    if(!regName.match(fname.value)){
        alert("Only Alphabets are allowed");
        return false;
        pageOneCheck2=0;
    }
    else{
        pageOneCheck2=1;
    }
}
/* PASSWORD*/
function verifyPassword() {
   
    var pass=document.getElementById("pass1").value;
    if(pass==" "){
        alert("Password Required");
        return false;
        pageOneCheck4=0;
    }
    else{
        pageOneCheck4=1;
    }
}
/*CONFIRM PASSWORD*/
function matchPassword(){
    var cpass=document.getElementById("pass2").value;
    var pass=document.getElementById("pass1").value;
    if(pass!=cpass){
        alert("Password doesnt match.Re-enter");
        return false;
        pageOneCheck5=0;
    }
    else{
        pageOneCheck5=1;
    }
}


// function verifyPassword() {
// if (!password.value.length) {
//     document.getElementById("pass1").style.border = "2px solid red";
//     document.getElementById("pass").innerHTML = "This field is neccessary";
//     pageOneCheck4 = 0;

//     return false;
// }
// else {
//     document.getElementById("pass").innerHTML = " ";
//     document.getElementById("pass1").style.border = "2px solid green";
//     pageOneCheck4 = 1;

// }
// }

    // if (confirmPassword.value.length==true) {
    //     document.getElementById("pass2").style.border = "2px solid red";
    //     document.getElementById("cpass").innerHTML = "Please Re-Enter the password";
    //     pageOneCheck5 = 0;

    //     return false;
    // }
    // else if (password.value != confirmPassword.value) {
    //     document.getElementById("cpass").innerHTML = "Passwords did not match";
    //     document.getElementById("pass2").style.border = "2px solid red";
    //     pageOneCheck5 = 0;

    //     return false;

    // }
    // else {
    //     document.getElementById("cpass").innerHTML = " ";
    //     document.getElementById("pass2").style.border = "2px solid green";
    //     pageOneCheck5 = 1;

    // }

// function changePage1() {
//     if (pageOneCheck1 == 1 && pageOneCheck2 == 1 && pageOneCheck3 == 1 && pageOneCheck4 == 1 && pageOneCheck5 == 1) {
//         next1.onclick = function () {
//             form1.style.left = "-450px";
//             form2.style.left = "40px";
//             progress.style.width = "144px";
//         }
//     }
//     else {
//         alert("Please fill all the required details to move to the next step");
//     }

// }
function validateDOB() {
    var lblError = document.getElementById("lblError");

    //Get the date from the TextBox.
    var dateString = document.getElementById("dob").value;
    var regex = "/(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/";

    //Check whether valid dd/MM/yyyy Date Format.
    if (regex.test(dateString)) {
        var parts = dateString.split("/");
        var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
        var dtCurrent = new Date();
        lblError.innerHTML = "Eligibility 18 years ONLY."
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
            return false;
        }

        if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {

            //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
            if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                return false;
            }
            if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
                if (dtCurrent.getDate() < dtDOB.getDate()) {
                    return false;
                }
            }
        }
        lblError.innerHTML = "";
        return true;
    } else {
        lblError.innerHTML = "Enter date in dd/MM/yyyy format ONLY."
        return false;
    }
}
function checkPhone() {
    var phone = document.forms["form2"]["phone"].value;
    var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone.value.match(phoneNum)) {
        return true;
    }
    else {
        document.getElementById("phone").className = document.getElementById("phone").className + " error";
        return false;
    }
}
function thank(){
    alert("Thank you for Registering");
}

function changePage() {
    const form = document.querySelectorAll('form');

    console.log("in chg")

    form.forEach(f => {
        f.classList.add('active');
    })
}










