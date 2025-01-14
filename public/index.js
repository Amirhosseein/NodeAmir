console.log("why are you looking logs ??? ");

let myName = document.getElementById("name") || document.querySelector(".name");

myName.addEventListener("click",()=>{
    myName.classList.toggle("animeName");
});