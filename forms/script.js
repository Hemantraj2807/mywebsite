const form = document.querySelector("form");
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");
document.getElementById("res").style.color = "red";
document.getElementById("nam").style.color = "red";
document.getElementById("mail").style.color = "red";

function validateUsername(element){
  if(!isNaN(element.value)){
    if (element.value === "") {
      document.getElementById('nam').innerText = "Please enter your Name";
    } else {
      document.getElementById('name').style.borderColor = "red";
      document.getElementById('nam').innerText = "Enter a valid Name";
    }
    
  }else{
    if (element.value.length < 3) {
      document.getElementById('name').style.borderColor = "red";
      document.getElementById('nam').innerText = "Name is too short";
    } else if(element.value.length > 15){
      document.getElementById('name').style.borderColor = "red";
      document.getElementById('nam').innerText = "Enter a Short Name";
    }else {
      document.getElementById('nam').innerText = "";
      document.getElementById('name').style.borderColor = "";
    }
    
  }

}

function validateEmail(element) {
  var email = element.value;
  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    if (email === "") {
      document.getElementById('email').style.borderColor = "red";
      document.getElementById('mail').innerText = "Please enter your Email";
    } else {
      document.getElementById('email').style.borderColor = "red";
      document.getElementById('mail').innerText = "Invalid email address";
    }
    
  }else{
    document.getElementById('email').style.borderColor = "";
    document.getElementById('mail').innerText = "";
  }
}

function val(elem){
  if(isNaN(elem.value)){
    document.getElementById('phone').style.borderColor = "red";
    document.getElementById('res').innerText = "Please enter numbers only";
    
  }else{
    document.getElementById('res').innerText = "";
    document.getElementById('phone').style.borderColor = "";
      
    if(elem.value.length > 10){
      document.getElementById('res').innerText = "Please enter 10 digits only";
      document.getElementById('phone').style.borderColor = "red";
    }else{
      document.getElementById('res').innerText = "";
      document.getElementById('phone').style.borderColor = "";
      if(elem.value.length > 10){
      document.getElementById('res').innerText = "Please enter 10 digits only";
      document.getElementById('phone').style.borderColor = "red";
    }else if (elem.value.length < 10) {
      document.getElementById('res').innerText = "Enter a valid number";
      document.getElementById('phone').style.borderColor = "red";
    }else{
      document.getElementById('res').innerText = "";
      document.getElementById('phone').style.borderColor = "";
    }
    }
  }
}

function sendEmail(){

    const bodyMessage = `Full Name: ${fullname.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "hemant.raj3536@gmail.com",
        Password : "1DF0EA35E8F7CB6BB32F9611BD801B8E5E6E",
        To : 'hemant.raj3536@gmail.com',
        From : "hemant.raj3536@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent Successfully",
                icon: "success"
              });
        }
      }
    );
}

// function checkInputs(){
//     const items = document.querySelectorAll(".form-control");

//     for(const form-control of items){
//         if(form-control.value == ""){
//             form-control.classList
//         }
//     }
// }

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();

    form.reset();
    return false;
});
