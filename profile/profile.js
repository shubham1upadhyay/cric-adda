let logout = document.getElementById("logout");

logout.addEventListener('click', ()=>{
    sessionStorage.clear();
    location.href = '/';
})


if(!sessionStorage.getItem('active'))
{
    location.href = '/login'
}

const home = document.getElementById("home");
home.addEventListener("click", ()=>{
    location.href="/";
})

let userName = localStorage.getItem('name');

document.getElementById("full_name").innerHTML = userName + " !";
let amount = document.getElementById("amount");
let f_name = document.getElementById("first_name");
let l_name = document.getElementById("last_name");


document.getElementById("pay").onclick = function (e) {
    let fnameV = f_name.value.trim();
    let lnameV = l_name.value.trim();
    let amountV = parseInt(amount.value);

    var options = {
      key: "rzp_test_PV1oQ0oMtgXOsq", 
      amount: (amountV*100) + 15, 
      currency: "INR",
      name: fnameV,
      description: "This is your order with 1.755% GST and $15 processing fees",
      theme: {
        color: "#000",
      },
      image:
      "https://khelnow.com/images/khelNowLogo.svg?imwidth=256",
    };
  
    var payment = new Razorpay(options);
    payment.open();
    e.preventDefault();

}