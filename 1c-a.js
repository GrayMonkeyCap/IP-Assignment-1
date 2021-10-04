function checkname(){
    let name = document.contactForm.name.value;
    let letters = /^[a-zA-Z\-]+$/;
    if(name.match(letters)==null){
        alert("Name must contain only letters and should not be blank")
        document.contactForm.name.value="";
        return false;
       }
}

function checkemail(){
    let email_id = document.contactForm.email.value;
      
       atpos = email_id.indexOf("@");
       dotpos = email_id.lastIndexOf(".");

       if (atpos < 1 || ( dotpos - atpos < 2 )) {
          alert("Please enter correct Email ID and it should not be blank")
          return false;
       }
}
function checkage(){
    let age=document.contactForm.age.value;
    let numbers=/^[0-9\-]+$/;
    if(age.match(numbers)==null){
        alert("Age must contain only numbers and should not be blank")
        document.contactForm.age.value="";
        return false;
       }
}