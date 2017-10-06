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
        $.getJSON( "list-employees.php?id=" + employeeID, function( data ) {
            return data;
        });
    }
    static employeeForSelectList(employee){
        
        var result = `    
                        <div class="card">
                          <div class="card-header" role="tab" id="heading-` + employee.id + `">    
                            <h5 class="mb-0">
                              <div>
                                  <a class="collapsed" data-toggle="collapse" href="#collapse` + employee.id + `" aria-expanded="true" aria-controls="collapse-` + employee.id + `">
                                  <span>` + employee.name + `</span>
                                  </a>
                                 <button type="button" class="btnAdd btn btn-primary float-right" id="` + employee.id + `">Add</button>
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
    
    

}