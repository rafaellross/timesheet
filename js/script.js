/* global Utilities, Html */
jQuery.ajaxSetup({async:false});
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
    var weekDays = [
        {
           "Number" : 0,
           "Description" : "Sunday"
        },
        {
           "Number" : 1,
           "Description" : "Monday"            
        },
        {
           "Number" : 2,
           "Description" : "Tuesday"                       
        },
        {
           "Number" : 3,
           "Description" : "Wednesday"                                   
        },
        {
           "Number" : 4,
           "Description" : "Thursday"                                               
        },
        {
           "Number" : 5,
           "Description" : "Friday"                                               
        },
        {
           "Number" : 6,
           "Description" : "Saturday"                                               
        }
    ];

    
    
    $('.btnLink').click(function(){
            url = "?content=" + this.id.split('-')[1] ;
            
            $(location).attr("href", url);				
    });

	$.each(weekDays, function( index, value ) {
            if (index !== 0) {
                Render.SelectHours(index, value);
            }                
        });
        
        Render.SelectHours(0, weekDays[0]);
        
        $('.hour-start').change(function(){       
	        
	        $("#"+this.id + "-end").prop('disabled', false);
	        $("#"+this.id + "-end").empty();
	        var startHour = $(this).val();
	        for (var hour = 0; hour <= (24*60)-15; hour += 15) {        
	            if(Utilities.addMinutes(startHour, hour) !== "00:00"){
	                $("#"+this.id + "-end").append('<option value="' + Utilities.addMinutes(startHour, hour)+ '">' + Utilities.addMinutes(startHour, hour) + '</option>');
	            }else{
	                break;
	            }                       
	       }                       
	    });

        $('.hour-end').change(function(){
                   var durationId = '#duration-' + this.id.split('-')[1];
                   var startHour = $("#start-" + this.id.split('-')[1]).val();
                   var endHour = $(this).val();
                   var duration = Utilities.calculateHours(startHour, endHour);
                   $(durationId).text(duration);
                   refreshTotal();
               });
        $('#table-form').append('<tfoot><tr><th colspan="3">Total worked hours of the week</th><td class="ts-total"></td></tr></tfoot>');	

	function refreshTotal(){
	        var totalMin = 0;

	        $('.duration').each(function(){
	            if ($(this).text().length>0) {
	                totalMin += Utilities.hourToMinutes($(this).text());
	            }
	        });
	        var totalHour = Utilities.minutesToHour(totalMin);
	        $('.ts-total').text(totalHour);
	}   
            

        
});