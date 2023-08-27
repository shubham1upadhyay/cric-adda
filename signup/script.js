const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      
links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})

const login = document.getElementById("login");
const login_1 = document.getElementById("login-1");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const more = document.getElementById("more");
const share = document.getElementById("share");
login.addEventListener('click', ()=>{
    location.href = "/login";
})

login_1.addEventListener('click', ()=>{
    location.href = "/login";
})

const home = document.getElementById("home");
home.addEventListener('click', ()=>{
    location.href="/"
})

about.addEventListener('click', ()=>{
    alert("Under Construction, Will be updated soon !");
})
contact.addEventListener('click', ()=>{
    alert("Under Construction, Will be updated soon !");
})
more.addEventListener('click', ()=>{
    alert("Under Construction, Will be updated soon !");
})
share.addEventListener('click', ()=>{
    alert("Under Construction, Will be updated soon !");
})