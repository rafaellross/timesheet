class Utilities{
    static addMinutes(time, minsToAdd) {
        function D(J){ 
            return (J<10? '0':'') + J;
        };
        var piece = time.split(':');
        var mins = piece[0]*60 + +piece[1] + +minsToAdd;
        return D(mins%(24*60)/60 | 0) + ':' + D(mins%60);  
    }

   static calculateHours(startHour, endHour) {
        function D(J){ 
            return (J<10? '0':'') + J;
        };
        var startPiece = startHour.split(':');
        var startMins = startPiece[0]*60 + +startPiece[1];

        var endPiece = endHour.split(':');
        var endMins = endPiece[0]*60 + +endPiece[1];

        var totalMins = endMins - startMins;

        return D(totalMins%(24*60)/60 | 0) + ':' + D(totalMins%60);  
   } 

    static hourToMinutes(hour){
        var piece = hour.split(':');
         var mins = piece[0]*60 + +piece[1];
         return mins;
    }

    static minutesToHour(minutes){
         function D(J){ 
             return (J<10? '0':'') + J;
         };
         return D(minutes/60 | 0) + ':' + D(minutes%60);  
    }
   
    static listEmployees(name = ""){
        $.getJSON( "list-employees.php?name=" + name, function( data ) {            
         var items = [];
         items.push('<div id="accordion" role="tablist">');
         $.each( data, function( key, val ) {
             
           items.push(Utilities.employeeForSelectList(val));
         });

         $( "<div/>", {
           "class": "my-new-list",
           html: items.join( "" )
         }).appendTo( "#employee" );
       });           
    }
    
    static loadEmployee(employeeID){
        var employee = {
            id : null,
            name : null
        };
        if (employee !== 'undefined') {
            $.getJSON( "list-employees.php?id=" + employeeID, function( data ) {
                $.each( data, function(key, val) {
                    employee.id = val.id;
                    employee.name = val.name;
                });
            });
            
        }
        return employee;
    }
    
    static containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].id === obj.id) {
            return true;
        }
    }
        return false;
    }
    
    static removeEmployee(arr, employeeId){
        var result = [];
        $.each( arr, function(key, val) {
            if (val.id !== employeeId) {
                result.push(val);
            }
            return result;
        });
        
    }
    
    static employeeForSelectList(employee, selected = false){
        var typeButton;
        var classButton;
        var buttonValue;
        if (selected) {
            typeButton = "btn-danger";
            classButton = "btnRemove";
            buttonValue = "Remove";
        }else{
            typeButton = "btn-primary";
            classButton = "btnAdd";            
            buttonValue = "Add";
        }
            
        var result = `    
                        <div class="card">
                          <div class="card-header" role="tab" id="heading-` + employee.id + `">    
                            <h5 class="mb-0">
                              <div>
                                  <a class="collapsed" data-toggle="collapse" href="#collapse` + employee.id + `" aria-expanded="true" aria-controls="collapse-` + employee.id + `">
                                  <span>` + employee.name + `</span>
                                  </a>
                                 <button type="button" class="`+ classButton + ` btn ` + typeButton + ` float-right btn-lg" id="` + employee.id + `">`+ buttonValue + `</button>
                              </div>       
                            </h5> 
                          </div>        
                          </div>
                          <div id="collapse` + employee.id + `" class="collapse" role="tabpanel" aria-labelledby="heading` + employee.id + `" data-parent="#accordion">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-4">
                                        ` + employee.image + `
                                    </div>
                                    <div class="col-8">
                                        <div class="col-12">
                                         <h4 class="card-title">Name</h4>
                                         <h6 class="card-subtitle mb-2 text-muted">` + employee.name + `</h6>                     
                                        </div>
                                        <div class="col-12">
                                         <h4 class="card-title">DOB</h4>
                                         <h6 class="card-subtitle mb-2 text-muted">` + employee.dob + `</h6>                     
                                        </div>
                                        <div class="col-12">
                                         <h4 class="card-title">Phone:</h4>
                                         <h6 class="card-subtitle mb-2 text-muted">` + employee.phone + `</h6>                     
                                        </div>

                                    </div>
                                </div>
                            </div>
                          </div>

                        </div>

                      `;
        return result;
    }
    
    static addSelected(employee){
        var result = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <span>` + employee +` </span>
                      </div>`;
        return result;
    }        
    
    
    static uniqueold(list) {
        var result = [];
        $.each(list, function(i, e) {
            if ($.inArray(e, result) === -1) result.push(e);
        });
        return result;
    }

    static unique(list) {
    var result = [];
    $.each(list, function(i, e) {
      if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
  }

    static updateSeleteds(selecteds){
        $('#employees-selected').empty();
        selecteds = Utilities.unique(selecteds);
        $.each( selecteds, function( key, val ) {
            $('#employees-selected').append(Utilities.employeeForSelectList(val, true));
        });
    }
}