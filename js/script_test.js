$(document).ready(function(){
    var h1 = new Tag('h2', "Title H2", ["class1", "class2"], "h1-id");
    $('#test').append(h1.render());
});



