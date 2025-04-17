

function AcceptName(str){
    let flag=true;

    for(let i=0;i<str.length;i++)
    {
        let ch=str.charCodeAt(i);
        if( !((ch>=65 && ch<=90 ) || (ch>=97 && ch<=122) || ch==32))
        {
            flag=false;  
            break;
        }
    }
        let element=document.getElementById("name");
        if(flag)
        {
           element.style.color="black";
        }
        else
        {
            element.style.color="red";
        }   
    
}


    // function AcceptEmail(email)
    //  {
    //     let element = document.getElementById("e");    
      
    //     if (email.includes("@") && email.includes(".") && email.indexOf("@") < email.lastIndexOf(".")) {
    //       element.style.color = "black";
        
    //     } else {
    //       element.style.color = "red";
    
    //     }
    //   }


      function AcceptEmail(str) {
        let spanEle = document.getElementById("e");
    
        // Check for only one '@' and it's not at the first position
        let atIndex = str.indexOf("@");
        let lastAtIndex = str.lastIndexOf("@");
    
        if (atIndex <= 0 || atIndex !== lastAtIndex) {
            spanEle.innerHTML = "Invalid email";
            spanEle.style.color = "red";
            return;
        }
    
        // Check if dot (.) is placed 3 or 4 characters before the end
        let domainPart = str.substring(atIndex); // e.g., @gmail.com
        let dotIndex = domainPart.indexOf(".");
        if (!(dotIndex === domainPart.length - 4 || dotIndex === domainPart.length - 3)) {
            spanEle.innerHTML = "Invalid email";
            spanEle.style.color = "red";
            return;
        }
    
        // Check for valid characters and no uppercase letters
        let flag = false;
        for (let i = 0; i < str.length; i++) {
            let ascii = str.charCodeAt(i);
    
            // Check if character is not a-z, 0-9, @, ., or _
            let validChar = (ascii >= 97 && ascii <= 122) || (ascii >= 48 && ascii <= 57) || ascii == 64 || ascii == 46 || ascii == 95;
            if (!validChar) {
                flag = true;
                break;
            }
        }
    
        if (flag) {
            spanEle.innerHTML = "Invalid email";
            spanEle.style.color = "red";
        } else {
            spanEle.innerHTML = "";
        }
    }
    
      



function AcceptMobile(str)
{
    let flag=true;
    for(let i=0;i<str.length;i++)
    {
        let ch=str.charCodeAt(i);
        if(!(ch>=48 && ch<=57) || str.length!=10)
        {
            flag=false;
            break;
        }
    }
    let no=document.getElementById("phone");

    if(flag)
    {
        no.style.color="black";

    }
    else{
        no.style.color="red";
    }
}

function SubmitForm(event)
{
     event.preventDefault();
     let mess=document.getElementById("msg");  
     let success=document.getElementById("name");
    let email=document.getElementById("e").value;
     let phone=document.getElementById("phone").value;

     let temp=success.value;
     
     
    if(temp!="" && email!="" && phone!="")
        {    
         mess.innerHTML=" Registration Succefully Completed For Demo Lecture 🎉🎉";
         mess.style.color="Green";
         alert("Form Submmited");
       }
     else{
         mess.innerHTML="Fill All Information";
         mess.style.color="red";
         alert("Form not Submmited");
     }
 
}