const form = document.getElementById("contact-form");
const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();
  let mail = new FormData(form);
  sendMail(mail);
});

//envoie du form de contact
const sendMail = (mail) => {
  fetch("http://82.65.82.1:5000/send", {
    method: "post",
    body: mail,
  }).then((response) => {
    if(response.status === 200){
      sendNotif("green","Message envoyé, merci");
    }else{
      sendNotif("red","Oups le serveur est cassé, désolé");
    }
    return response.status;
  })
  .catch((error) => {
    sendNotif("red","Oups le serveur est cassé, désolé");
  });
};

//CreateAlert
const myAlert = document.createElement("div");
const message = document.createElement("p")
const currentDiv = document.querySelector("main");

//myAlert style
myAlert.style.width = "300px";
myAlert.style.height = "80px";
myAlert.style.backgroundColor = "red";
myAlert.style.zIndex = "800";
myAlert.style.position = "fixed";
myAlert.style.top = "40%";
myAlert.style.left = "30%"
myAlert.style.borderRadius = "11px";
myAlert.style.display = "none"
myAlert.style.alignItems = "center"
message.innerHTML = "Probleme d'envoie, merci de retenter plus tard.";
message.style.color = "white";
message.style.textAlign="center";
message.style.fontWeight = "bolder"
message.style.fontSize = "20px"
myAlert.appendChild(message);
currentDiv.appendChild(myAlert);

//fonction de mise en pause
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//Fonction génératrice de message pour un meilleur dry
async function sendNotif(myColor, text){
  myAlert.style.display = "flex"
  myAlert.style.backgroundColor = myColor;
  message.innerHTML = `${text} ${document.querySelector("#name").value}.`;
  await sleep(5000);
  myAlert.style.display = "none";
}