/* global Utilities, Html */
jQuery.ajaxSetup({async:false});
$(document).ready(function(){
    
 
    
    
    $(document).on( "click", ".btnLink", function() {
            url = "?content=" + this.id.split('-')[1] ;
            
            $(location).attr("href", url);				
    });



        
});