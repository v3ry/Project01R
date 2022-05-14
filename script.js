const recettePreview = document.querySelectorAll(".recettePreview");
// const recetteFull = document.querySelectorAll(".recetteFull");
console.log(recettePreview);
let bAppear = false;
let myId = 0;

recettePreview.forEach(rec=>{
    
    console.log(myId);
    rec.setAttribute("ID",myId )
    window["bAppear"+myId] = false;
    myId++;
    rec.addEventListener("click",function handleClick(event) {
        let currentID = rec.getAttribute("ID");
        console.log("Id is " + currentID);
        if (window["bAppear"+currentID] === false){
            rec.classList.add("displayRecette");
            let test = rec.lastElementChild;
            console.log(test);
            rec.lastElementChild.classList.remove("recetteFull")
            console.log(rec)
            window["bAppear"+currentID] = true;
        }else{
            rec.classList.remove("displayRecette");
            rec.lastElementChild.classList.add("recetteFull");
            window["bAppear"+currentID] = false;
}})});


//ZoneBoutonBurger
const btnBurger = document.querySelector(".hamburger");
const btnBlock = document.querySelector(".buttonBlock");
let burgerOpen = false;

btnBurger.addEventListener("click",function handleClick(event){
    if (burgerOpen === false){
        btnBlock.style.display = "flex";
        burgerOpen = true;
    }else{
        btnBlock.style.display = "none";
        burgerOpen = false;
    }
});

//correction d'affichage du menu en cas d'utilisation du burger
const smallDevice = window.matchMedia("(min-width: 700px)");
smallDevice.addEventListener("change",handleDeviceChange);

function handleDeviceChange(e) {
  if (e.matches){ 
      btnBlock.style.display = "flex";
      burgerOpen = true;
    }else{
      btnBlock.style.display = "none";
      burgerOpen = false;
    }
}

// Run it initially
handleDeviceChange(smallDevice);