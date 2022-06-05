console.log('client ready');
$(document).ready (function(){
    clickHandlers();    
});

function clickHandlers(){
    console.log('jQ ready');
    $('.changeLikesBox').on('click','#plusBtn',addLike)
    $('.changeLikesBox').on('click','#minusBtn',removeLike)
    $('#sendBtn').on('click', addNewComment);
}

let numberLikes = 0;

function addLike() {
    console.log('In add like');
    numberLikes++
    displayLikes();
   return numberLikes;
}
function removeLike(){
    console.log('In remove Like');
    if (numberLikes <= 0) {
         numberLikes = 0;
    }else{
        numberLikes--
    }
    displayLikes();
    return numberLikes;
}

function displayLikes() {
    $('#displayNumLikesForPost').empty();
    $('#displayNumLikesForPost').append(`${numberLikes}`);
    
}

function addNewComment() {
    console.log('yeye button clicked');
    
    
}