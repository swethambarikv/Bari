function validateform(){  
    var name=document.formvalidation.name.value; 
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;
    } 
}   
