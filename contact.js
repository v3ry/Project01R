const form = document.getElementById("contact-form");

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();
  let mail = new FormData(form);
  
  sendMail(mail);


});

const sendMail = (mail) => {
  fetch("http://82.65.82.1:5000/send", {
    method: "post",
    body: mail,
  }).then((response) => {
    console.log(response);
    if(response.status === 200){
      console.log("succes")
    }else{
      console.log("fail coté serveur");
    }
    return response.status;
  })
  .catch((error) => {
    console.log("Serveur HS")
  });
};