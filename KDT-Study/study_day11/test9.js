let boxEls = document.querySelectorAll(".box");

boxEls.forEach(function(boxEl, index) {
    //   boxEl.classList.add(`box_${index + 1}`);
    if (index % 7 === 0 ){
        boxEl.style.backgroundColor = "red";
    }
    else if(index % 7 === 1 ){
        boxEl.style.backgroundColor = "orange";
    }
    else if(index % 7 === 2 ){
        boxEl.style.backgroundColor = "yellow";
    }
    else if(index % 7 === 3 ){
        boxEl.style.backgroundColor = "green";
    }
    else if(index % 7 === 4 ){
        boxEl.style.backgroundColor = "blue";
    }
    else if(index % 7 === 5 ){
        boxEl.style.backgroundColor = "navy";
    }
    else if(index % 7 === 6 ){
        boxEl.style.backgroundColor = "purple";
    }
});


// let button = document.querySelector(".button");

// button.addEventListener("click", function(){
// });



// let turn = 0;

// button.addEventListener("click", function(){
//     boxEls.forEach(function(boxEl, index) {
//         boxEl.classList.add(`box_${index+1}`);
// });
// });


