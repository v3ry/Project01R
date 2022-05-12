const recettePreview = document.querySelectorAll(".recettePreview");
const recetteFull = document.querySelectorAll(".recetteFull");
console.log(recettePreview)
let bAppear = false;
// for(i = 0; i < recettePreview.length;i++){
// recettePreview[i].addEventListener("click", fullRecette(i));
// recetteFull[i].addEventListener("click", fullRecette(i));
// }
recettePreview.forEach(rec=>{
    rec.addEventListener("click",function handleClick(event) {
        console.log(rec);
        if (bAppear === false){
            rec.classList.add("displayRecette");
            let test = rec.lastElementChild;
            console.log(test);
            rec.lastElementChild.classList.remove("recetteFull")
            console.log(rec)
            bAppear = true;
        }else{
            rec.classList.remove("displayRecette");
            rec.lastElementChild.classList.add("recetteFull")
            bAppear = false;
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