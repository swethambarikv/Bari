function validate() {    
    var nameemp = document.getElementById("name").value;    
    var idemp = document.getElementById("id").value;    
    var numberemp = document.getElementById("number").number;    
    var emailemp = document.getElementById("email").value;    
    var dobemp = document.getElementById("dob").value;    
    var dojemp = document.getElementById("doj").value; 
    /*var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;  */ 

    if (name.length < 2 || name.length >18 || name==null || name=='') {    
        alert("Name is required Eg:Swetha");  
        nameemp.focus();  
        return false;    
    }    
    if (id.value.length <= 0) {    
        alert("ID Name is required");    
        idemp.focus();    
        return false;    
    } 
    if(email.value != " ")
    {
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
    alert("Please enter a valid e-mail address \n Eg:aspire@gmail.com"); 
    emailemp.focus(); 
    return false;  
    }   
    }
    if (isNaN(numberemp)){  
        document.getElementById("number").innerHTML="Enter Numeric value only";  
        return false;  
    }else{  
        return true;
    }    
    {
    var dob = $get('<%=ui_txtDOB.ClientID %>');   
    var Split = dob.value.split("/");
    if (parseInt(Split[2]) > 1993) 
    {
         alert("DOB year should be above 18");
         dobemp.focus();
         return false;
    }  

} 
}    
