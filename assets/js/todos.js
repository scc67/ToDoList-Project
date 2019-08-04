//Check Off Specific Todos By Clicking
$(".js-list").on("click", ".js-do", function() {
    $(this).toggleClass("todo__do--completed")
});

//Click on X to delete todo
$(".js-list").on("click", ".js-delete", function(event) {
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//add todo after enter
$(".js-input").on("keypress", function(event) {
    if (event.which === 13) {
        //grabbing new todo text
        var todoText = $(this).val();
        $(this).val("")
        //create new li and add to ul
        $(".js-list").append("<li class=\"js-do todo__do\"><span class=\"js-delete\">X</span> " + todoText + "</li>")
    }
});