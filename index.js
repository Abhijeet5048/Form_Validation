
let formData = document.querySelector(".form");
let SubmitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let showPasswordBtn = document.querySelector(".btn");
let emptyfieldMessage = document.querySelectorAll(".empty-field");
let fnTarget, lnTarget, emailTarget, pwdTarget;
let fnFlag, lnFlag, emailFlag, pwdFlag;
let firstName, lastName, email, password;
let field;
let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
for(let errorMessage of errorMessages) {
    errorMessage.classList.add("d-none"); 
}
for(let element of emptyfieldMessage){
    element.classList.add("d-none");
}

formData.addEventListener("keyup", (event) => {
    event.preventDefault();
    console.log(event.target.dataset.key); 
    field = event.target.dataset.key;
    switch(field){
        case "firstName" :
            firstName = event.target.value;
            fnTarget = event.target;
            break; 
        case "lastName" :
            lastName = event.target.value;
            lnTarget = event.target;
            break;
        case "email" :
            email = event.target.value;
            emailTarget = event.target;
            break;
        case "password" :
            password = event.target.value;
            pwdTarget = event.target;
            break; 
        default:
            firstName = lastName = email = password = "";  
            break;          
    }
});

SubmitButton.addEventListener("click", (event) =>{
     event.preventDefault();
     if(firstName){
        emptyfieldMessage[0].classList.add("d-none");
        if(!nameRegex.test(firstName)){
            fnTarget.classList.add("error");
            errorMessages[0].classList.remove("d-none");
            console.log("Name must contain only alphabets");
            fnFlag = false;
        }else{
            fnTarget.classList.remove("error");
            errorMessages[0].classList.add("d-none");
            fnFlag = true;
        }
     }else{
        emptyfieldMessage[0].classList.remove("d-none");
        //console.log("Please fill this field");
    }
     if(lastName) {
        emptyfieldMessage[1].classList.add("d-none");
        if(!nameRegex.test(lastName)) {
            lnTarget.classList.add("error");
            errorMessages[1].classList.remove("d-none");
            console.log("Name must contain only alphabets");
            lnFlag = false;
        }else{
            lnTarget.classList.remove("error");
            errorMessages[1].classList.add("d-none");
            lnFlag = true;
        }
     }else{
            emptyfieldMessage[1].classList.remove("d-none");
            console.log("Please fill this field");
     }
     if(email) {
        emptyfieldMessage[2].classList.add("d-none");
        if(!emailRegex.test(email)) {
            emailTarget.classList.add("error");
            errorMessages[2].classList.remove("d-none");
            console.log("Invalid Email Id");
            emailFlag = false;
        }else{
            emailTarget.classList.remove("error");
            errorMessages[2].classList.add("d-none");
            emailFlag = true;
        }
     }else{
        emptyfieldMessage[2].classList.remove("d-none");
        console.log("Please fill this field");
     }
     if(password) {
        emptyfieldMessage[3].classList.add("d-none");
        if(!passwordRegex.test(password)){
            pwdTarget.classList.add("error");
            errorMessages[3].classList.remove("d-none");
            console.log("Invalid Password");
            pwdFlag = false;
        }else{
            errorMessages[3].classList.add("d-none");
            pwdTarget.classList.remove("error");
            
            pwdFlag = true;
        }
        }else{
            emptyfieldMessage[3].classList.remove("d-none");
            //console.log("Please fill this field");
        }
        if(fnFlag && lnFlag && emailFlag && pwdFlag){
            fnTarget.value = lnTarget.value = emailTarget.value = pwdTarget.value = "";
            window.location.href = "success.html";
        }
});

showPasswordBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    if(pwdTarget.getAttribute("type") === "text"){
        pwdTarget.setAttribute("type", "password");
    }else{
        pwdTarget.setAttribute("type", "text");
    }
});