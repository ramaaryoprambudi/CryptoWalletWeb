let btnRegistrasi = document.getElementById(`btnRegister`);
let registrasiUI = document.getElementById(`btnRegisterasi`);
let iconCloseBtn = document.getElementsByClassName(`icon-close`)[0];

btnRegistrasi.onclick = function(){
    registrasiUI.style.display=`flex`
}
iconCloseBtn.onclick=() =>{
    registrasiUI.style.display=`none`
}

// REGISTER END

// Login
let btnLoginAccount = document.getElementById(`btnLogin`);
let loginAccount = document.getElementsByClassName(`Login`)[0];
let btnCloseLogin = document.getElementsByClassName(`icon-close-login`)[0];

btnLoginAccount.onclick = function () {
    loginAccount.style.display = "flex"
}

btnCloseLogin.onclick = function () {
    loginAccount.style.display = `none`
}

window.onclick = function () {
    if (event.target == registrasiUI) {
        registrasiUI.style.display = "none"
       
    }
}

// window.onclick = function (){
//     if(event.target == loginAccount){
//         loginAccount.style.display="none"
//     }
// }
