const recettePreview = document.querySelectorAll(".recettePreview");
// const recetteFull = document.querySelectorAll(".recetteFull");
console.log(recettePreview);
let bAppear = false;
// for(i = 0; i < recettePreview.length;i++){
// recettePreview[i].addEventListener("click", fullRecette(i));
// recetteFull[i].addEventListener("click", fullRecette(i));
// }
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
            rec.lastElementChild.classList.add("recetteFull")
            window["bAppear"+currentID] = false;
}})});


// function fullRecette(id){
//     if (bAppear === false){
//     recetteFull[id].classList.add("displayRecette");
//     bAppear = true;
//     console.log(id)
// }else{
//     recetteFull[id].classList.remove("displayRecette");
//     bAppear = false;
//     console.log(id)
// }
// }