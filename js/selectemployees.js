/* global Utilities */
$(document).ready(function(){
    $('#btn-search').click(function(){
        var name = $('#search-input').val();
        if (name !== "") {
            $('#employee').empty();
            Utilities.listEmployees(name);            
        }
    });
    
    var selected = [];
    $(document).on( "click", ".btnAdd", function() {
        var id = $(this).attr('id');  
        var select = Utilities.loadEmployee(id);
        if (!Utilities.containsObject(select, selected)){
            selected.push(select);
            Utilities.updateSeleteds(selected);
            $(this).parent().parent().parent().parent().parent().fadeOut();
        }            
    });

    $(document).on( "click", ".btnRemove", function() {
        $(this).parent().parent().parent().parent().fadeOut();
        var itemIndex = Utilities.findObjIndex(selected, "id", this.id);
        selected.splice(itemIndex, 1);        
    });

    $(window).keydown(function(event){
        if(event.keyCode === 13) {
          event.preventDefault();
          return false;
        }
      });
  
    $('#btn-show-all').click(function(){
        $('#employee').empty();   
       Utilities.listEmployees();

    });    
    
    $('#btn-new').click(function(){
        var ids = [];
	$.each(selected, function( index, value ) {
            ids.push(value.id);
        });        
        url = "?content=new&&selecteds=" + ids.join(',') ;
        $(location).attr("href", url);	        
    });
});

