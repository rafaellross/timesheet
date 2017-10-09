jQuery.ajaxSetup({async:false});
$(document).ready(function(){
   
    function findObjIndex(arr, property, value){
        var result = -1;
        $.each( arr, function(key, val) {
            if (val[property] === value) {                
                result = key;
            }            
        });
        return result;
    }    
    
    var objArr = [
        {
           "id" : 1,
           "name" : "Test"
        },
        {
           "id" : 2,
           "name" : "Test"
        },
        {
           "id" : 3,
           "name" : "Test"
        },
        {
           "id" : 4,
           "name" : "Test"
        }                
    ];       
    
    var indexItem = findObjIndex(objArr, "id", 1);
    objArr.splice(indexItem, 1);
    //console.log(indexItem);
    console.log(objArr);
    //console.log(objArr);
    //console.log(objArr);
    //console.log(final);
});