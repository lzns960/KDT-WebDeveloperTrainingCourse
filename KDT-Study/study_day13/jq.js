let target;
let currentTarget; //부모요소 통으로 가져오는 것

//날짜가 속해져있는 td태그 전체에 jquery로 접근

$("td").on("click",function(e){
    target = e.target;
    currentTarget = e.currentTarget;

    if($(target).prop("tagName")==="DIV"){ //prop 요소 선택
        $(target).remove();
    }else{
        $("#date").val($(currentTarget).text());
    }
})

function writeSchedule(){
    let task = $("#content").val();
    //input요소는 value로 받기 div는 text 였겠지만.. 

    $(currentTarget).append(`<div>${task}</div>`); //jQuery로 하려고 이렇게 하는거지만 실무에서 이러면 안된다~ 욕먹어요~
    $("#content").val("");
}
