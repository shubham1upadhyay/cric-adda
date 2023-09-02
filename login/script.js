const signup = document.getElementById("signup");
const register = document.getElementById("register");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const more = document.getElementById("more");
const share = document.getElementById("share");


register.addEventListener("click", ()=>{
    location.href="/signup";
})
signup.addEventListener("click", ()=>{
    location.href="/signup";
})
const home = document.getElementById("home");
home.addEventListener("click", ()=>{
    location.href="/";
})

about.addEventListener('click', ()=>{
    alert("Under Construction, Will be updated soon !");
})
contact.addEventListener('click', ()=>{
    alert("Under Construction, Will be updated soon !");
})


let email = document.getElementById("email");
let pass = document.getElementById("pass");
let logIn = document.getElementById("let_me_in");
let eMsg = document.getElementById('e-msg');

logIn.addEventListener('click', ()=>{
    let emailV = email.value;
    let passV = pass.value;
    let f_email = localStorage.getItem('email');
    let f_pass = localStorage.getItem('pass');

    if(emailV !== f_email || passV !== f_pass)
    {
        eMsg.innerHTML = "Invalid Credentials !"
    }
    else if(emailV !== f_email)
    {
        eMsg.innerHTML = "Email is Not Registered with us !"
    }
    else{
        eMsg.innerHTML = '';
        sessionStorage.setItem('active', "banda maujood hai")
        location.href= "/profile"
    }
})

