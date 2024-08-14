const form = document.querySelector("form");
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

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