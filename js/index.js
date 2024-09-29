var userNameInput =document.querySelector("#userName")
var emailInput =document.querySelector("#email")
var passInput =document.querySelector("#pass")
var success =document.querySelector("#success")
var error =document.querySelector("#error")

var userNameInputRegx = /^[a-z]{4,8}/
var emailRegx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
var passwordRegix = /^[1-9]{3,8}/

function validation(element, regix) {
    if (regix.test(element.value)) {
      console.log("true");
      document.getElementById("invalideEmail").innerHTML = ""

      
}else{
  document.getElementById("invalideEmail").innerHTML = `invalide email`
}
}



let usersList = JSON.parse(localStorage.getItem("users") ) || []



 function signUp (){  
  if (checkEmail() === false) {
    document.getElementById("exist").innerHTML = `email already exists`


    return false
    
  }    
     
     if (userNameInput.value === "" || emailInput.value === null || passInput.value === null){ 
      error.classList.add("d-block")
       error.classList.remove("d-none") 
       success.classList.remove("d-block")
   success.classList.add("d-none")
    }else {
      let user = {
        userName :userNameInput.value,
        email : emailInput.value,
        password : passInput.value,

      }
        
 usersList.push(user)
   localStorage.setItem("users", JSON.stringify(usersList))
   error.classList.remove("d-block")
   error.classList.add("d-none")
             
   success.classList.add("d-block")
   success.classList.remove("d-none")
   clear ()
   location.replace("login.html") 

}}



function checkEmail() {
  for (let i = 0; i < usersList.length; i++) {
   if (emailInput.value === usersList[i].email) {
   console.log("present");
   return false;
   }
    
  }
}


function clear () {
    userNameInput.value = ""
    emailInput.value  = ""
    passInput.value  = ""
}


 function logIn(){
    for (let i = 0; i < usersList.length; i++) {
        if (emailInput.value === usersList[i].email && passInput.value === usersList[i].password){
              localStorage.setItem("name", usersList[i].userName)    
            location.replace("home.html") 
    }else{
        location.replace("signup.html")
    }
    }
}

function homeName() {
    document.getElementById("htmlContainer").innerHTML = "Welcome  " + localStorage.getItem("name")
    
}

function logout() {
  location.replace("login.html")
}