const snbMenu = document.querySelector("#snb .sub_menu");
const snbBtn = document.querySelector("#snb .btn_menu"); 

snbBtn.addEventListener("click", function(){
    console.log("!");
    if(snbMenu.classList.contains("hide")){
        snbMenu.classList.remove("hide");
    } else {
        snbMenu.classList.add("hide");
    }
});