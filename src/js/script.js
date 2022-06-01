let createAccount = document.getElementById("createAccount");
let login = document.getElementById("login");

createAccount.style.display = "none";

function showCreateAccount(){
  login.style.display = "none";
  createAccount.style.display = "block";
}

function showLogin(){
  createAccount.style.display = "none";
  login.style.display = "block";
}

//Loading script

setTimeout(hide, 2000);
function hide(){
  document.getElementById('preloader-container').style.display = "none";
}